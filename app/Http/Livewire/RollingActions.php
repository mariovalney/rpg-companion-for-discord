<?php

namespace App\Http\Livewire;

use Auth;
use Exception;
use App\Models\Rolling;
use App\Models\Webhook;
use App\Support\Traits\Livewire\HasAlert;
use Livewire\Component;

class RollingActions extends Component
{
    use HasAlert;

    /**
     * Rolling
     *
     * @var Rolling
     */
    public $rolling;

    /**
     * Webhook ID
     *
     * @var string
     */
    public $webhookId;

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rolling-actions');
    }

    /**
     * Roll with disadvantage
     *
     * @return void
     */
    public function rollWithDisadvantage()
    {
        $this->roll(-1);
    }

    /**
     * Roll with Advantage
     *
     * @return void
     */
    public function rollWithAdvantage()
    {
        $this->roll(1);
    }

    /**
     * Roll a normal rolling
     *
     * @param  int $type
     *
     * @return void
     */
    public function roll($type = 0)
    {
        if ($this->rolling->rolling->isEmpty()) {
            return;
        }

        $this->sendMessage($type);
        $this->emit('RunDiscordMarkdown');
    }

    /**
     * Send a message to webhook
     *
     * @param  int $type
     *
     * @return void
     */
    protected function sendMessage($type = 0)
    {
        $webhook = Webhook::find($this->webhookId);

        if (empty($webhook) || empty($this->rolling)) {
            $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
            return;
        }

        $message = $this->rolling->createMessage($type);
        if ($webhook->sendMessage($message)) {
            $this->setAlert(__('screens/rollings.webhook.success'), 'good');
            return;
        }

        $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
    }
}
