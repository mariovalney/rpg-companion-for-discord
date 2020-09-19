<?php

use Illuminate\Support\Facades\Route;

Route::get('game', 'GuildController@index')->name('guilds.index');
Route::get('game/{guild}', 'GuildController@guild')->name('guilds.guild');
