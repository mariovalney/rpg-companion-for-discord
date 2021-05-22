@extends('errors::layout')

@section('title', __('screens/errors.401'))
@section('code', '401')
@section('message', __($exception->getMessage() ?: __('screens/errors.401')))

@section('subtitle')
    @php
        printf(
            __('screens/errors.login.text'),
            '<a href="' . route('index') . '">' . __('screens/errors.login.link') . '</a>'
        );
    @endphp
@endsection
