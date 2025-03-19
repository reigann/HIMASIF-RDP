@extends('layouts.app')

@section('content')
    @push('styles')
        @vite('resources/css/about.css')
    @endpush

    <!-- Hero Section untuk Halaman About (Visi & Misi) -->
    <div class="hero about-hero">
        <div class="hero-overlay">
            <h1 class="vision-mission-text">VISI MISI</h1>
        </div>
    </div>

    <!-- Info Section untuk Visi & Misi -->
    <div class="about-info-section">
        <div class="info-content">
            <h2 class="section-title">VISI HIMASIF</h2>
            <p class="description">
                Menjadikan HIMASIF sebagai organisasi yang profesional, inovatif, dan berdaya saing di bidang sistem informasi, serta menjadi wadah utama bagi mahasiswa Sistem Informasi untuk mengembangkan potensi akademik dan non-akademik.
            </p>

            <h2 class="section-title">MISI HIMASIF</h2>
            <div class="mission-list">
                <div class="mission-item">
                    <p>Meningkatkan kompetensi mahasiswa Sistem Informasi melalui pelatihan, workshop, dan seminar teknologi terbaru.</p>
                </div>
                <div class="mission-item">
                    <p>Membangun jejaring yang kuat dengan komunitas teknologi, industri, dan alumni untuk mendukung karier mahasiswa.</p>
                </div>
                <div class="mission-item">
                    <p>Mengadakan kegiatan yang mendukung pengembangan soft skill dan hard skill, seperti kompetisi dan proyek kolaboratif.</p>
                </div>
                <div class="mission-item">
                    <p>Mewadahi aspirasi mahasiswa dan menciptakan lingkungan yang kondusif untuk inovasi dan kreativitas.</p>
                </div>
            </div>
        </div>
    </div>
@endsection