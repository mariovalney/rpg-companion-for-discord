@extends('layouts.main')

@section('title', $guild['name'])

@section('content')
    <h1>{{ $guild['name'] }}</h1>
@endsection
