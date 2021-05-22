@extends('layouts._html')

@section('html_head')
    @livewireStyles
    <script type="text/javascript">window.DiscordMarkdown = { run: function() {} }</script>
@endsection

@section('html_footer')
    <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    @if(config('app.debug'))
        <script type="text/javascript" src="{{ mix('js/browserSync.js') }}"></script>
    @endif

    @livewireScripts
@endsection
