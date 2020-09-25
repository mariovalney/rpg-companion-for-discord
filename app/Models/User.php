<?php

namespace App\Models;

use App\Auth\Models\DiscordUser;
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
        $this->api = new DiscordApi($this);
        parent::__construct($attributes);
    }

    /**
     * Get the guilds associated with the user
     */
    public function guilds()
    {
        return $this->belongsToMany('App\Models\Guild');
    }

    /**
     * Get the token associated with the user
     */
    public function token()
    {
        return $this->hasOne('App\Models\Token');
    }

    /**
     * Get variables associated with the user
     */
    public function variables()
    {
        return Variable::where($this->myVariableArgs());
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
     * Sync data from Discord
     *
     * @return void
     */
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
    }

    /**
     * Add or update a var
     *
     * @return void
     */
    public function updateVariable($name, $value)
    {
        $data = $this->myVariableArgs(['name' => $name]);

        $variable = Variable::firstOrNew($data);
        $variable->value = $value;

        return $variable->save();
    }

    /**
     * Retrieve a var
     *
     * @return void
     */
    public function getVariable($name, $default = null)
    {
        $data = $this->myVariableArgs(['name' => $name]);

        $variable = Variable::where($data)->first();
        if (! $variable) {
            return $default;
        }

        return $variable->value;
    }

    /**
     * Helper to keep variables in guild-user context
     *
     * @param  array  $attributes
     * @return array
     */
    private function myVariableArgs($attributes = [])
    {
        return array_merge([
            'user_id' => $this->id,
            'guild_id' => Guild::current()
        ], $attributes);
    }
}
