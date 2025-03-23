// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate SVG curved lines dynamically
    const curvedLinesContainer = document.querySelector('.curved-lines');
    
    if (curvedLinesContainer) {
        // Define the same paths that were in the HTML
        const curvePaths = [
            { y: 500, controlY: 350, class: 'line1' },
            { y: 400, controlY: 250, class: 'line2' },
            { y: 600, controlY: 450, class: 'line3' },
            { y: 300, controlY: 150, class: 'line4' },
            { y: 700, controlY: 550, class: 'line5' },
            { y: 200, controlY: 50, class: 'line6' },
            { y: 800, controlY: 650, class: 'line7' },
            { y: 100, controlY: -50, class: 'line8' }
        ];
        
        // Create SVG elements dynamically
        curvePaths.forEach(curve => {
            // Create SVG element
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', `curved-line ${curve.class}`);
            svg.setAttribute('viewBox', '0 0 1000 1000');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            
            // Create path element
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M0,${curve.y} Q250,${curve.controlY} 500,${curve.y} T1000,${curve.y}`);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-width', '2');
            
            // Append path to SVG
            svg.appendChild(path);
            
            // Append SVG to container
            curvedLinesContainer.appendChild(svg);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Remove animate-on-scroll functionality
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        element.classList.remove('animate-on-scroll');
        element.classList.add('animated');
    });
    
    // Foto grid animation
    const fotoGrid = document.querySelector('.foto-grid');
    if (fotoGrid) {
        const fotoItems = fotoGrid.querySelectorAll('.foto-item');
        
        // Show all items immediately instead of on scroll
        fotoItems.forEach((item, index) => {
            item.classList.add('animated');
        });
    }
    
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
    
    // Pengurus section stat numbers counter animation
    if (pengurusSection) {
        const statNumbers = pengurusSection.querySelectorAll('.stat-number');
        let animated = false;
        
        // Create an intersection observer to detect when the pengurus section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    // Start counter animation for each stat number
                    statNumbers.forEach(statNumber => {
                        const target = parseInt(statNumber.getAttribute('data-target'));
                        let count = 0;
                        const duration = 2000; // Animation duration in milliseconds
                        const frameDuration = 1000 / 60; // 60fps
                        const totalFrames = Math.ceil(duration / frameDuration);
                        const increment = target / totalFrames;
                        
                        // Use requestAnimationFrame for smooth animation
                        const animate = () => {
                            count += increment;
                            if (count < target) {
                                statNumber.innerText = Math.floor(count);
                                requestAnimationFrame(animate);
                            } else {
                                statNumber.innerText = target;
                            }
                        };
                        
                        animate();
                    });
                    
                    animated = true;
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3 // Trigger when 30% of the section is visible
        });
        
        observer.observe(pengurusSection);
    }
    
    // Interactive Background with Mouse Movement and Scroll Rotation
    const backgroundContainer = document.querySelector('.background-container');
    const curvedLines = document.querySelector('.curved-lines');
    
    if (backgroundContainer && curvedLines) {
        // Set initial transform to prevent issues with combining transforms later
        curvedLines.style.transform = 'translate(0px, 0px) rotate(0deg)';
        
        // Use requestAnimationFrame for better performance
        let ticking = false;
        let lastScrollY = window.scrollY;
        let scrollRotation = 0;
        let moveX = 0;
        let moveY = 0;
        
        // Optimize by using a single RAF loop for all animations
        function updateBackgroundEffects() {
            // Apply all transforms at once
            curvedLines.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${scrollRotation}deg)`;
            ticking = false;
        }
        
        // Throttled mouse movement handler - more efficient
        document.addEventListener('mousemove', function(e) {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Calculate movement with reduced calculations
                    moveX = (e.clientX / window.innerWidth - 0.5) * 20; // -10px to +10px
                    moveY = (e.clientY / window.innerHeight - 0.5) * 20; // -10px to +10px
                    updateBackgroundEffects();
                });
                ticking = true;
            }
        }, { passive: true }); // Add passive flag for better performance
        
        // Throttled scroll handler - more efficient
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Calculate rotation based on scroll position
                    const scrollPosition = window.scrollY;
                    const scrollDelta = scrollPosition - lastScrollY;
                    lastScrollY = scrollPosition;
                    
                    // Accumulate rotation based on scroll direction and speed, but much slower
                    scrollRotation += scrollDelta * 0.02; // Reduced from 0.05 to 0.02
                    
                    // Parallax effect on scroll - make this much more subtle
                    backgroundContainer.style.transform = `translateY(${scrollPosition * 0.03}px)`; // Reduced from 0.05 to 0.03
                    
                    updateBackgroundEffects();
                });
                ticking = true;
            }
        }, { passive: true }); // Add passive flag for better performance
        
        // Simplified autonomous movement with reduced calculations
        let lastTime = 0;
        let targetX = 0;
        let targetY = 0;
        let animationFrameId = null;
        
        function autonomousMovement(timestamp) {
            // Only update every 200ms instead of every 100ms
            if (timestamp - lastTime > 200) {
                lastTime = timestamp;
                
                // Only occasionally set a new target (less frequently)
                if (Math.random() < 0.005) { // Reduced from 0.01 to 0.005
                    targetX = (Math.random() - 0.5) * 8; // Reduced from 10 to 8
                    targetY = (Math.random() - 0.5) * 8; // Reduced from 10 to 8
                }
                
                // Only apply autonomous movement if there's no user interaction
                if (Math.abs(moveX) < 1 && Math.abs(moveY) < 1) {
                    moveX += (targetX - moveX) * 0.005; // Reduced from 0.01 to 0.005
                    moveY += (targetY - moveY) * 0.005; // Reduced from 0.01 to 0.005
                    
                    if (!ticking) {
                        requestAnimationFrame(updateBackgroundEffects);
                        ticking = true;
                    }
                }
            }
            
            // Use requestAnimationFrame with a throttled callback
            animationFrameId = requestAnimationFrame(autonomousMovement);
        }
        
        // Start autonomous movement
        animationFrameId = requestAnimationFrame(autonomousMovement);
        
        // Clean up animation frame on page unload to prevent memory leaks
        window.addEventListener('beforeunload', () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
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
    
    // Animate the periode divider when scrolling to the section
    function animatePeriodeDivider() {
        const periodeDivider = document.querySelector('.periode-divider-container');
        if (!periodeDivider) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    periodeDivider.classList.add('animate');
                    periodeDivider.classList.remove('exit');
                } else {
                    // When scrolling away from the section
                    if (periodeDivider.classList.contains('animate')) {
                        periodeDivider.classList.remove('animate');
                        periodeDivider.classList.add('exit');
                    }
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -20% 0px' });

        observer.observe(document.querySelector('#periode'));
        
        // Also observe the next section to ensure exit animation works
        const pengurusSection = document.querySelector('#pengurus');
        if (pengurusSection) {
            const exitObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        periodeDivider.classList.remove('animate');
                        periodeDivider.classList.add('exit');
                    }
                });
            }, { threshold: 0.2, rootMargin: '-20% 0px 0px 0px' });
            
            exitObserver.observe(pengurusSection);
        }
    }

    // Initialize all animations
    animatePeriodeDivider();
    
    // Sorotan section glass box effects
    const sorotanSection = document.getElementById('sorotan');
    const glassBoxes = document.querySelectorAll('.sorotan-glass-box');
    
    if (sorotanSection && glassBoxes.length > 0) {
        // Add parallax effect to glass boxes on mouse move
        sorotanSection.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            glassBoxes.forEach((box, index) => {
                // Different movement intensity for each box
                const offsetX = (mouseX - 0.5) * (10 + index * 5);
                const offsetY = (mouseY - 0.5) * (10 + index * 5);
                
                // Apply subtle transform with hardware acceleration
                box.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.0${index * 0.01})`;
            });
        }, { passive: true });
        
        // Reset position when mouse leaves the section
        sorotanSection.addEventListener('mouseleave', function() {
            glassBoxes.forEach(box => {
                box.style.transform = 'translate3d(0, 0, 0)';
            });
        }, { passive: true });
        
        // Animate boxes on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate each box with a delay
                    glassBoxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.opacity = '1';
                            box.style.transform = 'translateY(0)';
                        }, 200 * index);
                    });
                    
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(sorotanSection);
        
        // Initialize glass boxes with starting styles
        glassBoxes.forEach(box => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(30px)';
            box.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    }
});