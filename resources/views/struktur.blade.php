<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Struktur Organisasi</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"> <!-- CSS Global -->
    <link rel="stylesheet" href="{{ asset('css/struktur.css') }}"> <!-- CSS Khusus Struktur -->
</head>
<body>
    <!-- Navbar (Opsional, sesuaikan dengan layoutmu) -->
    <nav class="navbar">
        <div class="navbar-brand">Logo</div>
        <ul class="navbar-menu">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/about') }}">About</a></li>
            <li><a href="{{ url('/struktur') }}">Struktur</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="struktur-hero">
        <div class="hero-overlay">
            <h1 class="struktur-title">Struktur Organisasi</h1>
        </div>
    </section>

    <!-- Struktur Content Section -->
    <section class="struktur-content">
        <div class="container">
            <div class="struktur-list">
                <div class="struktur-item">
                    <h2>Ketua</h2>
                    <p>Nama: John Doe<br>Deskripsi: Memimpin organisasi dengan visi yang jelas.</p>
                </div>
                <div class="struktur-item">
                    <h2>Sekretaris</h2>
                    <p>Nama: Jane Smith<br>Deskripsi: Mengelola administrasi dan dokumentasi.</p>
                </div>
                <div class="struktur-item">
                    <h2>Bendahara</h2>
                    <p>Nama: Alex Johnson<br>Deskripsi: Mengatur keuangan organisasi.</p>
                </div>
                <div class="struktur-item">
                    <h2>Koordinator</h2>
                    <p>Nama: Sarah Williams<br>Deskripsi: Koordinasi kegiatan dan tim.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer (Opsional, sesuaikan dengan layoutmu) -->
    <footer>
        <p>&copy; 2025 Nama Organisasi. All rights reserved.</p>
    </footer>
</body>
</html>