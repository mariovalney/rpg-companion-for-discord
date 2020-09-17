<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Guild;
use Illuminate\Routing\Controller;

class GuildController extends Controller
{
    /**
     * The Home
     *
     * @return view()
     */
    public function index(Guild $guild)
    {
        if (empty($guild) || ! $guild->belongsToUser()) {
            return abort(404);
        }

        return view('screens.guilds.index')->with([
            'guild' => $guild,
        ]);
    }
}
