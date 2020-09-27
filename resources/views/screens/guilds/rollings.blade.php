@extends('layouts.main')

@section('title', __('screens/rollings.title'))

@section('content')
    <h1 class="page-title">@lang('screens/rollings.title')</h1>

    <div>
        @livewire('rolling-form', ['guild' => \App\Models\Guild::current()])
    </div>
@endsection
