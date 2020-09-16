<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>RPG Companion | @yield('title')</title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:700,400,300,100">
        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
    </head>
    <body class="with-sidebar">
        @include('components.navbar')

        <div class="container-fluid">
            <div class="row">
                <nav class="sidebar-wrapper sidebar d-none d-md-block">
                    @include('components.sidebar')
                </nav>
                <main role="main" class="main-wrapper pt-3 px-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        @yield('content')
                    </div>
                </main>
            </div>
        </div>

        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
        @if(config('app.debug'))
            <script type="text/javascript" src="{{ mix('js/browserSync.js') }}"></script>
        @endif
    </body>
</html>
