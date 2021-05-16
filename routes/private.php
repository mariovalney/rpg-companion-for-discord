<?php

use Illuminate\Support\Facades\Route;

Route::get('game', 'GuildController@index')->name('guilds.index');
Route::get('game/{guild}', 'GuildController@guild')->name('guilds.guild');
Route::get('game/{guild}/variables', 'GuildController@variables')->name('guilds.variables');
Route::get('game/{guild}/rollings', 'GuildController@rollings')->name('guilds.rollings');

Route::get('game/{guild}/{channel}/rollings/new', 'RollingController@create')->name('rollings.create');
Route::get('game/{guild}/{channel}/rollings/{rolling}', 'RollingController@edit')->name('rollings.edit');
Route::get('game/{guild}/{channel}/rollings/{rolling}/delete', 'RollingController@delete')->name('rollings.delete');
