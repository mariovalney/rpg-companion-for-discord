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
     * @param  int $type
     *
     * @return void
     */
    public function roll($rollingId, $type = 0)
    {
        $rolling = $this->getRollingOrFail($rollingId);

        if ( empty( $rolling->id ) ) {
            return;
        }

        $this->sendMessage($rolling, $type);
        $this->emit('RunDiscordMarkdown');
    }

    /**
     * Get a rolling by ID
     *
     * @param  int $rollingId
     * @return void
     */
    protected function getRollingOrFail($rollingId)
    {
        $rolling = Rolling::find($rollingId);

        if (! empty($rolling->id)) {
            return $rolling;
        }

        $this->setAlert(__('Rolagem inválida. Por favor, tente novamente.'), 'bad');
    }

    /**
     * Send a message to webhook
     *
     * @param  Rolling $rolling
     * @param  int $type
     *
     * @return void
     */
    protected function sendMessage($rolling, $type = 0)
    {
        $webhook = Webhook::find($this->webhookId);

        if (empty($webhook) || empty($rolling)) {
            $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
            return;
        }

        $message = $rolling->createMessage($type);
        if ($webhook->sendMessage($message)) {
            $this->setAlert(__('screens/rollings.webhook.success'), 'good');
            return;
        }

        $this->setAlert(__('screens/rollings.webhook.error'), 'bad');
    }
}
