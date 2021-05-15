<?php

namespace App\Support\Blades;

class Alert extends BaseDirective
{
    /**
     * Render the directive
     *
     * @return string
     */
    public function render()
    {
        return '<div class="alert alert-' . $this->getParam(1, 'default') . '">' . $this->getParam(0, '') . '</div>';
    }
}
