<?php

namespace App\Auth\Services;

use App\Auth\AccessToken;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

class DiscordService
{
    /**
     * The Session key for state
     */
    const DISCORD_SESSION_STATE = '_discord_state';

    /**
     * Base URL for Oauth
     */
    const BASE_URL = 'https://discord.com/api';

    /**
     * Endpoint for authorization
     */
    const ENDPOINT_AUTHORIZE = 'oauth2/authorize';

    /**
     * Endpoint for get token
     */
    const ENDPOINT_TOKEN = 'oauth2/token';

    /**
     * Endpoint for revoke authorization
     */
    const ENDPOINT_REVOKE = 'oauth2/token/revoke';

    /**
     * Endpoint for userinfo
     */
    const ENDPOINT_USERINFO = 'users/@me';

    /**
     * The clientId
     *
     * @var string
     */
    protected $clientId;

    /**
     * The clientSecret
     *
     * @var string
     */
    protected $clientSecret;

    /**
     * The callbackUrl
     *
     * @var string
     */
    protected $callbackUrl;

    /**
     * The state for authorization request
     *
     * @var string
     */
    protected $state;

    /**
     * The Constructor
     *
     * @return void
     */
    public function __construct()
    {
        $this->clientId = Config::get('discord.client_id');
        $this->clientSecret = Config::get('discord.client_secret');
        $this->callbackUrl = route('discord.callback');

        $this->state = $this->generateRandomState();
    }

    /**
     * Return the login URL
     *
     * @return string
     */
    public function getLoginUrl()
    {
        $params = [
            'scope' => 'identify email guilds',
            'response_type' => 'code',
            'client_id' => $this->clientId,
            'redirect_uri' => $this->callbackUrl,
            'state' => $this->state,
        ];

        return $this->buildUrl(self::ENDPOINT_AUTHORIZE, $params);
    }

    /**
     * Return the logout URL
     *
     * @return string
     */
    public function getLogoutUrl()
    {
        return '';
    }

    /**
     * Exchange Code for Access Token
     *
     * @param  string $code
     * @return array
     */
    public function exchangeCode($code)
    {
        $url = $this->buildUrl(self::ENDPOINT_TOKEN);
        $params = [
            'code' => $code,
            'grant_type' => 'authorization_code',
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
            'redirect_uri' => $this->callbackUrl,
        ];

        $response = HTTP::asForm()->post($url, $params);
        if (! $response->successful()) {
            $this->log($response);
            return false;
        }

        $token = $response->json();
        $token['expires_in_time'] = (time() - 60) + ($token['expires_in'] ?? 0);

        return $token;
    }

    /**
     * Refresh access token
     *
     * @param  string $refreshToken
     * @return array
     */
    public function refreshToken($credentials)
    {
        $url = $this->buildUrl(self::ENDPOINT_TOKEN);
        $params = [
            'scope' => 'identify email guilds',
            'grant_type' => 'refresh_token',
            'refresh_token' => $credentials['refresh_token'],
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
            'redirect_uri' => $this->callbackUrl,
        ];

        $response = HTTP::asForm()->post($url, $params);
        if (! $response->successful()) {
            $this->log($response);
            return false;
        }

        $token = $response->json();
        $token['expires_in_time'] = (time() - 60) + ($token['expires_in'] ?? 0);

        return $token;
    }

    /**
     * Get access token from Code
     * @param  array $credentials
     * @return array
     */
    public function getUserProfile($credentials)
    {
        $credentials = $this->refreshTokenIfNeeded($credentials);
        $params = [
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
        ];

        $url = $this->buildUrl(self::ENDPOINT_USERINFO, $params);
        $response = HTTP::withToken($credentials['access_token'] ?? '')->get($url);
        if (! $response->successful()) {
            $this->log($response);
            return false;
        }

        return $response->json();
    }

    /**
     * Validate State from Session
     *
     * @return void
     */
    public function validateState($state)
    {
        $challenge = session()->get(self::DISCORD_SESSION_STATE);
        return (! empty($state) && ! empty($challenge) && $challenge === $state);
    }

    /**
     * Save State to Session
     *
     * @return void
     */
    public function saveState()
    {
        session()->put(self::DISCORD_SESSION_STATE, $this->state);
        session()->save();
    }

    /**
     * Remove State from Session
     *
     * @return void
     */
    public function forgetState()
    {
        session()->forget(self::DISCORD_SESSION_STATE);
        session()->save();
    }

    /**
     * Build a URL with params
     *
     * @param  string $url
     * @param  array $params
     * @return string
     */
    public function buildUrl($url, $params = [])
    {
        $url = self::BASE_URL . '/' . ltrim($url, '/');
        return $url . '?' . Arr::query($params);
    }

    /**
     * Check we need to refresh token and refresh if needed
     *
     * @param  array $credentials
     * @return array
     */
    protected function refreshTokenIfNeeded($credentials)
    {
        if (! is_array($credentials) || empty($credentials['expires_in_time']) || empty($credentials['refresh_token'])) {
            return $credentials;
        }

        $expire = $credentials['expires_in_time'];
        if (time() <= $expire) {
            return $credentials;
        }

        $credentials = $this->refreshToken($credentials);
        if (empty($credentials['access_token'])) {
            return [];
        }

        return $credentials;
    }

    /**
     * Log a error
     *
     * @param  Response $e
     * @return void
     */
    protected function log(Response $response)
    {
        Log::error('[Discord Service] ' . $response->body());
    }

    /**
     * Return a random state parameter for authorization
     *
     * @return string
     */
    protected function generateRandomState()
    {
        return bin2hex(random_bytes(16));
    }
}
