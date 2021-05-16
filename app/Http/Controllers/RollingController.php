<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Guild;
use App\Models\Channel;
use App\Models\Rolling;
use Illuminate\Routing\Controller;

class RollingController extends Controller
{
    /**
     * Create a rolling
     *
     * @return view()
     */
    public function create(Guild $guild, Channel $channel)
    {
        $data = [
            'rolling' => new Rolling(),
            'channel' => $channel,
        ];

        return view('screens.rollings.edit')->with($data);
    }

    /**
     * Edit a rolling
     *
     * @return view()
     */
    public function edit(Guild $guild, Channel $channel, Rolling $rolling)
    {
        $this->checkAccess($guild, $rolling);

        $data = [
            'rolling' => $rolling,
            'channel' => $channel,
        ];

        return view('screens.rollings.edit')->with($data);
    }

    /**
     * Delete a rolling
     *
     * @return view()
     */
    public function delete(Guild $guild, Channel $channel, Rolling $rolling)
    {
        $this->checkAccess($guild, $rolling);

        $rolling->delete();

        return redirect(route('guilds.rollings', $guild->id));
    }

    /**
     * Check user can access this rolling
     *
     * @param  Guild   $guild
     * @param  Rolling $rolling
     *
     * @return void
     */
    private function checkAccess(Guild $guild, Rolling $rolling)
    {
        if (empty($rolling->user) || $rolling->user->id !== Auth::id()) {
            abort(403);
        }

        if (empty($rolling->channel) || empty($rolling->channel->guild) || $rolling->channel->guild->id !== $guild->id) {
            abort(404);
        }
    }
}
