<?php

namespace App\Support\Traits;

trait HasAlert
{
    /**
     * The alert
     * @var array
     */
    public $alert;

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

        // Livewire event
        if (method_exists($this, 'emit')) {
            $this->emit('LivewireAlertShown');
        }
    }
}
