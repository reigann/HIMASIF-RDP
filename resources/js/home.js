document.addEventListener('DOMContentLoaded', function() {
    // Generate SVG curved lines dynamically
    const curvedLinesContainer = document.querySelector('.curved-lines');
    if (curvedLinesContainer) {
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
        
        curvePaths.forEach(curve => {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', `curved-line ${curve.class}`);
            svg.setAttribute('viewBox', '0 0 1000 1000');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M0,${curve.y} Q250,${curve.controlY} 500,${curve.y} T1000,${curve.y}`);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-width', '2');
            svg.appendChild(path);
            curvedLinesContainer.appendChild(svg);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Interactive Background with Mouse Movement and Scroll Rotation
    const backgroundContainer = document.querySelector('.background-container');
    const curvedLines = document.querySelector('.curved-lines');
    if (backgroundContainer && curvedLines) {
        curvedLines.style.transform = 'translate(0px, 0px) rotate(0deg)';
        let moveX = 0, moveY = 0, scrollRotation = 0, lastScrollY = window.scrollY;

        function updateBackgroundEffects() {
            curvedLines.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${scrollRotation}deg)`;
        }

        document.addEventListener('mousemove', function(e) {
            requestAnimationFrame(() => {
                moveX = (e.clientX / window.innerWidth - 0.5) * 20;
                moveY = (e.clientY / window.innerHeight - 0.5) * 20;
                updateBackgroundEffects();
            });
        }, { passive: true });

        window.addEventListener('scroll', function() {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;
                const scrollDelta = scrollPosition - lastScrollY;
                lastScrollY = scrollPosition;
                scrollRotation += scrollDelta * 0.02;
                backgroundContainer.style.transform = `translateY(${scrollPosition * 0.03}px)`;
                updateBackgroundEffects();
            });
        }, { passive: true });
    }

    // Scroll Indicator Animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const mouse = document.querySelector('.mouse');
    const wheel = document.querySelector('.wheel');
    if (scrollIndicator && mouse && wheel) {
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'mouse-particle';
            particle.style.animationDelay = `${i * 0.3}s`;
            mouse.appendChild(particle);
        }
        const glow = document.createElement('div');
        glow.className = 'mouse-glow';
        mouse.appendChild(glow);

        wheel.animate([
            { top: '10px', opacity: 1 },
            { top: '35px', opacity: 0 }
        ], { duration: 1500, iterations: Infinity });

        mouse.animate([
            { transform: 'scale(1)', boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
            { transform: 'scale(1.05)', boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' },
            { transform: 'scale(1)', boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }
        ], { duration: 2000, iterations: Infinity });

        glow.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], { duration: 8000, iterations: Infinity });

        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('#foto');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        scrollIndicator.addEventListener('mouseenter', function() {
            mouse.style.transform = 'scale(1.1)';
            mouse.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
        });

        scrollIndicator.addEventListener('mouseleave', function() {
            mouse.style.transform = 'scale(1)';
            mouse.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
        });
    }

    // Periode Divider Animation
    const periodeDivider = document.querySelector('.periode-divider-container');
    if (periodeDivider) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    periodeDivider.classList.add('animate');
                } else {
                    periodeDivider.classList.remove('animate');
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -20% 0px'
        });
        observer.observe(document.querySelector('.periode-divider-section'));
    }

    // Divider Lines Animation
    const dividerContainer = document.querySelector('.periode-divider-container');
    if (dividerContainer) {
        const dividerLines = document.createElement('div');
        dividerLines.className = 'divider-lines';

        // Create multiple lines
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'divider-line';
            dividerLines.appendChild(line);
        }

        dividerContainer.appendChild(dividerLines);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dividerContainer.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(dividerContainer);
    }

    // Remove Divider Lines Animation
    // Removed logic for creating and animating small lines in the divider section

    // Total Pengurus Section Animation
    const pengurusSection = document.getElementById('pengurus');
    if (pengurusSection) {
        const statNumbers = pengurusSection.querySelectorAll('.stat-number');
        const pengurusTitle = pengurusSection.querySelector('.pengurus-title');
        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    // Animate title
                    pengurusTitle.style.opacity = '0';
                    pengurusTitle.style.transform = 'translateY(50px)';
                    requestAnimationFrame(() => {
                        pengurusTitle.classList.add('animate');
                        pengurusTitle.style.opacity = '1';
                        pengurusTitle.style.transform = 'translateY(0)';
                    });

                    // Animate stat numbers
                    statNumbers.forEach(statNumber => {
                        const target = parseInt(statNumber.getAttribute('data-target'));
                        let count = 0;
                        const duration = 1000; // Smoother duration
                        const frameDuration = 1000 / 60; // 60fps
                        const totalFrames = Math.ceil(duration / frameDuration);
                        const increment = target / totalFrames;

                        const animate = (timestamp) => {
                            count += increment;
                            if (count < target) {
                                statNumber.textContent = Math.round(count);
                                requestAnimationFrame(animate);
                            } else {
                                statNumber.textContent = target;
                            }
                        };
                        requestAnimationFrame(animate);
                    });

                    animated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        observer.observe(pengurusSection);
    }

    // Galeri Section Hover Effect
    const galeriImageWrapper = document.querySelector('.galeri-image-wrapper');
    if (galeriImageWrapper) {
        galeriImageWrapper.addEventListener('mouseenter', () => {
            galeriImageWrapper.style.transform = 'scale(1.02)';
            galeriImageWrapper.style.boxShadow = '0 10px 60px #0004ff33';
        });
        galeriImageWrapper.addEventListener('mouseleave', () => {
            galeriImageWrapper.style.transform = 'scale(1)';
            galeriImageWrapper.style.boxShadow = '0 5px 50px #0004ff1c';
        });
    }

    // Sorotan Section Glass Box Effects
    const sorotanSection = document.getElementById('sorotan');
    const glassBoxes = document.querySelectorAll('.sorotan-glass-box');
    if (sorotanSection && glassBoxes.length > 0) {
        sorotanSection.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            glassBoxes.forEach((box, index) => {
                const offsetX = (mouseX - 0.5) * (10 + index * 5);
                const offsetY = (mouseY - 0.5) * (10 + index * 5);
                box.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.0${index * 0.01})`;
            });
        }, { passive: true });

        sorotanSection.addEventListener('mouseleave', function() {
            glassBoxes.forEach(box => {
                box.style.transform = 'translate3d(0, 0, 0)';
            });
        }, { passive: true });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    glassBoxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.opacity = '1';
                            box.style.transform = 'translateY(0)';
                        }, 200 * index);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(sorotanSection);

        glassBoxes.forEach(box => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(30px)';
            box.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    }
});