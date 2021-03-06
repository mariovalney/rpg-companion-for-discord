<?php

namespace App\Support\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see App\Services\DiscordApi
 */
class DiscordApi extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'discord-api';
    }
}
