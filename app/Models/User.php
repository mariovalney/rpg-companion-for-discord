<?php

namespace App\Models;

use DiscordApi;
use Guilds;
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
        return $this->belongsToMany('App\Models\Guild')->orderBy('has_bot', 'desc')->orderBy('name', 'asc');
    }

    /**
     * Get the token associated with the user
     */
    public function token()
    {
        return $this->hasOne('App\Models\Token');
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
}
