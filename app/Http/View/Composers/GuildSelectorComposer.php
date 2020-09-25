<?php

namespace App\Http\View\Composers;

use Auth;
use App\Models\Guild;
use Illuminate\View\View;

class GuildSelectorComposer
{
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $user = Auth::user();
        $guilds = $user ? $user->guilds : [];
        $guilds = collect($guilds);

        $current = Guild::current();

        $view->with([
            'guilds' => $guilds->where('id', '!=', $current),
            'current' => $guilds->where('id', $current)->first(),
        ]);
    }
}
