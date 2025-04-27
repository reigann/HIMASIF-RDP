@extends('layouts.app')

@section('title', 'Home - HIMASIF RDP')

@push('styles')
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    @vite(['resources/css/home.css'])
@endpush

@push('scripts')
    @vite(['resources/js/home.js'])
@endpush

@section('content')
@include('partials.navbar')

<div id="home-page" class="container-fluid p-0">
    <!-- Landing Section -->
    <section id="landing" class="d-flex flex-column justify-content-start align-items-center text-white position-relative overflow-hidden">
        <!-- 3D Liquid Background -->
        <div id="liquid-background" class="position-absolute w-100 h-100">
            <canvas id="liquid-canvas"></canvas>
        </div>

        <div class="landing-content text-center w-100">
            <h1 class="hero-text">HIMASIF</h1>
            <div class="subtitle">Himpunan Mahasiswa <span class="sistem-text">Sistem</span> Informasi</div>
        </div>

        <div class="bottom-info d-flex justify-content-between align-items-center w-100 px-4 position-absolute bottom-0">
            <div class="copyright">© HIMASIF 2025</div>
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
            <div class="website-info">WEBSITE RESMI HIMASIF UPJ</div>
        </div>
    </section>

    <!-- Foto Section -->
    <section id="foto" class="py-5 bg-light">
        <div class="section-content">
            <div class="section-header text-center mb-5">
                <h2>Foto</h2>
                <p>Dokumentasi kegiatan HIMASIF RDP</p>
            </div>
            <div class="foto-grid row g-4">
                <div class="foto-item col-md-4">
                    <!-- Placeholder for foto 1 -->
                    <p>Kegiatan 1</p>
                </div>
                <div class="foto-item col-md-4">
                    <!-- Placeholder for foto 2 -->
                    <p>Kegiatan 2</p>
                </div>
                <div class="foto-item col-md-4">
                    <!-- Placeholder for foto 3 -->
                    <p>Kegiatan 3</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Periode Section -->
    <section id="periode" class="position-relative">
        <div class="section-content">
            <div class="periode-container row g-5">
                <div class="periode-left col-md-6">
                    <h2 class="periode-himasif">HIMASIF</h2>
                    <div class="periode-year-wrapper d-flex align-items-baseline">
                        <span class="periode-text">periode</span>
                        <span class="periode-year">2025</span>
                    </div>
                </div>
                <div class="periode-right col-md-6">
                    <p>HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunikasi akademik.</p>
                    <a href="#" class="selengkapnya">selengkapnya →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Marquee Text Divider -->
    <div class="marquee-divider">
        <!-- Top Marquee Row -->
        <div class="marquee-row marquee-row-1">
            <div class="marquee-track">
                <div class="marquee-content"></div>
            </div>
        </div>

        <!-- Middle Marquee Row -->
        <div class="marquee-row marquee-row-2">
            <div class="marquee-track">
                <div class="marquee-content"></div>
            </div>
        </div>

        <!-- Bottom Marquee Row -->
        <div class="marquee-row marquee-row-3">
            <div class="marquee-track">
                <div class="marquee-content"></div>
            </div>
        </div>
    </div>

    <!-- Total Pengurus Section -->
    <section id="pengurus" class="position-relative">
        <div class="section-content text-center">
            <div class="total-text">total</div>
            <h2 class="pengurus-title">PENGURUS</h2>
            <div class="stats-container d-flex justify-content-center align-items-center flex-wrap">
                <div class="stat-item">
                    <div class="stat-number" data-target="25">0</div>
                    <div class="stat-label">anggota</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number" data-target="9">0</div>
                    <div class="stat-label">divisi</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number" data-target="17">0</div>
                    <div class="stat-label">proker</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Cursor for Gallery -->
    <div class="custom-cursor">LIHAT GALERI</div>

    <!-- Galeri Section -->
    <section id="galeri" class="position-relative">
        <div class="galeri-bg position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="container-fluid">
            <div class="galeri-content">
                <div class="galeri-row position-relative">
                    <div class="galeri-text-col">
                        <div class="galeri-text-content">
                            <h2 class="galeri-title">PROFESIONAL</h2>
                            <h2 class="galeri-subtitle"><span class="galeri-ampersand">&</span>KEKELUARGAAN</h2>
                        </div>
                    </div>
                    <div class="galeri-image-col">
                        <div class="galeri-image-wrapper">
                            <img src="/images/pages/home/fotbar.jpg" alt="Foto Bersama HIMASIF" class="galeri-image img-fluid">
                            <div class="galeri-link">
                                <a href="{{ route('galeri') }}" class="galeri-kami"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sorotan Section -->
    <section id="sorotan" class="position-relative">
        <div class="sorotan-bg position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="sorotan-wrapper">
            <!-- Top Row: Text and Large Box -->
            <div class="sorotan-top-row">
                <!-- Text Section -->
                <div class="sorotan-text">
                    <h2 class="sorotan-title">SOROTAN <span class="sorotan-yang">yang</span></h2>
                    <h2 class="sorotan-subtitle">BISA KAMU</h2>
                    <h2 class="sorotan-subtitle">KUNJUNGI</h2>
                </div>
                <!-- Large Box -->
                <div class="sorotan-box sorotan-glass-box large-box"></div>
            </div>

            <!-- Bottom Row: 2 Medium Boxes and Large Box -->
            <div class="sorotan-bottom-row">
                <!-- Medium Boxes Container -->
                <div class="sorotan-medium-boxes">
                    <div class="sorotan-box sorotan-glass-box medium-box"></div>
                    <div class="sorotan-box sorotan-glass-box medium-box"></div>
                </div>
                <!-- Large Box -->
                <div class="sorotan-box sorotan-glass-box large-box"></div>
            </div>
        </div>
    </section>
</div>

@include('partials.footer')

@endsection

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    @vite(['resources/js/home.js'])
@endpush