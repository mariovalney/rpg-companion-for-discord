<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Webhook;
use Livewire\Component;

class RollingForm extends Component
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
     * Selected roll
     * @var Rolling
     */
    public $rolling;

    /**
     * Dices to be rolled
     * @var array of Dice
     */
    public $dices = [];

    /**
     * Message for error
     * @var string
     */
    public $error_message = '';

    /**
     * Message for success_message
     * @var string
     */
    public $success_message = '';

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
        return view('livewire.rolling-form.index');
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

    /**
     * Add a dice
     *
     * @param  string $id
     * @return void
     */
    public function addDice($sides)
    {

    }

    /**
     * Update a dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function updateDice($id, $prop, $value)
    {

    }

    /**
     * Remove dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function removeDice($id)
    {

    }

    /**
     * Roll to discord
     *
     * @return void
     */
    public function roll()
    {
        $this->error_message = '';
        $this->success_message = '';

        $webhook = $this->guild->webhooks()->find($this->webhook);

        if (empty($this->webhook)) {
            $this->error_message = __('screens/rollings.webhook.not_configured');
            return;
        }

        if (empty($this->dices)) {
            $this->error_message = __('screens/rollings.form.empty');
            return;
        }

        $message = $this->createMessage($this->dices);
        if ($webhook->sendMessage($message)) {
            $this->success_message = __('screens/rollings.webhook.success');
            return;
        }

        $this->error_message = __('screens/rollings.webhook.error');
    }

    /**
     * Create a roll message
     *
     * @return array
     */
    public function createMessage()
    {
        $rolling = '';
        $result = 0;

        foreach ($this->dices as $dice) {

        }

        $message = [
            'fields' => [
                'name' => $rolling,
                'value' => $result,
            ],
        ];

        if (! empty($this->rolling)) {
            $message['title'] = $this->rolling->title;
            $message['description'] = $this->rolling->description;
        }

        return $message;
    }
}
