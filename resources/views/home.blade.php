@extends('layouts.app')

@section('content')
    <!-- Hero Section dengan Teks HIMASIF dan Kepanjangan -->
    <div class="hero">
        <h1>HIMASIF</h1>
        <p class="tagline">Himpunan Mahasiswa Sistem Informasi</p>
    </div>

    <!-- Section Foto yang Bisa Discroll -->
    <div class="photo-section">
        <img src="{{ asset('images/himasif.JPG') }}" alt="HIMASIF Group Photo" class="full-width-photo grayscale">
    </div>

    <!-- Section Informasi dengan Background Biru -->
    <div class="info-section">
        <div class="info-content">
            <div class="info-text">
                <p>HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan mahasiswa keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunikasi akademik.</p>
                <p class="slogan">selen tonya _</p>
            </div>
            <h2 class="period">periode 2025</h2>
        </div>
    </div>

    <!-- Section Statistik Pengurus -->
    <div class="stats-section">
        <div class="stats-content">
            <div class="stats-numbers">
                <div class="stat-item">
                    <h3>25</h3>
                    <p>anggota</p>
                </div>
                <div class="stat-item">
                    <h3>9</h3>
                    <p>divisi</p>
                </div>
                <div class="stat-item">
                    <h3>17</h3>
                    <p>program kerja</p>
                </div>
            </div>
            <h2 class="total-pengurus">TOTAL PENGURUS</h2>
        </div>
    </div>

    <!-- Section Profesional & Kekeluargaan -->
    <div class="professional-section">
        <div class="professional-content">
            <h2 class="professional-title">PROFESIONAL & KEKELUARGAAN</h2>
            <a href="/galeri" class="gallery-link">galeri kami →</a>
        </div>
    </div>

    <!-- Konten Utama -->
    <section class="content">
        <div class="section">
            <h2>Himpunan</h2>
            <p>Informasi tentang HIMASIF...</p>
        </div>
        <div class="section">
            <h2>Mahasiswa</h2>
            <p>Informasi tentang anggota dan kegiatan mahasiswa...</p>
        </div>
        <div class="section">
            <h2>Sistem</h2>
            <p>Informasi tentang sistem informasi...</p>
        </div>
        <div class="section">
            <h2>Informasi</h2>
            <p>Berita dan pengumuman terbaru...</p>
        </div>
    </section>

    <!-- Tambahkan Style untuk Professional Section -->
    <style>
        .professional-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('{{ asset('images/himasif.JPG') }}');
            background-size: cover;
            background-position: center;
            filter: blur(10px);
            z-index: 1;
        }
    </style>
@endsection