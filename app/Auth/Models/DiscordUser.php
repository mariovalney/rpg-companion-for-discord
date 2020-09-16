<?php

namespace App\Auth\Models;

use Auth;
use Illuminate\Contracts\Auth\Authenticatable;

class DiscordUser implements Authenticatable
{
    /**
     * Attributes we retrieve from Profile
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'email',
        'avatar',
        'username',
        'discriminator',
    ];

    /**
     * User attributes
     *
     * @var array
     */
    protected $attributes = [];

    /**
     * Constructor
     *
     * @param array $data Discord user info
     */
    public function __construct(array $data)
    {
        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $this->attributes[ $key ] = $value;
            }
        }

        $this->id = $this->getKey();
    }

    /**
     * Magic method to get attributes
     *
     * @param  string $name
     * @return mixed
     */
    public function __get(string $name)
    {
        return $this->attributes[ $name ] ?? null;
    }

    /**
     * Get the value of the model's primary key.
     *
     * @return mixed
     */
    public function getKey()
    {
        return $this->id;
    }

    /**
     * Get the name of the unique identifier for the user.
     *
     * @return string
     */
    public function getAuthIdentifierName()
    {
        return 'id';
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->id;
    }

    /**
     * Get the password for the user.
     *
     * @return string
     * @codeCoverageIgnore
     */
    public function getAuthPassword()
    {
        throw new \BadMethodCallException('Unexpected method [getAuthPassword] call');
    }

    /**
     * Get the token value for the "remember me" session.
     *
     * @return string
     * @codeCoverageIgnore
     */
    public function getRememberToken()
    {
        throw new \BadMethodCallException('Unexpected method [getRememberToken] call');
    }

    /**
     * Set the token value for the "remember me" session.
     *
     * @param string $value
     * @codeCoverageIgnore
     */
    public function setRememberToken($value)
    {
        throw new \BadMethodCallException('Unexpected method [setRememberToken] call');
    }

    /**
     * Get the column name for the "remember me" token.
     *
     * @return string
     * @codeCoverageIgnore
     */
    public function getRememberTokenName()
    {
        throw new \BadMethodCallException('Unexpected method [getRememberTokenName] call');
    }
}
