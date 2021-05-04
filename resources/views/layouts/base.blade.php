<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title') | @include('components.brand_title')</title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:700,400,300,100">
        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">

        <link rel="shortcut icon" href="{{ url('images/logo.png') }}" />

        @livewireStyles
    </head>
    <body class="@yield('body_class')">
        @yield('body')

        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
        @if(config('app.debug'))
            <script type="text/javascript" src="{{ mix('js/browserSync.js') }}"></script>
        @endif

        @livewireScripts
    </body>
</html>
