<?php

namespace App\Models;

use Auth;
use Route;
use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The current Guild
     *
     * @var bool
     */
    private static $current;

    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'icon',
    ];

    /**
     * Get the users associated with the guild
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

    /**
     * Check current user belongs to this guild
     */
    public function belongsToUser()
    {
        $id = Auth::id();
        return ! empty($this->users()->find($id));
    }

    /**
     * Get the current guild
     *
     * @return string
     */
    public static function current()
    {
        if (empty(self::$current)) {
            $current = Route::current()->parameter('guild');
            self::$current = $current ? $current->id : null;
        }

        return self::$current;
    }
}
