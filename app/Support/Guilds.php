<?php

namespace App\Support;

use Route;
use App\Models\Guild;

class Guilds
{
    /**
     * The current Guild id
     *
     * @var string
     */
    protected $currentId;

    /**
     * Get the current guild
     *
     * @return string
     */
    public function currentId()
    {
        if (empty($this->currentId)) {
            $current = Route::current()->parameter('guild');
            $this->currentId = $current ? $current->id : null;
        }

        return $this->currentId;
    }

    /**
     * Get the current guild
     *
     * @return string
     */
    public function current()
    {
        $id = $this->currentId();
        if (empty($id)) {
            return null;
        }

        return Guild::find($id);
    }
}
