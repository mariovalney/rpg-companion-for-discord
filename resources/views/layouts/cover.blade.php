@extends('layouts.base')

@section('body_class', 'cover-template')

@section('body')
    <div class="cover-container d-flex h-100 flex-column">
        <header class="masthead mb-auto p-3">
            <div class="inner">
                <h3 class="masthead-brand">
                    <img src="{{ url('images/logo.png') }}" height="60">
                </h3>
            </div>
        </header>
        <main role="main" class="inner cover cover-content-container p-3 mx-auto">
            @yield('content')
        </main>
        <footer class="mastfoot mt-auto p-3">
            <div class="inner">
                <p>@lang('footer.copyright')</p>
            </div>
        </footer>
    </div>
    <style type="text/css">
        html { height: 100%; }
    </style>
@endsection
