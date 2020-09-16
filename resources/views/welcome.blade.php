<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>RPG Companion</title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:700,400,300,100">
        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
    </head>
    <body>
        <div class="container text-center">
            <h1 class="big">RPG Companion</h1>

                @if (Auth::user())
                    <div style="margin-top: 40px; text-align: left;">
                        <pre><?php print_r( Auth::user() ); ?></pre>
                    </div>
                @endif
            </div>
        </div>

        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

        @if(config('app.debug'))
            <script type="text/javascript" src="{{ mix('js/browserSync.js') }}"></script>
        @endif
    </body>
</html>
