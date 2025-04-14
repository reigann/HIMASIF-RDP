// Tentang HIMASIF page animations with GSAP
console.log('tentang-himasif.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded in tentang-himasif.js');

    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded');
        return;
    }

    console.log('GSAP is loaded:', gsap.version);

    // Get landing section with new ID
    const landingSection = document.getElementById('landing-tentang-himasif');
    const tentangText = document.querySelector('.tentang-text');
    const himasifText = document.querySelector('.himasif-text');
    const bgImage = document.querySelector('.background-container img');

    if (!landingSection) {
        console.error('Landing section not found');
        return;
    }

    console.log('Landing section found:', landingSection);

    // Create animated overlay elements
    const overlay = document.createElement('div');
    overlay.className = 'animated-overlay position-absolute top-0 start-0 w-100 h-100';
    overlay.style.zIndex = '2';
    overlay.style.pointerEvents = 'none';
    document.querySelector('.background-container').appendChild(overlay);

    // Create animated elements
    const createAnimatedElements = () => {
        // Clear previous elements
        while (overlay.firstChild) {
            overlay.removeChild(overlay.firstChild);
        }

        // Create multiple animated elements
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'animated-element position-absolute';

            // Random size between 50px and 200px
            const size = 50 + Math.random() * 150;

            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;

            // Random opacity
            const opacity = 0.05 + Math.random() * 0.15;

            element.style.cssText = `
                left: ${left}%;
                top: ${top}%;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: radial-gradient(circle at center, rgba(255, 255, 255, ${opacity + 0.1}) 0%, rgba(255, 255, 255, ${opacity}) 50%, rgba(255, 255, 255, 0) 100%);
                filter: blur(${5 + Math.random() * 10}px);
                opacity: ${opacity};
                transform: scale(0);
            `;

            overlay.appendChild(element);

            // Animate with GSAP
            gsap.to(element, {
                scale: 1 + Math.random() * 1.5,
                opacity: opacity * (0.5 + Math.random() * 1),
                duration: 5 + Math.random() * 10,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 5
            });

            // Also animate position slightly
            gsap.to(element, {
                x: -50 + Math.random() * 100,
                y: -50 + Math.random() * 100,
                duration: 15 + Math.random() * 20,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 5
            });
        }
    };

    // Create initial animated elements
    createAnimatedElements();

    // Recreate on window resize
    window.addEventListener('resize', createAnimatedElements);

    // Add subtle parallax effect to background
    if (bgImage) {
        gsap.to(bgImage, {
            scale: 1.05,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Text animations with GSAP
    if (tentangText && himasifText) {
        // Initial animations
        gsap.from(tentangText, {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        gsap.from(himasifText, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            delay: 0.3,
            ease: 'power3.out'
        });

        // Mouse interaction with GSAP
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        // Track mouse position
        landingSection.addEventListener('mousemove', function(e) {
            targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        });

        // Smooth mouse following
        const updateMousePosition = () => {
            // Smooth transition to target position
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            // Apply to text elements with parallax effect
            gsap.set(tentangText, {
                x: mouseX * 20,
                y: mouseY * 10
            });

            gsap.set(himasifText, {
                x: mouseX * 10,
                y: mouseY * 5
            });

            // Subtle movement of background image
            if (bgImage) {
                gsap.set(bgImage, {
                    x: mouseX * -5,
                    y: mouseY * -5
                });
            }

            requestAnimationFrame(updateMousePosition);
        };

        // Start mouse interaction animation
        updateMousePosition();

        // Reset position when mouse leaves
        landingSection.addEventListener('mouseleave', function() {
            gsap.to([tentangText, himasifText], {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });

            if (bgImage) {
                gsap.to(bgImage, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out'
                });
            }
        });
    }
});