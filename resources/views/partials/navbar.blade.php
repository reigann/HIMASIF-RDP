@vite(['resources/css/components/navbar.css'])

<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-section">
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
        
        <div class="navbar-section">
            <a href="{{ route('galeri') }}">Galeri</a>
            <a href="{{ route('merch') }}">Merch</a>
            <a href="{{ route('berita') }}">Berita</a>
        </div>
    </div>
</nav>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
</script>
