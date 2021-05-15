<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Guild;
use App\Models\Rolling;
use App\Models\Webhook;
use Livewire\Component;

class RollingsList extends Component
{
    /**
     * The current webhook
     * @var string
     */
    public $webhookId = '';

    /**
     * Validation errors
     * @var array
     */
    public $errors = [];

    /**
     * The rollings
     * @var collection
     */
    public $rollings;

    /**
     * The alert
     * @var array
     */
    public $alert;

    /**
     * The webhook object
     * @var Webhook
     */
    protected $webhook;

    /**
     * Error messages
     * @var array
     */
    protected $messages = [];

    /**
     * The constructor
     */
    public function __construct()
    {
        $this->messages = [];
    }

    /**
     * Mount the component
     *
     * @return void
     */
    public function mount()
    {
        if (! empty($this->webhook())) {
            $this->rollings = $this->webhook()->channel->rollings;
        }
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rollings-list');
    }

    /**
     * Roll with disadvantage
     *
     * @param  int $rollingId
     * @return void
     */
    public function rollWithDisadvantage($rollingId)
    {
        $this->roll($rollingId, -1);
    }

    /**
     * Roll with Advantage
     *
     * @param  int $rollingId
     * @return void
     */
    public function rollWithAdvantage($rollingId)
    {
        $this->roll($rollingId, 1);
    }

    /**
     * Roll a normal rolling
     *
     * @param  int $rollingId
     * @return void
     */
    public function roll($rollingId, $type = 0)
    {
        $rolling = $this->getRollingOrFail($rollingId);

        if ( empty( $rolling->id ) ) {
            return;
        }

        $this->sendMessage($rolling);
    }

    /**
     * Get a rolling by ID
     *
     * @param  int $rollingId
     * @return void
     */
    protected function getRollingOrFail($rollingId)
    {
        $rolling = $this->rollings->find($rollingId);

        if (! empty($rolling->id)) {
            return $rolling;
        }

        $this->setAlert(__('Rolagem inválida. Por favor, tente novamente.'), 'bad');
    }

    /**
     * Set a alert to screen
     *
     * @param string $text
     * @param string $type
     */
    protected function setAlert($text, $type = 'default')
    {
        if (empty($text)) {
            $this->alert = null;
            return;
        }

        $this->alert = [
            'type' => $type,
            'text' => $text,
        ];
    }

    /**
     * Send a message to webhook
     *
     * @return void
     */
    protected function sendMessage($rolling)
    {
        if (empty($this->webhook()) || empty($rolling)) {
            $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
            return;
        }

        $message = $rolling->createMessage();
        if ($this->webhook()->sendMessage($message)) {
            $this->setAlert(__('screens/rollings.webhook.success'), 'good');
            return;
        }

        $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
    }

    /**
     * Get the webhook
     *
     * @return Webhook
     */
    protected function webhook()
    {
        if (empty($this->webhook)) {
            $this->webhook = Webhook::find($this->webhookId);
        }

        return $this->webhook;
    }
}
