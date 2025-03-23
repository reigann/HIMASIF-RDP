// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed navbar if you have one
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation class to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Counter animation for Total Pengurus section
    const counterAnimation = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                
                const increment = Math.trunc(target / speed);
                
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    };
    
    // Pengurus section counter animation
    const pengurusSection = document.getElementById('pengurus');
    
    if (pengurusSection) {
        const pengurusItems = pengurusSection.querySelectorAll('.pengurus-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start counter animation for each pengurus item
                    pengurusItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, index * 200);
                    });
                    
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(pengurusSection);
    }
    
    // Interactive Background with Mouse Movement and Scroll Rotation
    const backgroundContainer = document.querySelector('.background-container');
    const curvedLines = document.querySelector('.curved-lines');
    
    if (backgroundContainer && curvedLines) {
        // Set initial transform to prevent issues with combining transforms later
        curvedLines.style.transform = 'translate(0px, 0px) rotate(0deg)';
        
        // Variables for very slow autonomous movement
        let moveX = 0;
        let moveY = 0;
        let targetX = 0;
        let targetY = 0;
        
        // Function for very slow autonomous floating movement
        function autonomousMovement() {
            // Very slowly change target positions (only change a tiny bit each frame)
            if (Math.random() < 0.005) {
                // Only occasionally set a new target (roughly every 200 frames or ~3 seconds)
                targetX = (Math.random() - 0.5) * 10; // Small range of -5px to 5px
                targetY = (Math.random() - 0.5) * 10;
            }
            
            // Very slowly move current position toward target (0.5% per frame)
            moveX += (targetX - moveX) * 0.005;
            moveY += (targetY - moveY) * 0.005;
            
            // Get current transform values
            const currentTransform = curvedLines.style.transform;
            const translateMatch = currentTransform.match(/translate\(([-\d.]+)px, ([-\d.]+)px\)/);
            const rotationMatch = currentTransform.match(/rotate\(([-\d.]+)deg\)/);
            
            // If there's user-controlled translation, we don't want to override it
            // Only apply autonomous movement if there's no user interaction
            if (!translateMatch || (Math.abs(parseFloat(translateMatch[1])) < 1 && Math.abs(parseFloat(translateMatch[2])) < 1)) {
                const currentRotation = rotationMatch ? parseFloat(rotationMatch[1]) : 0;
                curvedLines.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${currentRotation}deg)`;
            }
            
            requestAnimationFrame(autonomousMovement);
        }
        
        // Start autonomous movement
        autonomousMovement();
        
        // Mouse movement parallax effect - make this more subtle
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Calculate movement amount (smaller value for more subtle effect)
            const moveX = (mouseX - 0.5) * 20; // -10px to +10px
            const moveY = (mouseY - 0.5) * 20; // -10px to +10px
            
            // Get current rotation if any
            const currentTransform = curvedLines.style.transform;
            const rotationMatch = currentTransform.match(/rotate\(([-\d.]+)deg\)/);
            const currentRotation = rotationMatch ? parseFloat(rotationMatch[1]) : 0;
            
            // Apply transform to curved lines with smooth transition
            curvedLines.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${currentRotation}deg)`;
        });
        
        // Scroll rotation effect - make this much slower
        let lastScrollY = window.scrollY;
        let scrollRotation = 0;
        
        window.addEventListener('scroll', function() {
            // Calculate rotation based on scroll position
            const scrollPosition = window.scrollY;
            const scrollDelta = scrollPosition - lastScrollY;
            lastScrollY = scrollPosition;
            
            // Accumulate rotation based on scroll direction and speed, but much slower
            scrollRotation += scrollDelta * 0.05; // Reduced from 0.1 to 0.05 for slower rotation
            
            // Get current transform values
            const currentTransform = curvedLines.style.transform;
            const translateMatch = currentTransform.match(/translate\(([-\d.]+)px, ([-\d.]+)px\)/);
            const translateX = translateMatch ? parseFloat(translateMatch[1]) : 0;
            const translateY = translateMatch ? parseFloat(translateMatch[2]) : 0;
            
            // Apply rotation to curved lines container while preserving translation
            curvedLines.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${scrollRotation}deg)`;
            
            // Parallax effect on scroll - make this much more subtle
            backgroundContainer.style.transform = `translateY(${scrollPosition * 0.05}px)`; // Reduced from 0.1 to 0.05
        });
    }
    
    // Scroll animation for the mouse indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const mouse = document.querySelector('.mouse');
    const wheel = document.querySelector('.wheel');
    
    // Create particles for the mouse animation
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.animationDelay = `${i * 0.3}s`;
        mouse.appendChild(particle);
    }
    
    // Add glow effect to mouse
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    mouse.appendChild(glow);
    
    // Animate wheel
    function animateWheel() {
        wheel.animate([
            { top: '10px', opacity: 1 },
            { top: '35px', opacity: 0 }
        ], {
            duration: 1500,
            iterations: Infinity
        });
    }
    
    // Pulse animation for the mouse
    function pulseMouse() {
        mouse.animate([
            { transform: 'scale(1)', boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
            { transform: 'scale(1.05)', boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' },
            { transform: 'scale(1)', boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }
        ], {
            duration: 2000,
            iterations: Infinity
        });
    }
    
    // Rotate glow effect
    function rotateGlow() {
        glow.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 8000,
            iterations: Infinity
        });
    }
    
    // Start animations
    animateWheel();
    pulseMouse();
    rotateGlow();
    
    // Smooth scroll to next section when clicking on scroll indicator
    scrollIndicator.addEventListener('click', function() {
        const nextSection = document.querySelector('#foto');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Add hover effect to scroll indicator
    scrollIndicator.addEventListener('mouseenter', function() {
        mouse.style.transform = 'scale(1.1)';
        mouse.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    });
    
    scrollIndicator.addEventListener('mouseleave', function() {
        mouse.style.transform = 'scale(1)';
        mouse.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
    });
    
    // Add scroll event to highlight sections based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('#home-page section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - 300 && scrollPosition < sectionTop + sectionHeight - 300) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });
    });
});