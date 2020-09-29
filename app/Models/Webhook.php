<?php

namespace App\Models;

use App\Auth\Facades\DiscordAuth;
use Illuminate\Database\Eloquent\Model;

class Webhook extends Model
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'type',
        'url',
        'token',
        'name',
        'avatar',
        'channel_id',
        'guild_id',
    ];
}
