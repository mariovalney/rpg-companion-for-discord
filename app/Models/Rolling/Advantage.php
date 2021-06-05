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
        'disadvantage'
    ];

    /**
     * The defaults attributes.
     *
     * @var array
     */
    protected $attributes = [
        'disadvantage' => false,
    ];

    /**
     * Check is none of the advantage types
     *
     * @return boolean
     */
    public function isNone() {
        return ! $this->isD20() && ! $this->isAll() && ! $this->isDouble();
    }

    /**
     * Check is none of the advantage types
     *
     * @return boolean
     */
    public function isD20() {
        return $this->type === self::TYPE_D20;
    }

    /**
     * Check is none of the advantage types
     *
     * @return boolean
     */
    public function isAll() {
        return $this->type === self::TYPE_ALL;
    }

    /**
     * Check is none of the advantage types
     *
     * @return boolean
     */
    public function isDouble() {
        return $this->type === self::TYPE_DOUBLE;
    }
}
