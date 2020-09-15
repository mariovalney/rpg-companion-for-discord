<?php

namespace App\Auth\Controllers;

use App\Auth\Facades\DiscordAuth;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

class AuthController extends Controller
{
    /**
     * Redirect to login
     *
     * @return view
     */
    public function login()
    {
        $url = DiscordAuth::getLoginUrl();
        DiscordAuth::saveState();

        return redirect($url);
    }

    /**
     * Redirect to logout
     *
     * @return view
     */
    public function logout()
    {
        DiscordAuth::forgetToken();

        $url = DiscordAuth::getLogoutUrl();
        return redirect($url);
    }

    /**
     * Keycloak callback page
     *
     * @throws RuntimeException
     *
     * @return view
     */
    public function callback(Request $request)
    {
        // Check given state to mitigate CSRF attack
        $state = $request->input('state');
        if (empty($state) || ! DiscordAuth::validateState($state)) {
            DiscordAuth::forgetState();

            throw new RuntimeException('Invalid state');
        }

        // Change code for token
        $code = $request->input('code');
        if (! empty($code)) {
            $token = DiscordAuth::exchangeCode($code);

            if (Auth::validate($token)) {
                return redirect()->intended('/');
            }
        }

        return redirect(route('discord.login'));
    }
}
