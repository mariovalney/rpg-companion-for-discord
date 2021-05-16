<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Route;
use Str;
use App\Models\Channel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\ValidationException;

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
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the title or a placeholder
     *
     * @return string
     */
    public function getTitle()
    {
        if (empty($this->title)) {
            return '#' . $this->id;
        }

        return $this->title;
    }

    /**
     * Get the description with formatting parsed
     *
     * @return string
     */
    public function getDescription()
    {
        return nl2br($this->description);
    }

    /**
     * Print the rolling to hummans
     */
    public function describe()
    {
        return '1d20 + 20';
    }

     /**
     * Validate the rolling
     *
     * @throws ValidationException
     */
    public function validate()
    {
        // throw ValidationException::withMessages(['description' => '']);
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
                    'name' => Str::limit(sprintf('%s: %s', __('screens/rollings.result'), $result), 250),
                    'value' => Str::limit(($rolling ?: '-'), 1000),
                ],
            ],
        ];

        if (! empty($this->title)) {
            $message['title'] = Str::limit($this->title, 250);
        }

        if (! empty($this->description)) {
            $message['description'] = Str::limit($this->description, 2000);
        }

        // TODO: Image support
        // $message['image'] = [ 'url' => '' ];

        return [ $message ];
    }
}
