@extends('layouts.minimal')

@section('title', __('screens/guilds.notfound.title'))

@section('message_title', __('screens/guilds.notfound.title'))
@section('message_content', $message ?? '')
