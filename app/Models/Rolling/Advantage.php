<?php

namespace App\Models\Rolling;

use App\Models\Variable;
use App\Support\SimpleModel;
use Exception;

class Advantage extends SimpleModel
{
    /**
     * ID for rolling a advantage on D20
     * @var int
     */
    const TYPE_D20 = 1;

    /**
     * ID for rolling a advantage on all dices
     * @var int
     */
    const TYPE_ALL = 2;

    /**
     * ID for rolling and double all dices
     * @var int
     */
    const TYPE_DOUBLE = 3;

    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'type',
    ];
}
