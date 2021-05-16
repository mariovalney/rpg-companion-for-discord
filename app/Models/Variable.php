<?php

namespace App\Models;

use Auth;
use Guilds;
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

    /**
     * Find a variable by name
     *
     * @return Variable
     */
    public static function findAll($guildId = '', $userId = '')
    {
        if (empty($guildId)) {
            $guildId = Guilds::currentId();
        }

        if (empty($userId)) {
            $userId = Auth::id();
        }

        $where = [
            'user_id' => $userId,
            'guild_id' => $guildId,
        ];

        return static::where($where)->orderBy('name');
    }

    /**
     * Find a variable by name
     *
     * @return Variable
     */
    public static function findByName($name, $guildId = '', $userId = '')
    {
        $name = mb_strtoupper($name);

        return static::findAll($guildId, $userId)->where('name', $name)->first();
    }
}
