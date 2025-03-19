<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HIMASIF</title>
    @vite('resources/css/app.css')
    @stack('styles') <!-- Tempat untuk CSS spesifik per halaman -->
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo">
            <a href="/">HIMASIF</a>
        </div>
        <div class="center-logo">
            <a href="/">
                <img src="{{ asset('images/logohimasif.png') }}" alt="HIMASIF Logo" class="logo-img">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="/about">Tentang</a></li>
            <li><a href="/struktur">Struktur</a></li>
            <li><a href="/galeri">Galeri</a></li>
            <li><a href="/merch">Merch</a></li>
            <li><a href="/berita">Berita</a></li>
        </ul>
    </nav>

    <!-- Content -->
    @yield('content')

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-left">
                <p class="footer-label">Slogan</p>
                <h2 class="slogan">WE MAKE IT HAPPEN</h2>
                <p class="slogan-number">360</p>
            </div>
            <div class="footer-right">
                <p class="footer-label">Acara Mendatang</p>
                <ul class="event-list">
                    <li><a href="/visi-misi">VISI & MISI <span class="arrow">→</span></a></li>
                    <li><a href="/sejarah">SEJARAH <span class="arrow">→</span></a></li>
                    <li><a href="/logo">LOGO <span class="arrow">→</span></a></li>
                    <li><a href="/berita">BERITA <span class="arrow">→</span></a></li>
                    <li><a href="/merch">MERCH <span class="arrow">→</span></a></li>
                    <li><a href="/struktur">STRUKTUR <span class="arrow">→</span></a></li>
                </ul>
            </div>
        </div>
    </footer>

    @vite('resources/js/app.js')
</body>
</html>