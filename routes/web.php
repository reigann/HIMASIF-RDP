<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/struktur', function () {
    return view('struktur');
});

Route::get('/event', function () {
    return view('event');
});

Route::get('/contact', function () {
    return view('contact');
});