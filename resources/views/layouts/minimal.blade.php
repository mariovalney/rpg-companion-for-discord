@extends('layouts._html')

@section('body_class', 'minimal')

@section('body')
    <h1 class="medium">@yield('message_title')</h1>
    <p class="lead">@yield('message_content')</p>

    <div id="background-mark"></div>
@endsection
