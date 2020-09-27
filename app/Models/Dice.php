<?php

namespace App\Models;

use App\Support\SimpleModel as Model;

class Dice extends Model
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
}
