@extends('layouts.minimal')

@section('body_class', 'minimal page-error')

@section('title', __('screens/errors.maintenance.title'))

@section('body')
    <h1 class="display-3">@yield('title')</h1>
    <p class="lead">
        {{ __('screens/errors.maintenance.text') }}
        <br>
        <strong>{{ __('screens/errors.maintenance.joke') }}</strong>
    </p>

    <div id="background-mark"></div>
@endsection
