<?php

namespace App\Models;

use Auth;
use DiscordApi;
use Exception;
use Guilds;
use Route;
use Str;
use App\Models\Channel;
use App\Models\Rolling\Advantage;
use App\Models\Rolling\RollingPart;
use App\Support\Traits\HasAdvantage;
use App\Support\Traits\HasVariablesToParse;
use App\Support\Traits\Livewire\HasRollingParts;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\ValidationException;

class Rolling extends Model
{
    use HasAdvantage;
    use HasRollingParts;
    use HasVariablesToParse;

    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'advantage',
        'position',
    ];

    /**
     * User attributes
     *
     * @var array
     */
    protected $attributes = [
        'advantage' => 0,
        'position' => 0,
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
    public function getDescription($limit = 200)
    {
        $description = $this->parseVariables($this->description, $this->getGuildId());
        return Str::limit($description, $limit);
    }

    /**
     * Check we have advantage
     *
     * @return boolean
     */
    public function hasAdvantage()
    {
        return ! empty($this->advantage) && ! $this->advantage->isNone();
    }

    /**
     * Check we have disadvantage
     *
     * @return boolean
     */
    public function hasDisadvantage()
    {
        return ! empty($this->advantage) && $this->advantage->isD20();
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
            $value = $part->toText();

            if ($part->isVariable()) {
                $variable = Variable::findByName($part->variable, $this->getGuildId());

                if (! empty($variable->value)) {
                    $value .= ' (' . $variable->value . ')';
                }
            }

            $text[] = $value;
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
        // Validate Rolling
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

        // Validate Advantages
        if (! $this->hasAdvantage()) {
            return;
        }

        if (empty($this->rolling->firstWhere('dice', '>', 0))) {
            throw ValidationException::withMessages(['advantage' => __('screens/rolling.validation.advantage.nodice')]);
        }

        if ($this->advantage->isD20() && empty($this->rolling->firstWhere('dice', '=', 20))) {
            throw ValidationException::withMessages(['advantage' => __('screens/rolling.validation.advantage.nod20dice')]);
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
     * @param  $advantage
     *
     * @return array
     */
    public function createMessage($advantage = null)
    {
        $rolling = [];
        $result = 0;

        // Make rolls
        foreach ($this->rolling as $part) {
            $roll = $part->roll($advantage);

            $rolling[] = $roll->description;
            $result += $roll->value;
        }

        // Result string
        $string = __('screens/rollings.result');
        if (! empty($advantage)) {
            $string = __('screens/rollings.result_advantaged');

            if ($advantage->isDouble()) {
                $string = __('screens/rollings.result_doubled');
            }

            if ($advantage->disadvantage) {
                $string = __('screens/rollings.result_disadvantaged');
            }
        }

        // Prepating rolling
        $rolling = implode(' ', $rolling);
        $rolling = trim($rolling, '+ ');

        if (! empty($rolling)) {
            $message = [
                'fields' => [
                    [
                        'name' => Str::limit(sprintf('%s: %s', $string, $result), 250),
                        'value' => '*' . Str::limit($rolling, 1000) . '*',
                    ],
                ],
            ];
        }

        // Title with results
        if (! empty($this->title)) {
            $message['title'] = Str::limit($this->getTitle(), 250);

            if (! empty($rolling)) {
                $message['title'] .= ' (' . $result . ')';
            }
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
