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
     * Get the value
     *
     * @param  string  $value
     * @return mixed
     */
    public function getValueAttribute($value)
    {
        return json_decode($value);
    }

    /**
     * Get the value
     *
     * @param  string  $value
     * @return mixed
     */
    public function setValueAttribute($value)
    {
        $this->attributes['value'] = json_encode($value);
    }
}
