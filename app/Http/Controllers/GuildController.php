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
        return $this->render('screens.guilds.index', $guild);
    }

    /**
     * The Guild Variables
     *
     * @return view()
     */
    public function variables(Guild $guild)
    {
        return $this->render('screens.guilds.variables', $guild);
    }

    /**
     * Render the guild page checking guild belongs to user
     *
     * @return view()
     */
    public function render($view, Guild $guild, $data = [])
    {
        if (empty($guild->id) || ! $guild->belongsToUser()) {
            return view('screens.guilds.notfound')->with('message', __('screens/guilds.notfound.content'));
        }

        $data = array_merge($data, ['guild' => $guild ]);

        return view($view)->with($data);
    }
}
