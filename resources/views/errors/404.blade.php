@extends('errors::layout')

@section('title', __('screens/errors.404.title'))
@section('code', '404')
@section('message', __('screens/errors.404.title'))

@section('subtitle')
    @php
        printf(
            __('screens/errors.404.text'),
            '<a href="' . route('index') . '">' . __('screens/errors.404.link') . '</a>'
        );
    @endphp
@endsection
