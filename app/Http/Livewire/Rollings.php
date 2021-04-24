<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Webhook;
use Livewire\Component;

class Rollings extends Component
{
    /**
     * The session key for webhook
     */
    const SESSION_KEY_WEBHOOK = 'rolling-form-current-webhook';

    /**
     * The current guild
     * @var Guild
     */
    public $guild;

    /**
     * The current webhook
     * @var Webhook
     */
    public $webhook;

    /**
     * Render the component
     *
     * @return view()
     */
    public function mount()
    {
        $this->webhook = session()->get(self::SESSION_KEY_WEBHOOK . '-' . $this->guild->id);
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rollings');
    }

    /**
     * Updated data
     *
     * @return void
     */
    public function updated($name, $value)
    {
        if ($name === 'webhook') {
            session()->put(self::SESSION_KEY_WEBHOOK . '-' . $this->guild->id, $value);
        }
    }
}
