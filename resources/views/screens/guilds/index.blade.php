@extends('layouts.main')

@section('title', $guild['name'])

@section('content')
    <h1 class="page-title">{{ $guild['name'] }}</h1>

    <div class="text-white">
        @if (empty($webhooks))
            <p class="lead">@lang('screens/guilds.webhooks.empty')</p>

            @if ($canAddWebhook)
                <p class="lead">Por favor, clique no botão abaixo para adicionar um webhook aos canais que os usuários poderão usar.</p>
                <a href="{{ route('discord.login', ['scope' => 'webhook.incoming']) }}" class="btn btn-lg btn-secondary">
                    <i class="fab fa-discord"></i>
                    <span>@lang('auth.login')</span>
                </a>
            @endif
        @else
            <p class="lead">@lang('screens/guilds.webhooks.found')</p>

            <ul>
                @foreach($webhooks as $webhook)
                    <li>{{ $webhook->id }}</li>
                @endforeach
            </ul>
        @endif

    </div>
@endsection
