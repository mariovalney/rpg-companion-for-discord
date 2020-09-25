<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'Controller@index')->name('index');
Route::get('/healthcheck', 'Controller@healthcheck')->name('healthcheck');
