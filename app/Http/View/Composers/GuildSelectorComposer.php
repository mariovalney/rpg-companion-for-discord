<?php

namespace App\Http\View\Composers;

use Auth;
use Route;
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

        $current = Route::current()->parameter('guild');
        $current = $current ? $current->id : '';

        $view->with([
            'guilds' => $guilds->where('id', '!=', $current),
            'current' => $guilds->where('id', $current)->first(),
        ]);
    }
}
