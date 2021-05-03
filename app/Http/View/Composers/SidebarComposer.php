<?php

namespace App\Http\View\Composers;

use Auth;
use Guilds;
use Illuminate\View\View;

class SidebarComposer
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

        $view->with([
            'guilds' => $guilds->where('id', '!=', Guilds::currentId()),
            'current' => Guilds::current(),
        ]);
    }
}
