<?php

namespace App\Models;

use Auth;
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
}
