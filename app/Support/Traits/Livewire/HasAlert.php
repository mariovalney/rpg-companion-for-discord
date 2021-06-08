<?php

namespace App\Support\Traits\Livewire;

trait HasAlert
{
    /**
     * Send a alert to screen
     *
     * @param string $text
     * @param string $type
     */
    protected function alert($text, $type = 'info')
    {
        $this->emit('LivewireAlert', $type, $text);
    }
}
