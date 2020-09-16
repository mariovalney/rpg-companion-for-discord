<?php

namespace App\Models;

use App\Auth\Facades\DiscordAuth;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'access_token',
        'refresh_token',
        'expires_in',
    ];

    /**
     * Get valid Access Token
     *
     * @return string
     */
    public function getValidAccessToken()
    {
        if ($this->isExpired()) {
            if (empty($this->refresh_token)) {
                return null;
            }

            $credentials = ['refresh_token' => $this->refresh_token];
            $credentials = DiscordAuth::refreshToken($credentials);

            if (! empty($credentials)) {
                $this->update($credentials);
            }
        }

        return $this->access_token;
    }

    /**
     * Get valid Access Token
     *
     * @return string
     */
    public function isExpired()
    {
        // Refresh before 2 minutes always
        $expires_in = $this->expires_in - (2 * 60);

        return $this->updated_at->addSeconds($expires_in)->isPast();
    }
}
