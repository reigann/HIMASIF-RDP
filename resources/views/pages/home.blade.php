@extends('layouts.app')

@section('title', 'Home - HIMASIF RDP')

@push('styles')
    @vite(['resources/css/home.css'])
@endpush

@section('content')
@include('partials.navbar')

<!-- Landing Section -->
<section class="section-full d-flex align-items-center bg-primary-gradient" id="landing">
    <canvas id="bgCanvas"></canvas>
    <div class="container">
        <div class="row min-vh-100 align-items-center">
            <div class="col-12 text-center">
                <div class="title-container">
                    <h1 class="himasif-title">HIMASIF</h1>
                    <h2 class="himasif-subtitle">Himpunan Mahasiswa <span class="sistem">Sistem</span> Informasi</h2>
                    
                    <div class="bottom-info">
                        <span>© 2025 HIMASIF</span>
                        <div class="mouse-scroll">
                            <div class="mouse-wheel"></div>
                        </div>
                        <span>WEBSITE RESMI HIMASIF</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Photo Section -->
<section class="section-full d-flex align-items-center bg-primary-gradient" id="photo">
    <div class="container-fluid p-0">
        <div class="row min-vh-100 align-items-center">
            <div class="col-12">
                <div class="photo-wrapper text-center">
                    <img src="{{ asset('images/himasif.svg') }}" 
                         alt="Foto Bersama HIMASIF" 
                         class="himasif-hero-image">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Struktur Section -->
<section class="section-full d-flex align-items-center bg-dark-blue" id="struktur">
    <div class="container">
        <div class="row min-vh-100 align-items-center">
            <div class="col-12">
                <h2 class="himasif-section-title text-blue-light mb-5">Struktur Organisasi</h2>
                <div class="struktur-wrapper text-center">
                    <img src="{{ asset('images/struktur-organisasi.jpg') }}" 
                         alt="Struktur Organisasi HIMASIF" 
                         class="img-struktur rounded shadow-light">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Total Pengurus Section -->
<section class="section-full d-flex align-items-center bg-dark-blue" id="pengurus">
    <div class="container">
        <div class="row min-vh-100 align-items-center">
            <div class="col-12">
                <h2 class="himasif-section-title text-blue-light">Total Pengurus</h2>
                <div class="row justify-content-center g-4">
                    <div class="col-md-4">
                        <div class="stat-card text-center">
                            <span class="stat-number text-blue-light">30</span>
                            <p class="stat-label text-blue-light">Pengurus Inti</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stat-card text-center">
                            <span class="stat-number text-blue-light">50</span>
                            <p class="stat-label text-blue-light">Staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Periode HIMASIF Section -->
<section class="himasif-content-section">
    <div class="container mx-auto px-4">
        <h2 class="himasif-section-title">Periode HIMASIF</h2>
        <div class="himasif-period-info mt-8">
            <h3 class="text-2xl font-bold">2023/2024</h3>
            <p class="text-xl mt-2">Kabinet Transformasi Digital</p>
        </div>
    </div>
</section>

<!-- Foto Galeri Section -->
<section class="himasif-content-section">
    <div class="container mx-auto px-4">
        <h2 class="himasif-section-title">Galeri Kegiatan</h2>
        <div class="himasif-gallery-grid mt-8">
            <!-- Gallery items will be dynamically populated -->
        </div>
    </div>
</section>

<!-- Sorotan Section -->
<section class="himasif-content-section himasif-content-section--light">
    <div class="container mx-auto px-4">
        <h2 class="himasif-section-title">Sorotan</h2>
        <div class="himasif-highlights-grid mt-8">
            <!-- Highlights items will be dynamically populated -->
        </div>
    </div>
</section>
@endsection

@push('scripts')
    @vite(['resources/js/home.js'])
@endpush