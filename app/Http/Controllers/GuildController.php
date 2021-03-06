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
        $guild->syncFromDiscord();
        $guild->refresh();

        return $this->render('screens.guilds.index', $guild, [], true);
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
     * The Guild Rollings
     *
     * @return view()
     */
    public function rollings(Guild $guild)
    {
        return $this->render('screens.guilds.rollings', $guild);
    }

    /**
     * Render the guild page checking guild belongs to user
     *
     * @return view()
     */
    public function render($view, Guild $guild, $data = [], $allowWithoutBot = false)
    {
        if (empty($guild->id) || ! $guild->belongsToUser()) {
            return view('screens.guilds.notfound')->with('message', __('screens/guilds.notfound.content'));
        }

        if (! $allowWithoutBot && empty($guild->has_bot) ) {
            return view('screens.guilds.notfound')->with('message', __('screens/guilds.notfound.notconfigured'));
        }

        $data = array_merge($data, ['guild' => $guild ]);

        return view($view)->with($data);
    }
}
