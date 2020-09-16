<?php

namespace App\Auth\Providers;

use App\Auth\DiscordUserProvider;
use App\Auth\Guard\DiscordGuard;
use App\Auth\Services\DiscordService;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class DiscordServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Discord Guard
        Auth::extend('discord', function ($app, $name, array $config) {
            $provider = Auth::createUserProvider($config['provider']);
            return new DiscordGuard($provider, $app->request);
        });

        // Facades
        $this->app->bind('discord-auth', function($app) {
            return $app->make(DiscordService::class);
        });

        // Routes
        $this->registerRoutes();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Auth::provider('discord', function($app, array $config) {
            return new DiscordUserProvider();
        });
    }

    /**
     * Register the authentication routes for keycloak.
     *
     * @return void
     */
    private function registerRoutes()
    {
        // Register Routes
        $router = $this->app->make('router');

        $router->middleware([StartSession::class])->get('auth/login', 'App\Auth\Controllers\AuthController@login')->name('discord.login');
        $router->middleware([StartSession::class])->get('auth/logout', 'App\Auth\Controllers\AuthController@logout')->name('discord.logout');
        $router->middleware([StartSession::class])->get('auth/callback', 'App\Auth\Controllers\AuthController@callback')->name('discord.callback');
    }
}
