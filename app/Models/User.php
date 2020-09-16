<?php

namespace App\Models;

use App\Auth\Models\DiscordUser;

class User extends DiscordUser
{
    public function getAvatarUrl()
    {
        return 'https://cdn.discordapp.com/avatars/' . $this->id . '/' . $this->avatar . '.png';
    }
}
