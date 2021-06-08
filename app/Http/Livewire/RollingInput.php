<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Rolling\RollingPart;
use App\Models\Webhook;
use App\Support\Traits\Livewire\EditingRollingParts;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class RollingInput extends Component
{
    use EditingRollingParts;

    /**
     * The attribute name
     *
     * @var string
     */
    public $attribute;

    /**
     * Rolling list
     *
     * @var array
     */
    public $rollings = [];

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
     * Rolling Rules
     *
     * @var Rolling
     */
    protected $rules = [];

    /**
     * If keyboard is already open
     *
     * @var string
     */
    public $isKeyboardShown = false;

    /**
     * Event listenrs
     *
     * @var array
     */
    protected $listeners = [
        'keyboardShow' => 'keyboardShowEvent'
    ];

    /**
     * Event when a rolling input changed
     *
     * @param  array $value
     * @param  string $field
     * @return void
     */
    public function keyboardShowEvent($show)
    {
        $this->isKeyboardShown = ! ((boolean) $show);
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function mount()
    {
        $last = $this->getLastPartModel();
        if ($last && $last->isDice() && ! $this->isDice) {
            $this->isDice = true;
        }
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rolling-input');
    }

    /**
     * Get rollings as objects
     *
     * @return array
     */
    public function getEditingRolling()
    {
        $parts = [];
        foreach ($this->rollings as $key => $value) {
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

        $this->triggerChanged();
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
            $this->rollingButtonNumeric($button);
            $this->triggerChanged();
            return;
        }

        $method = 'rollingButton' . ucfirst($button);
        if (! method_exists($this, $method)) {
            return;
        }

        $this->$method();
        $this->triggerChanged();
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

    /**
     * Trigger the change event
     *
     * @return void
     */
    private function triggerChanged()
    {
        $this->emitUp('changeRollingInput', $this->attribute, $this->rollings);
    }
}
