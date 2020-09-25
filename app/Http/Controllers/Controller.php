<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * The Home
     *
     * @return view()
     */
    public function index()
    {
        if (Auth::user()) {
            return redirect(route('guilds.index'));
        }

        return view('screens.index');
    }

    /**
     * The healthcheck
     *
     * @return
     */
    public function healthcheck()
    {
        return 'OK';
    }
}
