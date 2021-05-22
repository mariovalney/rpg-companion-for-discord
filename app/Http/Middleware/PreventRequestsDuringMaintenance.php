<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Exceptions\RegisterErrorViewPaths;
use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PreventRequestsDuringMaintenance extends Middleware
{
    /**
     * The URIs that should be reachable while maintenance mode is enabled.
     *
     * @var array
     */
    protected $except = [
        //
    ];

/**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function handle($request, Closure $next)
    {
        try {
            return parent::handle($request, $next);
        } catch (HttpException $exception) {
            // @see Illuminate\Foundation\Exceptions\Handler::registerErrorViewPaths
            (new RegisterErrorViewPaths)();

            return response()->view('errors.maintenance');
        }
    }
}
