<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Guilds;
use Route;
use Str;
use App\Models\Channel;
use App\Models\Rolling\RollingPart;
use App\Support\Traits\HasRollingParts;
use App\Support\Traits\HasVariablesToParse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\ValidationException;

class Rolling extends Model
{
    use HasVariablesToParse;
    use HasRollingParts;

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

        return $this->parseVariables($this->title, $this->getGuildId());
    }

    /**
     * Get the description with formatting parsed
     *
     * @return string
     */
    public function getDescription()
    {
        $description = $this->parseVariables($this->description, $this->getGuildId());
        return nl2br($description);
    }

    /**
     * Print the rolling to hummans
     *
     * @return string
     */
    public function describe()
    {
        $text = [];
        foreach ($this->rolling as $part) {
            $text[] = $part->toText();
        }

        $text = implode(' ', $text);

        return trim($text, '+ ');
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
     * Get the guild ID from channel
     *
     * @return string
     */
    public function getGuildId()
    {
        if (empty($this->channel) || empty($this->channel->guild)) {
            return '';
        }

        return $this->channel->guild->id ?? '';
    }

    /**
     * Create a roll message
     *
     * @param  int $type
     *
     * @return array
     */
    public function createMessage($type = 0)
    {
        $rolling = [];
        $result = 0;

        foreach ($this->rolling as $part) {
            $roll = $part->roll($type);


            $rolling[] = $roll->description;
            $result += $roll->value;
        }

        $rolling = implode(' ', $rolling);
        $rolling = trim($rolling, '+ ');

        $message = [
            'fields' => [
                [
                    'name' => Str::limit(sprintf('%s: %s', __('screens/rollings.result'), $result), 250),
                    'value' => '*' . Str::limit(($rolling ?: '-'), 1000) . '*',
                ],
            ],
        ];

        if (! empty($this->title)) {
            $message['title'] = Str::limit($this->getTitle(), 250);
        }

        if (! empty($this->description)) {
            $message['description'] = $this->parseVariables($this->description, $this->getGuildId());
            $message['description'] = Str::limit($message['description'], 2000);
        }

        // TODO: Image support
        // $message['image'] = [ 'url' => '' ];

        return [ $message ];
    }
}
