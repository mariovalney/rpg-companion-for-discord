@extends('layouts.main')

@section('title', $guild->name ?? '')

@section('content')
    <h1 class="page-title">{{ $guild['name'] }}</h1>

    <div class="text-white">
        @if(! $guild->has_bot)
            @if (Auth::user()->checkPermission('MANAGE_GUILD'))
                <p class="lead">
                    @lang('screens/guilds.bot.please_add')
                </p>

                <a id="add-bot-to-guild" hrf="#" data-href="{{ DiscordAuth::getAddBotUrl($guild->id) }}" class="btn btn-lg btn-secondary">
                    <i class="fab fa-discord"></i>
                    <span>@lang('screens/guilds.bot.add')</span>
                </a>
            @else
                <p class="lead">
                    @lang('screens/guilds.bot.cant_add_bot')
                </p>
            @endif
        @endif

        @if ($guild->has_bot && empty($guild->webhooks->all()))
            <p class="lead">
                @lang('screens/guilds.webhooks.empty')
            </p>

            @if (Auth::user()->checkPermission('MANAGE_WEBHOOKS'))
                <p class="lead">
                    @lang('screens/guilds.webhooks.please_add_webhook')
                </p>

                <a href="{{ route('discord.login', ['scope' => 'webhook.incoming', 'guild_id' => $guild->id, 'redirect_url' => url()->current()]) }}" class="btn btn-lg btn-secondary">
                    <i class="fab fa-discord"></i>
                    <span>@lang('screens/guilds.webhooks.add')</span>
                </a>
            @else
                <p class="lead">
                    @lang('screens/guilds.webhooks.cant_add_webhook')
                </p>
            @endif
        @endif

        @if ($guild->has_bot && ! empty($guild->webhooks->all()))
            <p class="lead">@lang('screens/guilds.webhooks.found')</p>

            <ul>
                @foreach($guild->webhooks as $webhook)
                    <li>{{ $webhook->channel->name }}</li>
                @endforeach
            </ul>

            @if (Auth::user()->checkPermission('MANAGE_WEBHOOKS'))
                <a href="{{ route('discord.login', ['scope' => 'webhook.incoming', 'guild_id' => $guild->id, 'redirect_url' => url()->current()]) }}" class="btn btn-lg btn-secondary mt-2">
                    <i class="fab fa-discord"></i>
                    <span>@lang('screens/guilds.webhooks.add_another')</span>
                </a>
            @endif
        @endif
    </div>
@endsection
