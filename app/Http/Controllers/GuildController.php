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
    public function index()
    {
        $guild = Auth::user()->guilds()->first();
        if (! empty($guild->id)) {
            return redirect(route('guilds.guild', $guild->id));
        }

        return view('screens.guilds.notfound')->with('message', __('screens/guilds.notfound.empty'));
    }

    /**
     * The Home
     *
     * @return view()
     */
    public function guild(Guild $guild)
    {
        if (empty($guild->id) || ! $guild->belongsToUser()) {
            return view('screens.guilds.notfound')->with('message', __('screens/guilds.notfound.content'));
        }

        return view('screens.guilds.index')->with([
            'guild' => $guild,
        ]);
    }
}
