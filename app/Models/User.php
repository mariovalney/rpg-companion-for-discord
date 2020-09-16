<?php

namespace App\Models;

use App\Services\DiscordApi;
use App\Auth\Models\DiscordUser;

class User extends DiscordUser
{
    /**
     * The API
     *
     * @var DiscordApi
     */
    protected $api;

    /**
     * The user guilds
     *
     * @var array
     */
    protected $guilds;

    /**
     * Constructor
     */
    public function __construct(array $attributes = [])
    {
        $this->api = new DiscordApi();
        parent::__construct($attributes);
    }

    /**
     * Retrieve the user avatar URL
     *
     * @return string
     */
    public function getAvatarUrl()
    {
        return 'https://cdn.discordapp.com/avatars/' . $this->id . '/' . $this->avatar . '.png';
    }

    /**
     * Retrieve the user guilds
     *
     * @return string
     */
    public function getGuilds($refresh = false)
    {
        if ($this->guilds === null || $refresh) {
            $this->guilds = $this->api->get('users/@me/guilds', []);
        }

        return $this->guilds;
    }
}
