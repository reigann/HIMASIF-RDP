@vite(['resources/css/components/navbar.css', 'resources/js/navbar.js'])

<script>
    // Ensure navbar auto-hide functionality works
    document.addEventListener('DOMContentLoaded', function() {
        // Force a scroll event after a short delay
        setTimeout(function() {
            window.dispatchEvent(new Event('scroll'));
        }, 100);
    });
</script>

<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-section desktop-menu">
            <div class="dropdown">
                <span class="cursor-pointer">Tentang</span>
                <div class="dropdown-menu">
                    <a href="{{ route('tentang-himasif') }}">Tentang HIMASIF</a>
                    <a href="{{ route('visi-misi') }}">Visi & Misi</a>
                    <a href="{{ route('tentang-logo') }}">Tentang Logo</a>
                </div>
            </div>
            <a href="{{ route('struktur') }}">Struktur</a>
        </div>

        <a href="{{ route('home') }}" class="navbar-logo">
            <img src="{{ asset('images/logohimasif.png') }}" alt="HIMASIF Logo">
        </a>

        <div class="navbar-right">
            <div class="navbar-section desktop-menu">
                <a href="{{ route('galeri') }}">Galeri</a>
                <a href="{{ route('merch') }}">Merch</a>
                <a href="{{ route('berita') }}">Berita</a>
            </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="mobile-menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-content">
            <div class="mobile-menu-header">
                <div class="mobile-menu-close">
                    <div class="close-bar"></div>
                    <div class="close-bar"></div>
                </div>
                <a href="{{ route('home') }}" class="mobile-logo">
                    <img src="{{ asset('images/logohimasif.png') }}" alt="HIMASIF Logo">
                </a>
            </div>

            <div class="mobile-menu-items">
                <div class="mobile-dropdown">
                    <div class="mobile-dropdown-toggle">Tentang</div>
                    <div class="mobile-dropdown-menu">
                        <a href="{{ route('tentang-himasif') }}">Tentang HIMASIF</a>
                        <a href="{{ route('visi-misi') }}">Visi & Misi</a>
                        <a href="{{ route('tentang-logo') }}">Tentang Logo</a>
                    </div>
                </div>
                <a href="{{ route('struktur') }}">Struktur</a>
                <a href="{{ route('galeri') }}">Galeri</a>
                <a href="{{ route('merch') }}">Merch</a>
                <a href="{{ route('berita') }}">Berita</a>
            </div>
        </div>
    </div>
</nav>
