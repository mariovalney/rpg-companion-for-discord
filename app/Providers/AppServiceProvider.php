<?php

namespace App\Providers;

use Blade;
use Config;
use URL;
use View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->setupFacades();
        $this->setupViews();
        $this->setupBlades();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // If using HTTPS on local
        if (Config::get('app.env') === 'local') {
            $schema = parse_url(Config::get('app.url'));

            if (($schema['scheme'] ?? '') !== 'https') {
                return;
            }
        }

        URL::forceScheme('https');
        request()->server->set('HTTPS', true);
    }


    /**
     * Setup Facades on Boot method
     *
     * @return void
     *
     * @SuppressWarnings(PHPMD.MissingImport)
     */
    private function setupFacades()
    {
        $this->app->bind('discord-api', function($app) {
            return $app->make(\App\Services\DiscordApi::class);
        });

        $this->app->bind('guilds', function($app) {
            return $app->make(\App\Support\Guilds::class);
        });
    }

    /**
     * Setup Rules on Boot method
     *
     * @return void
     */
    private function setupRules()
    {
        // Validator::extend('rule', 'App\Support\Rules\Rule@validate');
        // Validator::replacer('rule', 'App\Support\Rules\Rule@message');
    }

    /**
     * Setup Views on Boot method
     *
     * @return void
     */
    private function setupViews()
    {
        // Sidebar
        View::composer('components.sidebar', \App\Http\View\Composers\SidebarComposer::class);
    }

    /**
     * Setup Blades on Boot method
     *
     * @return void
     */
    private function setupBlades()
    {
        $directives = [
            'Alert',
            'Selected',
        ];

        foreach ($directives as $directive) {
            Blade::directive(strtolower($directive), ['App\Support\Blades\\' . $directive, 'callback']);
        }
    }
}
