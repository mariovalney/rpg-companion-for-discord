@extends('errors::layout')

@section('title', __('screens/errors.503.title'))
@section('code', '503')
@section('message', __($exception->getMessage()) ?: __('screens/errors.503.title'))
@section('subtitle', __('screens/errors.503.text'))
