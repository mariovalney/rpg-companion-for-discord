<?php

namespace App\Models;

use Auth;
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

    public function sendMessage()
    {
        $data = [
            'embeds' => [
                [
                    'title' => 'Nome da Rolagem',
                    'description' => '1d20 + 5 => 12 + 5 => 17',
                ]
            ]
        ];

        if (! empty(Auth::user()->username)) {
            $data['username'] = Auth::user()->username;
        }

        if (! empty(Auth::user()->getAvatarUrl())) {
            $data['avatar_url'] = Auth::user()->getAvatarUrl();
        }

        $response = Http::post($this->url . '?wait=true', $data);

        return $response->successful();
    }
}
