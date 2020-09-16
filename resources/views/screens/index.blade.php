@extends('layouts.main')

@section('title', 'Bem-vindo!')

@section('content')
    @if (Auth::user())
        <div style="margin-top: 40px; text-align: left;">
            <pre><?php print_r( Auth::user() ); ?></pre>
        </div>
    @endif
@endsection
