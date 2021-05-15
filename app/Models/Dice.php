<?php

namespace App\Models;

use App\Support\SimpleModel;

class Dice extends SimpleModel
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'count',
        'sides',
    ];

    /**
     * Attributes
     *
     * @var array
     */
    protected $attributes = [
        'count' => 1,
        'sides' => 20,
    ];

    /**
     * Create the field filling it with array of attributes.
     *
     * @param  array  $attributes
     *
     * @return $this
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (empty($this->attributes['id'])) {
            $this->attributes['id'] = uniqid();
        }
    }

    /**
     * Roll the dice
     *
     * @return int
     */
    public function roll()
    {
        // TODO: DEV
        return floor( $this->sides / 2 );
    }

    /**
     * Dice to string
     *
     * @return string
     */
    public function __toString()
    {
        return sprintf('%sd%s', $this->count, $this->sides);
    }
}
