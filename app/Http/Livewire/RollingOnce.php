<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Rolling;
use App\Models\Rolling\RollingPart;
use App\Models\Webhook;
use App\Support\Traits\Livewire\HasAlert;
use Livewire\Component;

class RollingOnce extends Component
{
    /**
     * The webhook ID for rolling
     *
     * @var array
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
    public $refreshRollingParts = 0;

    /**
     * Event listenrs
     *
     * @var array
     */
    protected $listeners = [
        'changeRollingInput' => 'changeRollingInputEvent'
    ];

    /**
     * Mount the component
     *
     * @return void
     */
    public function mount()
    {
        if (empty($this->rolling)) {
            $this->rolling = new Rolling();
            $this->rolling->advantage = 0;
        }
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
        $this->refreshRollingParts = uniqid();
    }
}
