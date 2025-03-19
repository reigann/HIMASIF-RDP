@extends('layouts.app')

@section('content')
    <!-- Hero Section dengan Teks HIMASIF dan Kepanjangan -->
    <div class="hero">
        <h1>HIMASIF</h1>
        <p class="tagline">Himpunan Mahasiswa Sistem Informasi</p>
    </div>

    <!-- Section Foto yang Bisa Discroll -->
    <div class="photo-section">
        <img src="{{ asset('images/himasif.svg') }}" alt="HIMASIF Group Photo">
    </div>

    <!-- Section Informasi Baru (Berdasarkan Gambar) -->
    <div class="info-custom-section">
        <div class="info-content">
            <h2 class="himasif-title">HIMASIF</h2>
            <p class="period-text">periode 2025</p>
            <p class="description">
                HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan mahasiswa keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunikasi akademik.
            </p>
            <div class="separator"></div>
            <h3 class="total-pengurus">total PENGURUS</h3>
            <div class="pengurus-numbers">
                <span class="number">25</span> | <span class="number">9</span> | <span class="number">17</span>
            </div>
            <div class="pengurus-labels">
                <span class="label">magang</span> <span class="label">divisi</span> <span class="label">programmer</span>
            </div>
        </div>
    </div>

    <!-- Section Galeri Baru (Berdasarkan Gambar) -->
    <div class="gallery-section">
        <div class="gallery-content">
            <img src="{{ asset('images/himasif.svg') }}" alt="HIMASIF Group Photo" class="group-photo">
            <h2 class="gallery-title">PROFESIONAL & KEKELUARGAAN</h2>
            <p class="gallery-subtitle">galeri kami</p>
        </div>
    </div>

    <!-- Sorotan Section -->
    <div class="sorotan-section">
        <div class="sorotan-content">
            <div class="sorotan-text">
                <h2 class="sorotan-title">SOROTAN</h2>
                <p class="sorotan-subtitle">bisa kamu kunjungi</p>
            </div>
            <div class="sorotan-grid">
                <div class="sorotan-box">
                    <img src="{{ asset('images/placeholder.jpg') }}" alt="Sorotan 1">
                </div>
                <div class="sorotan-box">
                    <img src="{{ asset('images/placeholder.jpg') }}" alt="Sorotan 2">
                </div>
                <div class="sorotan-box">
                    <img src="{{ asset('images/placeholder.jpg') }}" alt="Sorotan 3">
                </div>
                <div class="sorotan-box">
                    <img src="{{ asset('images/placeholder.jpg') }}" alt="Sorotan 4">
                </div>
            </div>
        </div>
    </div>

    
@endsection