<?php

namespace App\Auth\Middleware;

use Illuminate\Auth\Middleware\Authenticate;

class DiscordAuthenticated extends Authenticate
{
    /**
     * Redirect user if it's not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request)
    {
        return route('discord.login');
    }
}
