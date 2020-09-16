<div class="sidebar-sticky">
    <div class="guild-selector-wrapper">
        <div class="guild-selector dropdown">
            <button id="guild-selector-menu" class="btn dropdown-toggle" type="button" data-toggle="dropdown">
                @lang('sidebar.guild.choose')
            </button>
            <div class="dropdown-menu">
                 <a class="dropdown-item" href="#">Server 1</a>
                 <a class="dropdown-item" href="#">Server 2</a>
                 <a class="dropdown-item" href="#">Server 3</a>
            </div>
        </div>
    </div>
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link" href="{{ url('/') }}">
                <span data-feather="home"></span>
                <span>@lang('sidebar.home')</span>
            </a>
        </li>
    </ul>
</div>
