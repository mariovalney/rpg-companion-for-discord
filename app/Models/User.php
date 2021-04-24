<?php

namespace App\Models;

use DiscordApi;
use App\Auth\Models\DiscordUser;
use App\Support\Traits\HasGuildPermissions;

class User extends DiscordUser
{
    use HasGuildPermissions;

    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'avatar',
        'username',
        'discriminator',
    ];

    /**
     * User attributes
     *
     * @var array
     */
    protected $attributes = [
        'email' => '',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'guild_permissions' => 'array',
    ];

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
        $guilds = DiscordApi::user()->get('users/@me/guilds', []);

        $permissions = [];
        foreach ($guilds as $guild) {
            $model = Guild::findOrNew($guild['id']);

            $model->id = $guild['id'];
            $model->fill($guild);
            $model->save();

            // Set guild permissions
            $permissions[$model->id] = $guild['permissions'] ?? [];
        }

        // Sync guilds
        $this->guilds()->sync(array_column($guilds, 'id'));

        // Set permissions
        $this->guild_permissions = $permissions;
        $this->save();
    }

    /**
     * Add or update a var
     *
     * @return void
     */
    public function updateVariable($name, $value, $guild = null)
    {
        $data = $this->myVariableArgs(['name' => $name, 'guild_id' => $guild]);

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
            'guild_id' => Guild::currentId()
        ], array_filter($attributes));
    }
}
