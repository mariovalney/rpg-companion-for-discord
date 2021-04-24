@extends('layouts.base')

@section('body_class', 'with-sidebar')

@section('body')
    @include('components.navbar')

    <div class="container-fluid">
        <div class="row">
            <nav class="sidebar-wrapper sidebar">
                @include('components.sidebar')
            </nav>
            <main role="main" class="main-wrapper pt-4">
                @yield('content')
            </main>
        </div>
    </div>
@endsection
