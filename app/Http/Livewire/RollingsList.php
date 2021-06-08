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
     * The current guild
     * @var string
     */
    public $guildId = '';

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
     * Get the channel from webhook
     *
     * @return string
     */
    public function getChannelId()
    {
        if (! empty($this->webhook())) {
            return $this->webhook()->channel->id;
        }

        return '';
    }

    /**
     * Get the webhook
     *
     * @return Webhook
     */
    public function webhook()
    {
        if (empty($this->webhook)) {
            $this->webhook = Webhook::find($this->webhookId);
        }

        return $this->webhook;
    }
}
