@extends('layouts.minimal')

@section('body_class', 'minimal page-error')

@section('body')
    <h1 class="display-3">@yield('code') - @yield('message')</h1>
    <p class="lead">@yield('subtitle')</p>

    <div id="background-mark"></div>
@endsection
