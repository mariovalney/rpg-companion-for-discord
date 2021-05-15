<?php

namespace App\Models;

use Auth;
use Log;
use App\Models\Channel;
use App\Models\Guild;
use Illuminate\Support\Facades\Http;
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

    /**
     * Get the guild associated
     */
    public function guild()
    {
        return $this->belongsTo('App\Models\Guild');
    }

    /**
     * Get the channel associated
     */
    public function channel()
    {
        return $this->belongsTo('App\Models\Channel');
    }

    /**
     * Delete the model from the database.
     *
     * @return bool|null
     *
     * @throws \Exception
     */
    public function delete()
    {
        if (! empty($this->url)) {
            Http::delete($this->url);
        }

        return parent::delete();
    }

    /**
     * Save the model to the database.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = [])
    {
        // Make sure we already have a channel
        if (! empty($this->channel_id) && empty(Channel::find($this->channel_id))) {
            $channel = new Channel();
            $channel->id = $this->channel_id;
            $channel->name = $this->channel_id;
            $channel->guild_id = $this->guild_id;

            $channel->save();
        }

        return parent::save($options);
    }

    /**
     * Get info from Discord
     *
     * @return array
     */
    public function getInfo()
    {
        $response = Http::get($this->url);

        if (! $response->successful()) {
            return [];
        }

        return $response->json();
    }

    /**
     * Send a message to channel
     *
     * @return boolean
     */
    public function sendMessage($message)
    {
        $data = [
            'embeds' => [ $message ]
        ];

        if (! empty(Auth::user()->username)) {
            $data['username'] = Auth::user()->username;
        }

        if (! empty(Auth::user()->getAvatarUrl())) {
            $data['avatar_url'] = Auth::user()->getAvatarUrl();
        }

        $response = Http::post($this->url . '?wait=true', $data);

        if ($response->successful()) {
            return true;
        }

        // Log the error
        Log::error('[Discord Webhook] ' . $response->status() . "\n" . print_r($response->body(), true));

        return false;
    }
}
