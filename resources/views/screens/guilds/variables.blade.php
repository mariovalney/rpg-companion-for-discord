@extends('layouts.main')

@section('title', __('screens/variables.title'))

@section('content')
    <h1 class="page-title">@lang('screens/variables.title')</h1>

    <div>
        @livewire('variables-crud', ['guild' => \App\Models\Guild::current()])
    </div>
@endsection
