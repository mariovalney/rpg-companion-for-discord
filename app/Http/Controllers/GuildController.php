<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller;

class GuildController extends Controller
{
    /**
     * The Home
     *
     * @return view()
     */
    public function index($guild_id)
    {
        $user = Auth::user();

        $guild = $user->getGuilds();
        $guild = collect($guild);
        $guild = $guild->where('id', $guild_id)->first();

        if (empty($guild)) {
            return abort(404);
        }

        return view('screens.guilds.index')->with([
            'guild' => $guild,
        ]);
    }
}
