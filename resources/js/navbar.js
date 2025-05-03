// Navbar JavaScript - Simple implementation for auto-hide functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get navbar element
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Variables for scroll tracking
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Apply initial state
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Handle scroll events
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Get current scroll position
                const currentScrollY = window.scrollY;

                // Apply scrolled class for background effect
                if (currentScrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                    navbar.classList.remove('nav-hidden');
                    lastScrollY = currentScrollY;
                    ticking = false;
                    return;
                }

                // Determine scroll direction and apply appropriate class
                if (currentScrollY > lastScrollY) {
                    // Scrolling DOWN - hide navbar
                    navbar.classList.add('nav-hidden');
                } else {
                    // Scrolling UP - show navbar
                    navbar.classList.remove('nav-hidden');
                }

                // Update last scroll position
                lastScrollY = currentScrollY;
                ticking = false;
            });

            ticking = true;
        }
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.body.classList.add('menu-open');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active');
            navbar.classList.remove('nav-hidden');
        });
    }

    // Mobile menu close
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            document.body.classList.remove('menu-open');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        });
    }

    // Mobile dropdown toggles
    if (mobileDropdownToggles.length > 0) {
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const parent = this.parentElement;
                const dropdownMenu = parent.querySelector('.mobile-dropdown-menu');

                // Close other open dropdowns
                document.querySelectorAll('.mobile-dropdown.active').forEach(dropdown => {
                    if (dropdown !== parent) {
                        dropdown.classList.remove('active');
                        const menu = dropdown.querySelector('.mobile-dropdown-menu');
                        if (menu) menu.style.maxHeight = '0px';
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
    }
});
