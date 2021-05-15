<?php

namespace App\Support\Blades;

class Selected extends BaseDirective
{
    /**
     * Render the directive
     *
     * @return string
     */
    public function render()
    {
        $value = $this->getParam(0, null);
        $challenge = $this->getParam(1, null);

        if (! $this->hasParam(1)) {
            return '<?php if (is_null(' . $value . ') || ' . $value . ' === "") { echo \'selected="selected"\'; } ?>';
        }

        return '<?php if ((string) ' . $challenge . ' === (string) ' . $value . ') { echo \'selected="selected"\'; } ?>';
    }
}
