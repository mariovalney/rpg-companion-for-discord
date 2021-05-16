<nav class="navbar navbar-dark sticky-top flex-md-nowrap">
    <span class="col-sm-3 col-md-2 mr-0"></span>
    <ul class="navbar-nav">
        <li class="nav-item avatar-wrapper">
            <img class="avatar" src="{{ Auth::user()->getAvatarUrl() }}" height="40" />
        </li>

        @if(Config::get('app.env') === 'local' && (! empty(Auth::user()) || ! empty(Auth::user()->token)))
            <li class="nav-item text-nowrap">
                <span class="nav-link user-select">
                    {{ Auth::user()->token->getValidAccessToken() ?: __('debug.notoken') }}
                </span>
            </li>
        @endif

        <li class="nav-item text-nowrap">
            <a class="nav-link" href="{{ route('discord.logout') }}">@lang('auth.logout')</a>
        </li>
    </ul>
</nav>
