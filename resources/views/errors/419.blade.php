@extends('errors::layout')

@section('title', __('screens/errors.419.title'))
@section('code', '419')
@section('message', __('screens/errors.419.title'))

@section('subtitle')
    @php
        printf(
            __('screens/errors.419.text'),
            '<a href="' . route('index') . '">' . __('screens/errors.419.link') . '</a>'
        );
    @endphp
@endsection
