<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('pages.home');
})->name('home');

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

Route::get('/tentang-himasif', function () {
    return view('pages.tentang-himasif');
})->name('tentang-himasif');

Route::get('/visi-misi', function () {
    return view('pages.visi-misi');
})->name('visi-misi');

Route::get('/tentang-logo', function () {
    return view('pages.tentang-logo');
})->name('tentang-logo');

Route::get('/struktur', function () {
    return view('pages.struktur');
})->name('struktur');

Route::get('/galeri', function () {
    return view('pages.galeri');
})->name('galeri');

Route::get('/merch', function () {
    return view('pages.merch');
})->name('merch');

Route::get('/berita', function () {
    return view('pages.berita');
})->name('berita');