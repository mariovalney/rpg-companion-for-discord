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
}
