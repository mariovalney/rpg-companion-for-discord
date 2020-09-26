<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Model;

class Variable extends Model
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'value',
        'user_id',
        'guild_id',
    ];

    /**
     * Cast.
     *
     * @var array
     */
    protected $casts = [
        'value' => 'integer',
    ];

    /**
     * Get the value
     *
     * @param  string  $value
     * @return mixed
     */
    public function getNameAttribute($value)
    {
        return mb_strtoupper($value);
    }

    /**
     * Get the value
     *
     * @param  string  $value
     * @return mixed
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = mb_strtoupper($value);
    }
}
