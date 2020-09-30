@extends('layouts.main')

@section('title', $guild['name'])

@section('content')
    <h1 class="page-title">{{ $guild['name'] }}</h1>

    <div class="text-white">
        @if (empty($webhooks))
            <div class="alert alert-bad mt-3 mb-5">
                <i class="fas fa-exclamation"></i>
                <span>@lang('screens/guilds.webhooks.empty')</span>
            </div>

            @if ($canAddWebhook)
                <p class="lead">@lang('screens/guilds.webhooks.please_add_webhook')</p>
                <a href="{{ route('discord.login', ['scope' => 'webhook.incoming']) }}" class="btn btn-lg btn-secondary">
                    <i class="fab fa-discord"></i>
                    <span>@lang('auth.login')</span>
                </a>
            @else
                <p class="lead">
                    @lang('screens/guilds.webhooks.cant_add_webhook')
                </p>
            @endif
        @else
            <p class="lead">@lang('screens/guilds.webhooks.found')</p>

            <ul>
                @foreach($webhooks as $webhook)
                    <li>{{ $webhook->channel_id }}</li>
                @endforeach
            </ul>
        @endif

    </div>
@endsection
