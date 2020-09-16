<?php

namespace App\Auth\Guard;

use App\Auth\Facades\DiscordAuth;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Contracts\Session\Session;
use RuntimeException;

class DiscordGuard implements Guard
{
    /**
     * @var null|Authenticatable|DiscordUser
     */
    protected $user;

    /**
     * Constructor.
     *
     * @param Request $request
     */
    public function __construct(UserProvider $provider, Session $session, Request $request)
    {
        $this->provider = $provider;
        $this->request = $request;

        $this->session = $session;
    }

    /**
     * Determine if the current user is authenticated.
     *
     * @return bool
     */
    public function check()
    {
        return (bool) $this->user();
    }

    /**
     * Determine if the current user is a guest.
     *
     * @return bool
     */
    public function guest()
    {
        return ! $this->check();
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user()
    {
        if (! is_null($this->user)) {
            return $this->user;
        }

        $id = $this->session->get($this->getSessionName());
        if (! empty($id)) {
            $this->user = $this->provider->retrieveById($id);
        }

        return $this->user;
    }

    /**
     * Get the ID for the currently authenticated user.
     *
     * @return int|string|null
     */
    public function id()
    {
        $user = $this->user();
        return $user->id ?? null;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function validate(array $credentials = [])
    {
        if (empty($credentials['access_token'])) {
            return false;
        }

        return true;
    }

    /**
     * Set the current user.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     * @return void
     */
    public function setUser(Authenticatable $user)
    {
        $this->user = $user;
    }

    /**
     * Attempt to authenticate a user using the given credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function attempt(array $credentials = [])
    {
        $user = $this->provider->retrieveByCredentials($credentials);
        if (! empty($user->id)) {
            $this->user = $user;
            $this->session->put($this->getSessionName(), $this->user->id);

            return true;
        }

        return false;
    }

    /**
     * Try to authenticate the user
     *
     * @throws RuntimeException
     * @return boolean
     */
    public function authenticate()
    {
        \Log::error('authenticate >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.');
        return false;
        // Get Credentials
        // $credentials = DiscordAuth::retrieveToken();
        // if (empty($credentials)) {
        // }

        // $this->user = $this->provider->retrieveByCredentials($credentials);
        // $this->session->put($this->getSessionName(), $this->user->id ?? null);

        // return ! empty($this->user->id);
    }

    /**
     * Log the user out of the application.
     *
     * @return void
     */
    public function logout()
    {
        $this->session->remove($this->getSessionName());
    }

    /**
     * Get a unique identifier for the auth session value.
     *
     * @return string
     */
    protected function getSessionName()
    {
        return 'login_session_discord_' . sha1(static::class);
    }
}
