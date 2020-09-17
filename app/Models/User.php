<?php

namespace App\Models;

use App\Auth\Models\DiscordUser;
use App\Models\Guild;
use App\Services\DiscordApi;

class User extends DiscordUser
{
    /**
     * The API
     *
     * @var DiscordApi
     */
    protected $api;

    /**
     * Constructor
     */
    public function __construct(array $attributes = [])
    {
        $this->api = new DiscordApi();
        parent::__construct($attributes);
    }

    /**
     * Get the token associated with the user
     */
    public function token()
    {
        return $this->hasOne('App\Models\Token');
    }

    /**
     * Get the guilds associated with the user
     */
    public function guilds()
    {
        return $this->belongsToMany('App\Models\Guild');
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

    public function syncFromDiscord()
    {
        $guilds = $this->api->get('users/@me/guilds', []);

        foreach ($guilds as $guild) {
            $model = Guild::findOrNew($guild['id']);

            $model->id = $guild['id'];
            $model->fill($guild);
            $model->save();
        }

        $this->guilds()->sync(array_column($guilds, 'id'));

        return '';
    }
}
