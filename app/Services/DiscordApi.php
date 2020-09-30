<?php

namespace App\Services;

use Auth;
use App\Models\User;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DiscordApi
{
    /**
     * Base URL for Oauth
     */
    const BASE_URL = 'https://discord.com/api';

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
     * The Constructor
     *
     * @return void
     */
    public function __construct(User $user = null)
    {
        $this->clientId = Config::get('discord.client_id');
        $this->clientSecret = Config::get('discord.client_secret');
    }

    /**
     * A simple get for API
     *
     * @return mixed
     */
    public function get($path, $default = '')
    {
        $url = $this->buildUrl($path);
        $response = HTTP::withToken($this->getAccessToken())->get($url);
        if (! $response->successful()) {
            $this->log($response);
            return $default;
        }

        return $response->json();
    }

    /**
     * Build a URL with params
     *
     * @param  string $url
     * @param  array $params
     * @return string
     */
    protected function buildUrl($url, $params = [])
    {
        $url = self::BASE_URL . '/' . ltrim($url, '/');
        return $url . '?' . Arr::query($params);
    }

    /**
     * Get the Access Token for requisitions
     *
     * @return string
     */
    protected function getAccessToken()
    {
        $token = Auth::user() ? Auth::user()->token : null;
        $token = $token ? $token->getValidAccessToken() : null;

        return $token;
    }

    /**
     * Log a error
     *
     * @param  Response $e
     * @return void
     */
    protected function log(Response $response)
    {
        Log::error('[Discord API Service] ' . $response->body());
    }
}
