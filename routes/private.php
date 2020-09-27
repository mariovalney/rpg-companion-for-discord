<?php

use Illuminate\Support\Facades\Route;

Route::get('game', 'GuildController@index')->name('guilds.index');
Route::get('game/{guild}', 'GuildController@guild')->name('guilds.guild');
Route::get('game/{guild}/variables', 'GuildController@variables')->name('guilds.variables');
Route::get('game/{guild}/rollings', 'GuildController@rollings')->name('guilds.rollings');
