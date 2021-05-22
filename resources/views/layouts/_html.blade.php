<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title') | @include('components.brand_title')</title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:700,400,300,100">
        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">

        <link rel="shortcut icon" href="{{ url('images/logo.png') }}" />

        @yield('html_head')
    </head>
    <body class="@yield('body_class')">
        @yield('body')

        @yield('html_footer')
    </body>
</html>
