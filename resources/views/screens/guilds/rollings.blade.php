@extends('layouts.main')

@section('title', __('screens/rollings.title'))

@section('content')
    @livewire('rollings', ['guild' => Guilds::current()])
@endsection
