<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Rolling\RollingPart;
use App\Models\Webhook;
use App\Support\Traits\HasAlert;
use App\Support\Traits\EditingRollingParts;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class RollingForm extends Component
{
    use EditingRollingParts;
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
     * Variables
     *
     * @var array
     */
    public $variables;

    /**
     * Variable Name
     *
     * @var string
     */
    public $selectedVariable = '';

    /**
     * Current rolling
     *
     * @var array
     */
    public $editingRolling = [];

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
            'rolling.title.required'  => __('screens/rolling.validation.title.required'),
            'rolling.title.min'       => __('screens/rolling.validation.title.min'),
            'rolling.title.max'       => __('screens/rolling.validation.title.max'),
            'rolling.description.min' => __('screens/rolling.validation.description.min'),
            'rolling.description.max' => __('screens/rolling.validation.description.max'),
        ];
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function mount()
    {
        if (! empty($this->editingRolling)) {
            return;
        }

        $this->editingRolling = [];
        foreach ($this->rolling->rolling as $rolling) {
            $this->editingRolling[] = $rolling->toArray();
        }
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
     * Save the rolling
     *
     * @return void
     */
    public function save()
    {
        $this->rolling->rolling = $this->getEditingRolling();

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

            if ($creating && $this->rolling->save()) {
                $route = route('rollings.edit', ['guild' => $this->channel->guild->id, 'channel' => $this->channel->id, 'rolling' => $this->rolling->id]);
                redirect()->to($route);
            }

        } catch (ValidationException $e) {
            $errors = [];
            foreach ($e->errors() as $key => $value) {
                $errors['rolling.' . $key] = $value;
            }

            $this->setErrorBag($errors);
            $this->setAlert(__('screens/rolling.form.error'), 'bad');
            return;
        }

        $this->setAlert(__('screens/rolling.form.success'), 'good');
    }

    /**
     * Get editingRolling as objects
     *
     * @return array
     */
    public function getEditingRolling()
    {
        $parts = [];
        foreach ($this->editingRolling as $key => $value) {
            $parts[ $key ] = new RollingPart($value);
        }

        return $parts;
    }

    /**
     * A variable was selected
     *
     * @return void
     */
    public function updatedSelectedVariable($value)
    {
        if (! $this->canPressButton('variable')) {
            return;
        }

        $this->rollingButtonVariable($value);
        $this->selectedVariable = '';
    }

    /**
     * Pressing the rolling button
     *
     * @return void
     */
    public function rollingButton($button)
    {
        if (! $this->canPressButton($button)) {
            return;
        }

        if (is_numeric($button)) {
            return $this->rollingButtonNumeric($button);
        }

        $method = 'rollingButton' . ucfirst($button);
        if (method_exists($this, $method)) {
            return $this->$method();
        }
    }

    /**
     * Echo the disabled class if so
     *
     * @return void
     */
    public function rollingClass($button)
    {
        echo $this->canPressButton($button) ? '' : 'disabled';
    }
}
