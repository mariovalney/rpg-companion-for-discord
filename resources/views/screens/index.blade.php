@extends('layouts.cover')

@section('title', __('screens/index.welcome'))

@section('content')
    <h1 class="big">@lang('screens/index.title')</h1>
    <p class="medium">@lang('screens/index.content_line_1')</p>
    <p class="lead mb-4">@lang('screens/index.content_line_2')</p>
    <p class="lead">
        <a href="{{ route('discord.login') }}" class="btn btn-lg">
            <i class="fab fa-discord"></i>
            <span>@lang('auth.login')</span>
        </a>
    </p>

    <script type="text/javascript"></script>
@endsection
