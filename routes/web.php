<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/agenda', function () {
    return view('agenda');
});

Route::get('/event', function () {
    return view('event');
});

Route::get('/contact', function () {
    return view('contact');
});