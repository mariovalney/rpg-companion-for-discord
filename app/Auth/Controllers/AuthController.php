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
        Auth::logout();
        return redirect('/');
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
        $input = explode('.', $request->input('state'), 2);
        $state = $input[0];

        if (empty($state) || ! DiscordAuth::validateState($state)) {
            DiscordAuth::forgetState();

            throw new RuntimeException('Invalid state');
        }

        // Change code for token
        $code = $request->input('code');
        if (! empty($code)) {
            $credentials = DiscordAuth::exchangeCode($code);

            if ($credentials && Auth::attempt((array) $credentials)) {
                $redirectUrl = base64_decode($input[1] ?? '');
                if (empty($redirectUrl)) {
                    $redirectUrl = route('guilds.index');
                }

                return redirect($redirectUrl);
            }
        }

        return redirect(route('discord.login'));
    }
}
