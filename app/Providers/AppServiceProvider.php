<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->forceHostname();
        URL::forceScheme('https');

        // View Composers
        View::composer('components.sidebar', 'App\Http\View\Composers\GuildSelectorComposer');
    }

    /**
     * Force the hostname configured on .env
     *
     * @return void
     */
    private function forceHostname()
    {
        $configured = config('app.url');
        $configured = parse_url($configured);

        $current = URL::current();
        $current = parse_url($current);

        if ($current['host'] === $configured['host'] || (($current['path'] ?? '') === '/healthcheck')) {
            return;
        }

        $current['host'] = $configured['host'];
        $current = http_build_url($current);

        redirect($current)->send();
        exit; // phpcs:ignore
    }
}
