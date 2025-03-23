@extends('layouts.app')

@section('title', 'Home - HIMASIF RDP')

@push('styles')
    @vite(['resources/css/home.css'])
@endpush

@section('content')
@include('partials.navbar')

<div id="home-page">
    <!-- Landing Section -->
    <section id="landing">
        <!-- Background Container -->
        <div class="background-container">
            <!-- Noise Overlay -->
            <div class="noise-overlay"></div>
            
            <!-- Curved Lines -->
            <div class="curved-lines">
                <!-- SVG Curved Lines -->
                <svg class="curved-line line1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,500 Q250,350 500,500 T1000,500" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line2" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,400 Q250,250 500,400 T1000,400" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line3" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,600 Q250,450 500,600 T1000,600" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line4" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,300 Q250,150 500,300 T1000,300" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line5" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,700 Q250,550 500,700 T1000,700" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line6" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line7" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,800 Q250,650 500,800 T1000,800" fill="none" stroke-width="2" />
                </svg>
                <svg class="curved-line line8" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,100 Q250,-50 500,100 T1000,100" fill="none" stroke-width="2" />
                </svg>
            </div>
        </div>
        
        <div class="landing-content">
            <h1 class="hero-text">HIMASIF</h1>
            <span class="subtitle">Himpunan Mahasiswa <span>Sistem</span> Informasi</span>
        </div>
        
        <div class="bottom-info">
            <div class="copyright"> HIMASIF 2025</div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
            <div class="website-info">WEBSITE RESMI HIMASIF UPJ</div>
        </div>
    </section>

    <!-- Foto Section -->
    <section id="foto" class="py-5 bg-light">
        <div class="section-content">
            <div class="section-header">
                <h2>Foto</h2>
                <p>Dokumentasi kegiatan HIMASIF RDP</p>
            </div>
            <div class="foto-grid">
                <div class="foto-item">
                    <!-- Placeholder for foto 1 -->
                    <p>Kegiatan 1</p>
                </div>
                <div class="foto-item">
                    <!-- Placeholder for foto 2 -->
                    <p>Kegiatan 2</p>
                </div>
                <div class="foto-item">
                    <!-- Placeholder for foto 3 -->
                    <p>Kegiatan 3</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Periode Section -->
    <section id="periode">
        <div class="section-content">
            <div class="periode-container">
                <div class="periode-left">
                    <h2 class="periode-himasif">HIMASIF</h2>
                    <div class="periode-year-wrapper">
                        <span class="periode-text">periode</span>
                        <span class="periode-year">2025</span>
                    </div>
                </div>
                <div class="periode-right">
                    <p>HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunikasi akademik.</p>
                    <a href="#" class="selengkapnya">selengkapnya →</a>
                </div>
            </div>
            <div class="periode-divider-container">
                <div class="periode-divider-line"></div>
                <div class="periode-divider-diamond"></div>
                <div class="periode-divider-line"></div>
            </div>
        </div>
    </section>

    <!-- Total Pengurus Section -->
    <section id="pengurus">
        <div class="section-content">
            <div class="total-text">total</div>
            <h2 class="pengurus-title">PENGURUS</h2>
            <div class="stats-container">
                <div class="stat-item">
                    <div class="stat-number">25</div>
                    <div class="stat-label">anggota</div>
                </div>
                <div class="stat-divider">|</div>
                <div class="stat-item">
                    <div class="stat-number">9</div>
                    <div class="stat-label">divisi</div>
                </div>
                <div class="stat-divider">|</div>
                <div class="stat-item">
                    <div class="stat-number">17</div>
                    <div class="stat-label">proker</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Galeri Section -->
    <section id="galeri" class="position-relative">
        <div class="galeri-bg"></div>
        <div class="container-fluid">
            <div class="galeri-content">
                <div class="galeri-row">
                    <div class="galeri-text-col">
                        <div class="galeri-text-content">
                            <h2 class="galeri-title">PROFESSIONAL</h2>
                            <h2 class="galeri-subtitle"><span class="galeri-ampersand">&amp;</span>KEKELUARGAAN</h2>
                        </div>
                    </div>
                    <div class="galeri-image-col">
                        <div class="galeri-image-wrapper">
                            <img src="/images/pages/home/fotbar.jpg" alt="Foto Bersama HIMASIF" class="galeri-image">
                        </div>
                    </div>
                    <div class="galeri-link">
                        <a href="#" class="galeri-kami">galeri kami <span class="galeri-arrow">→</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sorotan Section -->
    <section id="sorotan" class="py-5">
        <div class="section-content">
            <div class="section-header">
                <h2>Sorotan</h2>
                <p>Kegiatan Unggulan HIMASIF RDP</p>
            </div>
            <div class="sorotan-grid">
                <div class="sorotan-item">
                    <h4>Seminar Teknologi</h4>
                    <p>Seminar tentang perkembangan teknologi terkini di bidang Sistem Informasi</p>
                </div>
                <div class="sorotan-item">
                    <h4>Workshop Coding</h4>
                    <p>Pelatihan pengembangan aplikasi web dan mobile untuk mahasiswa Sistem Informasi</p>
                </div>
                <div class="sorotan-item">
                    <h4>Kompetisi IT</h4>
                    <p>Ajang kompetisi untuk mengasah kemampuan mahasiswa dalam bidang IT</p>
                </div>
            </div>
        </div>
    </section>
</div>

@endsection

@push('scripts')
    @vite(['resources/js/home.js'])
@endpush