<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Webhook;
use App\Support\Traits\HasAlert;
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
     * Trigger on update description
     *
     * @return void
     */
    public function updatedRollingDescription()
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
        $this->validate();
        $this->emit('RunDiscordMarkdown');

        try {
            $this->rolling->validate();
            $this->rolling->save();
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
     * Add a dice
     *
     * @param  string $id
     * @return void
     */
    public function addDice($sides)
    {
        // TODO
    }

    /**
     * Update a dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function updateDice($id, $prop, $value)
    {
        // TODO
    }

    /**
     * Remove dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function removeDice($id)
    {
        // TODO
    }
}
