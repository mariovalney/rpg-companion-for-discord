<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Exception;
use Guilds;
use Route;
use Str;
use App\Models\Channel;
use App\Models\Rolling\RollingPart;
use App\Support\Traits\HasVariablesToParse;
use App\Support\Traits\Livewire\HasRollingParts;
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
        'has_advantage',
        'position',
    ];

    /**
     * User attributes
     *
     * @var array
     */
    protected $attributes = [
        'has_advantage' => false,
        'position' => 0,
    ];

    /**
     * Cast.
     *
     * @var array
     */
    protected $casts = [
        'has_advantage' => 'boolean',
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
        if ($this->rolling->isEmpty()) {
            throw ValidationException::withMessages(['rolling' => __('screens/rolling.validation.rolling.required')]);
        }

        $last = $this->rolling->last();

        if (empty($last)) {
            throw ValidationException::withMessages(['rolling' => __('screens/rolling.validation.rolling.required')]);
        }

        if ($last->isSignal()) {
            throw ValidationException::withMessages(['rolling' => __('screens/rolling.validation.rolling.missing_last')]);
        }

        try {
            foreach ($this->rolling as $rolling) {
                $rolling->validate();
            }
        } catch (Exception $e) {
            throw ValidationException::withMessages(['rolling' => $e->getMessage()]);
        }

        if ($this->has_advantage && empty($this->rolling->firstWhere('dice', '>', 0))) {
            throw ValidationException::withMessages(['has_advantage' => __('screens/rolling.validation.has_advantage.nodice')]);
        }
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
