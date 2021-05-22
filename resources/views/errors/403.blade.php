@extends('errors::layout')

@section('title', __('screens/errors.403'))
@section('code', '403')
@section('message', __($exception->getMessage() ?: __('screens/errors.403')))

@section('subtitle')
    @php
        printf(
            __('screens/errors.login.text'),
            '<a href="' . route('index') . '">' . __('screens/errors.login.link') . '</a>'
        );
    @endphp
@endsection
