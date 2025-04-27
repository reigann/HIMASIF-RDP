@vite(['resources/css/components/navbar.css'])

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

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

        // Variables for scroll direction detection
        let lastScrollTop = 0;
        let scrollThreshold = 50; // Minimum scroll amount to trigger hide/show
        let scrollTimeout;

        // Scroll event for navbar background and auto-hide
        window.addEventListener('scroll', function() {
            // Handle background blur effect
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('nav-hidden'); // Always show navbar at top of page
                lastScrollTop = window.scrollY;
                return;
            }

            // Handle auto-hide based on scroll direction
            clearTimeout(scrollTimeout);

            // Determine scroll direction
            const currentScrollTop = window.scrollY;
            const scrollingDown = currentScrollTop > lastScrollTop;
            const scrollDifference = Math.abs(currentScrollTop - lastScrollTop);

            // Only trigger if scroll amount is significant
            if (scrollDifference > scrollThreshold) {
                if (scrollingDown) {
                    // Scrolling down - hide navbar
                    navbar.classList.add('nav-hidden');
                } else {
                    // Scrolling up - show navbar
                    navbar.classList.remove('nav-hidden');
                }

                // Update last scroll position
                lastScrollTop = currentScrollTop;
            }

            // Set a timeout to show navbar after scrolling stops
            scrollTimeout = setTimeout(function() {
                // If user hasn't scrolled for a while, show navbar
                navbar.classList.remove('nav-hidden');
            }, 3000); // Show navbar after 3 seconds of no scrolling
        });

        // Mobile menu toggle
        mobileMenuToggle.addEventListener('click', function() {
            document.body.classList.add('menu-open');
            mobileMenuOverlay.classList.add('active');
            // Always show navbar when mobile menu is open
            navbar.classList.remove('nav-hidden');
        });

        // Mobile menu close
        mobileMenuClose.addEventListener('click', function() {
            document.body.classList.remove('menu-open');
            mobileMenuOverlay.classList.remove('active');
        });

        // Mobile dropdown toggles
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const parent = this.parentElement;
                const dropdownMenu = parent.querySelector('.mobile-dropdown-menu');

                // Close other open dropdowns
                document.querySelectorAll('.mobile-dropdown.active').forEach(dropdown => {
                    if (dropdown !== parent) {
                        dropdown.classList.remove('active');
                        dropdown.querySelector('.mobile-dropdown-menu').style.maxHeight = '0px';
                    }
                });

                // Toggle current dropdown
                parent.classList.toggle('active');

                if (parent.classList.contains('active')) {
                    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
                } else {
                    dropdownMenu.style.maxHeight = '0px';
                }
            });
        });
    });
</script>
