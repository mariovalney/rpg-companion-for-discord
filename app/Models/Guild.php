<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Route;
use App\Models\Channel;
use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
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
        'icon',
    ];

    /**
     * Get the users associated with the guild
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

    /**
     * Get the webhooks associated with the guild
     */
    public function webhooks()
    {
        return $this->hasMany('App\Models\Webhook');
    }

    /**
     * Check current user belongs to this guild
     */
    public function belongsToUser()
    {
        $id = Auth::id();
        return ! empty($this->users()->find($id));
    }

    /**
     * Sync guild data from Discord
     */
    public function syncFromDiscord()
    {
        // Sync Guild
        $guild = DiscordApi::bot()->get('guilds/' . $this->id);
        if (empty($guild) || empty($guild['id'])) {
            $this->has_bot = false;
            $this->save();

            return;
        }

        $this->fill($guild);
        $this->has_bot = true;
        $this->save();

        // Sync Channels
        $channels = (array) DiscordApi::bot()->get('guilds/' . $this->id . '/channels');
        foreach ($channels as $channel) {
            if (empty($channel['id']) || ($channel['type'] ?? '' ) !== Channel::CHANNEL_TYPE_TEXT) {
                continue;
            }

            $model = Channel::findOrNew($channel['id']);

            $model->id = $channel['id'];
            $model->fill($channel);
            $model->save();
        }

        // Sync Webhooks
        $channelsWithWebhooks = [];
        foreach ($this->webhooks as $webhook) {
            $info = $webhook->getInfo();

            if ( empty( $info['id'] ) || empty( $info['token'] ) ) {
                $webhook->delete();
                return;
            }

            if (in_array($webhook->channel_id, $channelsWithWebhooks)) {
                $webhook->delete();
                return;
            }

            $webhook->fill($info);
            $webhook->save();

            $channelsWithWebhooks[] = $webhook->channel_id;
        }

        $this->refresh();
    }
}
