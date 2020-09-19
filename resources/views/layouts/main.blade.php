@extends('layouts.base')

@section('body_class', 'with-sidebar')

@section('body')
    @include('components.navbar')

    <div class="container-fluid">
        <div class="row">
            <nav class="sidebar-wrapper sidebar d-none d-md-block">
                @include('components.sidebar')
            </nav>
            <main role="main" class="main-wrapper pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                    @yield('content')
                </div>
            </main>
        </div>
    </div>
@endsection
