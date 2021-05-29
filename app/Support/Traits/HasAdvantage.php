<?php

namespace App\Support\Traits;

use  App\Models\Rolling\Advantage;

trait HasAdvantage
{
    /**
     * Get advantage
     *
     * @param  string  $value
     * @return Collection
     */
    public function getAdvantageAttribute($type)
    {
        return new Advantage(['type' => (int) $type]);
    }

    /**
     * Set advantage
     *
     * @param  string  $value
     * @return void
     */
    public function setAdvantageAttribute($advantage)
    {
        if (is_a($advantage, Advantage::class)) {
            $advantage = (int) $advantage->type;
        }

        $this->attributes['advantage'] = (int) $advantage;
    }
}
