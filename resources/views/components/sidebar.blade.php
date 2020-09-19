<div class="sidebar-sticky">
    <div class="guild-selector-wrapper">
        <div class="guild-selector dropdown">
            <button id="guild-selector-menu" class="btn dropdown-toggle" type="button" data-toggle="dropdown">
                {{ $current ? $current['name'] : __('sidebar.guild.choose') }}
            </button>
            <div class="dropdown-menu">
                @foreach($guilds as $guild)
                    <a class="dropdown-item" href="{{ route('guilds.guild', $guild['id']) }}">{{ $guild['name'] }}</a>
                @endforeach
            </div>
        </div>
    </div>
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link" href="{{ route('guilds.guild', $current) }}">
                <i class="fas fa-home"></i>
                <span>@lang('sidebar.home')</span>
            </a>
        </li>
    </ul>
</div>
