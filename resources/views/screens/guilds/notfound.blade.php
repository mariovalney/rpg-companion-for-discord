@extends('layouts.base')

@section('title', __('screens/guilds.notfound.title'))
@section('body_class', 'minimal')

@section('body')
    <h1 class="medium">@lang('screens/guilds.notfound.title')</h1>
    <p class="lead">{{ $message ?? '' }}</p>
@endsection
