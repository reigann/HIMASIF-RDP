@extends('layouts.app')

@section('title', 'Tentang HIMASIF - HIMASIF RDP')

@push('styles')
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    @vite(['resources/css/about-himasif.css'])
@endpush

@section('content')
@include('partials.navbar')

<div id="about-page" class="container-fluid p-0">
    <!-- Landing Section -->
    <section id="landing" class="d-flex flex-column justify-content-center align-items-center text-white position-relative overflow-hidden">
        <div class="background-container position-absolute">
            <div class="noise-texture"></div>
            <div class="noise-overlay"></div>
            <div class="curved-lines" id="curved-lines"></div>
        </div>
        
        <div class="landing-content text-center w-100">
            <h1 class="hero-text animate__animated animate__fadeInDown">TENTANG HIMASIF</h1>
            <div class="subtitle animate__animated animate__fadeInUp">Himpunan Mahasiswa <span class="sistem-text">Sistem</span> Informasi</div>
        </div>
        
        <div class="bottom-info d-flex justify-content-between align-items-center w-100 px-4 position-absolute bottom-0">
            <div class="copyright">© HIMASIF 2025</div>
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
            <div class="website-info">WEBSITE RESMI HIMASIF UPJ</div>
        </div>
    </section>

    <!-- Visi Misi Section -->
    <section id="visi-misi" class="py-5 bg-light position-relative">
        <div class="section-content">
            <div class="section-header text-center mb-5 animate__animated animate__fadeIn">
                <h2>Visi & Misi</h2>
                <p class="lead">Tujuan dan Komitmen HIMASIF RDP</p>
            </div>
            <div class="row g-5">
                <div class="col-md-6 visi animate__animated animate__fadeInLeft">
                    <div class="card h-100 border-0 shadow-sm p-4">
                        <h3>Visi</h3>
                        <p class="text-muted">Menjadikan HIMASIF sebagai organisasi mahasiswa terdepan dalam pengembangan keilmuan dan inovasi teknologi informasi.</p>
                    </div>
                </div>
                <div class="col-md-6 misi animate__animated animate__fadeInRight">
                    <div class="card h-100 border-0 shadow-sm p-4">
                        <h3>Misi</h3>
                        <ul class="list-unstyled">
                            <li><span class="bullet">•</span> Meningkatkan kompetensi teknologi mahasiswa.</li>
                            <li><span class="bullet">•</span> Membangun solidaritas dan kekeluargaan.</li>
                            <li><span class="bullet">•</span> Mengadakan program kerja inovatif.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sejarah Section -->
    <section id="sejarah" class="position-relative">
        <div class="section-content">
            <div class="sejarah-container row g-5 align-items-center">
                <div class="col-md-6 sejarah-left animate__animated animate__fadeInLeft">
                    <h2 class="sejarah-title">SEJARAH</h2>
                    <div class="sejarah-year-wrapper d-flex align-items-baseline">
                        <span class="sejarah-text">HIMASIF</span>
                        <span class="sejarah-year">BERDIRI</span>
                    </div>
                </div>
                <div class="col-md-6 sejarah-right animate__animated animate__fadeInRight">
                    <p>HIMASIF didirikan pada tahun 20XX sebagai wadah bagi mahasiswa Sistem Informasi Universitas Pembangunan Jaya untuk mengembangkan potensi akademik dan non-akademik. Organisasi ini terus berkembang menjadi pusat inovasi dan kolaborasi.</p>
                    <a href="#" class="selengkapnya btn btn-outline-light">Selengkapnya →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Divider Section -->
    <div class="divider-section">
        <div class="divider-container d-flex align-items-center justify-content-center">
            <div class="divider-line"></div>
            <div class="divider-diamond"></div>
            <div class="divider-line"></div>
        </div>
    </div>

    <!-- Struktur Organisasi Section -->
    <section id="struktur" class="position-relative text-center">
        <div class="section-content">
            <h2 class="struktur-title animate__animated animate__zoomIn">STRUKTUR ORGANISASI</h2>
            <p class="lead text-white mb-4">Susunan Pengurus HIMASIF Periode 2025</p>
            <div class="struktur-image-wrapper mt-4 animate__animated animate__fadeInUp">
                <img src="/images/pages/about/struktur-organisasi.jpg" alt="Struktur Organisasi HIMASIF" class="img-fluid rounded shadow-lg">
            </div>
        </div>
    </section>

    <!-- Nilai Section -->
    <section id="nilai" class="position-relative">
        <div class="nilai-bg position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="container-fluid">
            <div class="nilai-content">
                <div class="nilai-row position-relative">
                    <div class="nilai-text-col animate__animated animate__fadeInLeft">
                        <div class="nilai-text-content">
                            <h2 class="nilai-title">NILAI KAMI</h2>
                            <h2 class="nilai-subtitle">PROFESIONAL & KEKELUARGAAN</h2>
                        </div>
                    </div>
                    <div class="nilai-image-col animate__animated animate__fadeInRight">
                        <div class="nilai-image-wrapper">
                            <img src="/images/pages/about/team.jpg" alt="Tim HIMASIF" class="nilai-image img-fluid rounded shadow-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

@include('partials.footer')

@endsection

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.js"></script>
    @vite(['resources/js/about.js'])
@endpush