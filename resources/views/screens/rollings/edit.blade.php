@extends('layouts.main')

@section('title', __('screens/rollings.title'))

@section('content')
    @livewire('rolling-form', ['rolling' => $rolling])
@endsection
