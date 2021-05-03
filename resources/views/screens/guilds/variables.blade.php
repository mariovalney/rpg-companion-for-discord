@extends('layouts.main')

@section('title', __('screens/variables.title'))

@section('content')
    <h1 class="page-title">@lang('screens/variables.title')</h1>
    <div class="text-white">
        <p class="lead">
            @lang('screens/variables.description.lead')

            <span class="d-block">
                @lang('screens/variables.description.examples')
            </span>
        </p>
    </div>

    <div class="mt-5">
        @livewire('variables-crud', ['guild' => \App\Models\Guild::current()])
    </div>
@endsection
