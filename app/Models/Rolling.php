<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Route;
use App\Models\Channel;
use Illuminate\Database\Eloquent\Model;

class Rolling extends Model
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
    ];

    /**
     * Get the channel associated
     */
    public function channel()
    {
        return $this->belongsTo('App\Models\Channel');
    }

    /**
     * Get the user associated
     */
    public function users()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Print the rolling to hummans
     */
    public function describe()
    {
        return '1d20 + 20';
    }

    /**
     * Create a roll message
     *
     * @return array
     */
    public function createMessage()
    {
        $rolling = '';
        $result = 12;

        $message = [
            'fields' => [
                [
                    'name' => sprintf('%s: %s', __('screens/rollings.result'), $result),
                    'value' => $rolling ?: '-',
                ],
            ],
        ];

        if (! empty($this->title)) {
            $message['title'] = $this->title;
        }

        if (! empty($this->description)) {
            $message['description'] = $this->description;
        }

        return $message;
    }
}
