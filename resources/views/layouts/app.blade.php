<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Himpunan Mahasiswa Sistem Informasi (HIMASIF) - Website Resmi">
    <meta name="author" content="HIMASIF">
    <title>{{ $title ?? 'HIMASIF' }}</title>
    
    <!-- Favicon (opsional, jika kamu punya logo) -->
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">

    <!-- Memuat CSS dan JS menggunakan Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo">
            <a href="/">HIMASIF</a>
        </div>
        <ul class="nav-links">
            <li><a href="/tentang">TENTANG</a></li>
            <li><a href="/struktur">STRUKTUR</a></li>
            <li><a href="/galeri">GALERI</a></li>
            <li><a href="/merch">MERCH</a></li>
            <li><a href="/berita">BERITA</a></li>
        </ul>
    </nav>

    <!-- Konten Utama -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer>
        <p>© 2025 HIMASIF. All rights reserved.</p>
    </footer>

    <!-- Placeholder untuk script tambahan (opsional) -->
    @yield('scripts')
</body>
</html>