<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Route;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    /**
     * The text type for channels
     * @link https://discord.com/developers/docs/resources/channel#channel-object-channel-types
     *
     * @var string
     */
    const CHANNEL_TYPE_TEXT = 0;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'topic',
        'guild_id',
    ];

    /**
     * Get the guild associated with the channel
     */
    public function guild()
    {
        return $this->belongsTo('App\Models\Guild');
    }

    /**
     * Get the webhooks associated with the channel
     */
    public function webhooks()
    {
        return $this->hasMany('App\Models\Webhook');
    }

    /**
     * Get the user rollings associated to this channel
     */
    public function rollings()
    {
        return $this->hasMany('App\Models\Rolling')->where('user_id', Auth::id());
    }
}
