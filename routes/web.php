<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'Controller@index')->name('index');

Route::get('game/{guild}', 'GuildController@index')->name('guild.index');
