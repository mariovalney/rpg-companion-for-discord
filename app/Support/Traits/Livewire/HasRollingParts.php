<?php

namespace App\Support\Traits\Livewire;

use  App\Models\Rolling\RollingPart;
use  App\Models\Variable;

trait HasRollingParts
{
    /**
     * Get rolling parts
     *
     * @param  string  $value
     * @return Collection
     */
    public function getRollingAttribute($parts)
    {
        $parts = json_decode($parts, true);

        if (empty($parts) || ! is_array($parts)) {
            return collect();
        }

        $rolling = [];
        foreach ($parts as $key => $part) {
            $rolling[ $key ] = new RollingPart($part);
            $rolling[ $key ]->guild = $this->getGuildId();
        }

        return collect($rolling);
    }

    /**
     * Set rolling parts
     *
     * @param  string  $value
     * @return void
     */
    public function setRollingAttribute($parts)
    {
        if (empty($parts) || ! is_array($parts)) {
            $this->attributes['rolling'] = '';
        }

        $rolling = [];
        foreach ($parts as $key => $part) {
            if (! is_a($part, RollingPart::class) && is_array($part)) {
                $part = new RollingPart($part);
            }

            if (is_a($part, RollingPart::class)) {
                $rolling[ $key ] = $part->toArray();
                continue;
            }

        }

        $this->attributes['rolling'] = json_encode($rolling);
    }
}
