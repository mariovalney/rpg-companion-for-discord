<?php

namespace App\Http\Livewire;

use Auth;
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
    public $webhookId = '';

    /**
     * Render the component
     *
     * @return view()
     */
    public function mount()
    {
        $this->webhookId = session()->get($this->getWebhookSessionKey(), '');
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
        if ($name === 'webhookId') {
            session()->put($this->getWebhookSessionKey(), $value);
        }
    }

    /**
     * Get the Webhook session key
     *
     * @return string
     */
    private function getWebhookSessionKey()
    {
        return self::SESSION_KEY_WEBHOOK . '-' . $this->guild->id . '-' . Auth::id();
    }
}
