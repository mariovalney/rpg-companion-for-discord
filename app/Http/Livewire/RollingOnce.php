<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Rolling;
use App\Models\Rolling\RollingPart;
use App\Models\Webhook;
use Livewire\Component;

class RollingOnce extends Component
{
    /**
     * The webhook ID for rolling
     *
     * @var string
     */
    public $webhookId;

    /**
     * A non saved rolling
     *
     * @var Rolling
     */
    public $rolling;

    /**
     * A non saved rolling
     *
     * @var Rolling
     */
    public $actionsKey = 0;

    /**
     * A non saved rolling
     *
     * @var Rolling
     */
    public $inputKey = 0;

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
        'changeRollingInput' => 'changeRollingInputEvent',
        'keyboardShow' => 'keyboardShowEvent',
    ];

    /**
     * Mount the component
     *
     * @return void
     */
    public function mount()
    {
        $this->rolling = session()->get($this->getSessionKey(), new Rolling());
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rolling-once');
    }

    /**
     * Event when a rolling input changed
     *
     * @param  array $value
     * @param  string $field
     * @return void
     */
    public function changeRollingInputEvent($field, $parts)
    {
        foreach ($parts as $key => $part) {
            $parts[ $key ] = new RollingPart($part);
        }

        $this->rolling->rolling = $parts;

        $this->updateRolling();
    }

    /**
     * Clear action
     *
     * @return void
     */
    public function clear()
    {
        $this->rolling = new Rolling();
        $this->inputKey++;

        $this->updateRolling();
    }

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
     * Update session
     *
     * @return void
     */
    protected function updateRolling()
    {
        $this->actionsKey = uniqid();

        session()->put($this->getSessionKey(), $this->rolling);
        session()->save();
    }

    /**
     * Get the session key to store the rolling
     *
     * @return string
     */
    protected function getSessionKey()
    {
        return 'rolling-once-' . Auth::id() . '-' . $this->webhookId;
    }
}
