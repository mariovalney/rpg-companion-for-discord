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
     * @var Rolling|array
     */
    public $rolling = [];

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
     * Check we have actions to perform
     *
     * @return void
     */
    public function hasActions()
    {
        return ! empty($this->webhookId) && ! empty($this->rolling()) && $this->rolling()->rolling->isNotEmpty();
    }

    /**
     * Get the rolling
     *
     * @return Rolling
     */
    public function rolling()
    {
        if (is_a($this->rolling, Rolling::class)) {
            return $this->rolling;
        }

        if (is_array($this->rolling)) {
            return new Rolling($this->rolling);
        }

        return false;
    }

    /**
     * Roll with disadvantage
     *
     * @return void
     */
    public function rollWithDisadvantage()
    {
        if (! $this->rolling()->hasDisadvantage()) {
            return;
        }

        $this->roll(-1);
    }

    /**
     * Roll with Advantage
     *
     * @return void
     */
    public function rollWithAdvantage()
    {
        if (! $this->rolling()->hasAdvantage()) {
            return;
        }

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
        if ($this->rolling()->rolling->isEmpty()) {
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

        if (empty($webhook) || empty($this->rolling())) {
            $this->alert(__('screens/rollings.webhook.error'), 'error');
            return;
        }

        $advantage = null;
        if ($type !== 0) {
            $advantage = $this->rolling()->advantage;
            $advantage->disadvantage = ($type < 0);
        }

        $message = $this->rolling()->createMessage($advantage);
        if ($webhook->sendMessage($message)) {
            $this->alert(__('screens/rollings.webhook.success'), 'success');
            return;
        }

        $this->alert(__('screens/rollings.webhook.error'), 'error');
    }
}
