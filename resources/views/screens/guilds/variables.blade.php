@extends('layouts.main')

@section('title', __('screens/variables.title'))

@section('content')
    <h1 class="page-title">@lang('screens/variables.title')</h1>
    <p class="lead">
        @lang('screens/variables.description.lead')

        <span class="d-block">
            @lang('screens/variables.description.examples')
        </span>
    </p>

    <div class="mt-5">
        @livewire('variables-crud', ['guild' => Guilds::current()])
    </div>
@endsection
