<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Rolling\RollingPart;
use App\Support\Traits\Livewire\HasAlert;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class RollingForm extends Component
{
    use HasAlert;

    /**
     * Rolling
     *
     * @var Rolling
     */
    public $rolling;

    /**
     * Channel
     *
     * @var Channel
     */
    public $channel;

    /**
     * Variables to rolling input
     *
     * @var array
     */
    public $variables;

    /**
     * The webhook ID for rolling
     *
     * @var array
     */
    public $webhookId;

    /**
     * The current rolling advantage value
     *
     * @var array
     */
    public $rollingAdvantage = 0;

    /**
     * Rolling Inputs
     *
     * @var array
     */
    public $rollingInputs = [
        'rolling' => null,
    ];

    /**
     * Event listenrs
     *
     * @var array
     */
    protected $listeners = [
        'changeRollingInput' => 'changeRollingInputEvent'
    ];

    /**
     * Rolling Rules
     *
     * @var Rolling
     */
    protected $rules = [
        'rolling.title'       => 'required|string|min:3|max:250',
        'rolling.description' => 'string|min:3|max:2500',
    ];

    /**
     * The constructor
     */
    public function __construct()
    {
        $this->messages = [
            'rolling.title.required'   => __('screens/rolling.validation.title.required'),
            'rolling.title.min'        => __('screens/rolling.validation.title.min'),
            'rolling.title.max'        => __('screens/rolling.validation.title.max'),
            'rolling.description.min'  => __('screens/rolling.validation.description.min'),
            'rolling.description.max'  => __('screens/rolling.validation.description.max'),
        ];
    }

    /**
     * Mount the component
     *
     * @return void
     */
    public function mount()
    {
        if (empty($this->channel) || empty($this->channel->webhooks)) {
            return null;
        }

        $this->webhookId = (string) $this->channel->webhooks[0]->id;
        $this->rollingAdvantage = $this->rolling->advantage->type ?? 0;
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rolling-form');
    }

    /**
     * Trigger on dehydrate
     *
     * @return void
     */
    public function dehydrate()
    {
        $this->emit('RunDiscordMarkdown');
    }

    /**
     * Event when a rolling input changed
     *
     * @param  array $value
     * @param  string $field
     * @return void
     */
    public function changeRollingInputEvent($field, $value)
    {
        $this->rollingInputs[ $field ] = $value;
    }

    /**
     * Save the rolling
     *
     * @return void
     */
    public function save()
    {
        // Update rolling inputs
        foreach ($this->rollingInputs as $attribute => $value) {
            if ($value === null) {
                continue;
            }

            $this->rolling->$attribute = array_map([RollingPart::class, 'create'], $value);
        }

        // Update advantage
        $this->rolling->advantage = (int) $this->rollingAdvantage;

        $this->validate();
        $this->emit('RunDiscordMarkdown');

        try {
            $creating = false;

            if (empty($this->rolling->id)) {
                $creating = true;
                $this->rolling->user()->associate(Auth::user());
                $this->rolling->channel()->associate($this->channel);
            }

            $this->rolling->validate();
            $saved = $this->rolling->save();

            if ($creating && $saved) {
                $route = route('rollings.edit', ['guild' => $this->channel->guild->id, 'channel' => $this->channel->id, 'rolling' => $this->rolling->id]);
                redirect()->to($route);
                return;
            }

            $this->alert(__('screens/rolling.form.success'), 'success');
        } catch (ValidationException $e) {
            $errors = [];
            $rollingErrors = [];

            foreach ($e->errors() as $key => $value) {
                if (in_array($key, array_keys($this->rollingInputs))) {
                    $rollingErrors = array_merge((array) $value, $rollingErrors);
                    continue;
                }

                $errors['rolling.' . $key] = $value;
            }

            $this->alert(implode('<br>', $rollingErrors), 'error');
            $this->setErrorBag($errors);
        } catch (Exception $e) {
            $this->alert(__('screens/rolling.form.error'), 'error');
        }
    }
}
