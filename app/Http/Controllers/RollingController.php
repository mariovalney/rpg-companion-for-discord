<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Guild;
use App\Models\Rolling;
use Illuminate\Routing\Controller;

class RollingController extends Controller
{
    /**
     * Edit a rolling
     *
     * @return view()
     */
    public function edit(Guild $guild, Rolling $rolling)
    {
        if (empty($rolling->user) || $rolling->user->id !== Auth::id()) {
            abort(403);
        }

        if (empty($rolling->channel) || empty($rolling->channel->guild) || $rolling->channel->guild->id !== $guild->id) {
            abort(404);
        }

        return view('screens.rollings.edit')->with('rolling', $rolling);
    }
}
