@extends('layouts.main')

@section('title', __('screens/rollings.title'))

@section('content')
    @livewire('rolling-form', ['rolling' => $rolling, 'variables' => \App\Models\Variable::findAll()->get()])
@endsection
