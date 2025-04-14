document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined') {
        console.log('GSAP is loaded');
        if (gsap.registerPlugin) {
            try {
                if (typeof MotionPathPlugin !== 'undefined') gsap.registerPlugin(MotionPathPlugin);
                if (typeof CustomEase !== 'undefined') gsap.registerPlugin(CustomEase);
                console.log('GSAP plugins registered');
            } catch (e) {
                console.warn('Error registering GSAP plugins:', e);
            }
        }
    } else {
        console.warn('GSAP is not loaded');
    }

    // 3D Liquid Background Animation - Simplified version without post-processing
    const initLiquidBackground = () => {
        // Check if Three.js is available
        if (typeof THREE === 'undefined') {
            console.warn('Three.js is not loaded');
            return;
        }

        console.log('Initializing liquid background');
        const canvas = document.getElementById('liquid-canvas');
        if (!canvas) {
            console.warn('Canvas element not found');
            return;
        }

        try {
            // Initialize Three.js scene
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: true
            });

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Set renderer size and pixel ratio
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Create irregular droplet shape geometry
            // Use sphere as base and modify vertices for droplet shape
            const geometry = new THREE.SphereGeometry(1.5, 128, 128); // High detail for smooth morphing

            // Create white to light green shifting glass material
            const material = new THREE.MeshPhysicalMaterial({
                color: 0xFFFFFF,      // White base color
                transparent: true,
                opacity: 0.85,          // High opacity for better visibility
                metalness: 0.1,         // Low metalness for glass look
                roughness: 0.05,        // Very smooth for glass look
                transmission: 0.9,      // High transmission for glass effect
                thickness: 0.5,         // Glass thickness
                envMapIntensity: 1.2,   // For reflections
                clearcoat: 1.0,         // Clear coat for extra shine
                clearcoatRoughness: 0.03,
                side: THREE.DoubleSide,
                flatShading: false,     // Smooth shading for glass
                emissive: 0x88FF88,     // Light green emissive glow
                emissiveIntensity: 0.3  // Moderate glow
            });

            // We'll use color shifting in the animation loop to transition between white and light green

            // Create main blob mesh
            const blob = new THREE.Mesh(geometry, material);
            scene.add(blob);

            // Create additional abstract glass elements
            const smallBlobs = [];
            const smallBlobsCount = 8; // More elements for richer scene

            // Array of different geometry types for variety
            const geometryTypes = [
                () => new THREE.TetrahedronGeometry(0.4 + Math.random() * 0.3, 2),  // Tetrahedron
                () => new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4, 2),    // Octahedron
                () => new THREE.DodecahedronGeometry(0.3 + Math.random() * 0.3, 1),  // Dodecahedron
                () => new THREE.TorusGeometry(0.3, 0.1, 16, 32),                    // Torus (ring)
                () => new THREE.BoxGeometry(0.4, 0.4, 0.4, 2, 2, 2)                  // Cube
            ];

            // Array of white and light green colors
            const colors = [
                0xFFFFFF,  // White
                0xF0FFF0,  // Honeydew (very light green)
                0xE0FFE0,  // Lighter green
                0xCCFFCC,  // Light green
                0x88FF88   // Medium light green
            ];

            for (let i = 0; i < smallBlobsCount; i++) {
                // Select random geometry type
                const geometryCreator = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
                const smallGeometry = geometryCreator();

                // Create white to light green glass material
                const color = colors[Math.floor(Math.random() * colors.length)];
                const smallMaterial = new THREE.MeshPhysicalMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.85,                     // High opacity for better visibility
                    metalness: 0.1,                    // Low metalness for glass look
                    roughness: 0.05,                   // Very smooth for glass look
                    transmission: 0.9,                 // High transmission for glass effect
                    thickness: 0.3,
                    clearcoat: 1.0,                    // Glossy coating
                    clearcoatRoughness: 0.03,
                    side: THREE.DoubleSide,
                    flatShading: false,                // Smooth shading for glass look
                    emissive: 0x88FF88,                // Light green emissive glow
                    emissiveIntensity: 0.2 + Math.random() * 0.2  // Varying glow intensity
                });

                // Create mesh and position in 3D space around main blob
                const smallBlob = new THREE.Mesh(smallGeometry, smallMaterial);

                // Position in 3D space with more variation
                const angle = Math.random() * Math.PI * 2;
                const radius = 2.5 + Math.random() * 2;
                const height = (Math.random() - 0.5) * 3; // More vertical variation

                smallBlob.position.x = Math.cos(angle) * radius;
                smallBlob.position.y = Math.sin(angle) * radius;
                smallBlob.position.z = height;

                // Random initial rotation
                smallBlob.rotation.x = Math.random() * Math.PI;
                smallBlob.rotation.y = Math.random() * Math.PI;
                smallBlob.rotation.z = Math.random() * Math.PI;

                // Add to scene and store reference
                scene.add(smallBlob);
                smallBlobs.push({
                    mesh: smallBlob,
                    originalPosition: {
                        x: smallBlob.position.x,
                        y: smallBlob.position.y,
                        z: smallBlob.position.z
                    },
                    speed: 0.3 + Math.random() * 0.7,  // More variation in speed
                    angle: angle,
                    radius: radius,
                    verticalSpeed: 0.1 + Math.random() * 0.4,
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.02,
                        y: (Math.random() - 0.5) * 0.02,
                        z: (Math.random() - 0.5) * 0.02
                    }
                });
            }

            // Enhanced lighting for glass effect
            // Ambient light for base illumination
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            scene.add(ambientLight);

            // Directional light for main illumination
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            // Colored point lights for interesting reflections
            const pointLight1 = new THREE.PointLight(0x4fc3dc, 2, 10);
            pointLight1.position.set(2, 3, 4);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff2d75, 2, 10);
            pointLight2.position.set(-2, -3, 4);
            scene.add(pointLight2);

            // Additional subtle lights
            const pointLight3 = new THREE.PointLight(0x0047AB, 1, 15);
            pointLight3.position.set(-5, 0, -5);
            scene.add(pointLight3);

            // Create environment map for realistic reflections
            const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
            cubeRenderTarget.texture.type = THREE.HalfFloatType;

            // Create a blue gradient background
            const bgCanvas = document.createElement('canvas');
            bgCanvas.width = 2;
            bgCanvas.height = 2;

            const bgContext = bgCanvas.getContext('2d');
            const bgGradient = bgContext.createLinearGradient(0, 0, 0, 2);
            bgGradient.addColorStop(0, '#0047AB'); // Cobalt blue (top)
            bgGradient.addColorStop(0.5, '#0073CF'); // Medium blue (middle)
            bgGradient.addColorStop(1, '#00529B'); // Darker blue (bottom)

            bgContext.fillStyle = bgGradient;
            bgContext.fillRect(0, 0, 2, 2);

            const bgTexture = new THREE.CanvasTexture(bgCanvas);
            bgTexture.wrapS = THREE.RepeatWrapping;
            bgTexture.wrapT = THREE.RepeatWrapping;
            bgTexture.repeat.set(1, 1);

            scene.background = bgTexture;

            // Mouse movement tracking
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            });

            // Create droplet shape and store original positions
            const dropletPositionAttribute = geometry.attributes.position;
            const dropletOriginalPositions = [];

            // Store original positions and modify for droplet shape
            for (let i = 0; i < dropletPositionAttribute.count; i++) {
                const x = dropletPositionAttribute.getX(i);
                const y = dropletPositionAttribute.getY(i);
                const z = dropletPositionAttribute.getZ(i);

                // Store original
                dropletOriginalPositions.push({ x, y, z });

                // Create droplet shape - elongate bottom and make top more rounded
                const length = Math.sqrt(x*x + y*y + z*z);
                const normalizedY = y / length;

                // Elongate bottom part (negative y)
                let factor = 1.0;
                if (normalizedY < -0.2) {
                    // Gradually elongate more toward the bottom
                    factor = 1.0 + Math.pow(-normalizedY - 0.2, 2) * 1.5;
                }

                // Add some random variation for irregular shape
                const noise = Math.sin(x * 10) * 0.03 + Math.sin(y * 8) * 0.03 + Math.sin(z * 12) * 0.03;

                // Apply droplet shape transformation
                dropletPositionAttribute.setX(i, x * factor * (1 + noise));
                dropletPositionAttribute.setY(i, y * factor);
                dropletPositionAttribute.setZ(i, z * factor * (1 + noise));
            }

            // Update geometry
            dropletPositionAttribute.needsUpdate = true;

            // Animation loop with enhanced interactivity
            const animate = () => {
                requestAnimationFrame(animate);

                // Current time for animations
                const time = Date.now() * 0.0005;

                // Enhanced smooth follow for mouse movement
                targetX += (mouseX - targetX) * 0.03; // Slower follow for smoother effect
                targetY += (mouseY - targetY) * 0.03;

                // Calculate cursor intensity (stronger when closer to center)
                const cursorDistance = Math.sqrt(targetX * targetX + targetY * targetY);
                const cursorIntensity = Math.max(0, 1 - cursorDistance * 0.5);

                // Rotate main blob with mouse influence
                blob.rotation.x = time * 0.3 + targetY * 0.5;
                blob.rotation.y = time * 0.2 + targetX * 0.5;

                // Move main blob slightly based on mouse position
                blob.position.x = targetX * 0.7;
                blob.position.y = targetY * 0.7;

                // Pulse effect based on cursor proximity
                const pulseFactor = 1 + cursorIntensity * 0.1 * Math.sin(time * 5);
                blob.scale.set(pulseFactor, pulseFactor, pulseFactor);

                // Color shift effect from white to light green
                const colorPulse = Math.sin(time * 2) * 0.5 + 0.5; // 0 to 1 pulsing value
                const whiteColor = new THREE.Color(0xFFFFFF);
                const lightGreenColor = new THREE.Color(0x88FF88);
                const mixedColor = new THREE.Color().lerpColors(whiteColor, lightGreenColor, colorPulse);

                // Update material colors
                material.color.copy(mixedColor);
                material.emissiveIntensity = 0.2 + colorPulse * 0.3; // Increase glow with green shift

                // Animate vertices for water droplet effect
                for (let i = 0; i < dropletPositionAttribute.count; i++) {
                    const px = dropletOriginalPositions[i].x;
                    const py = dropletOriginalPositions[i].y;
                    const pz = dropletOriginalPositions[i].z;

                    // Calculate length for normalization
                    const length = Math.sqrt(px * px + py * py + pz * pz);

                    // Get normalized position for shape-specific effects
                    const normalizedY = py / length;

                    // Base droplet shape factor
                    let shapeFactor = 1.0;
                    if (normalizedY < -0.2) {
                        // Elongate bottom part (teardrop shape)
                        shapeFactor = 1.0 + Math.pow(-normalizedY - 0.2, 2) * 1.5;
                    }

                    // Surface tension waves - more pronounced at the bottom
                    const tensionFactor = Math.max(0, -normalizedY) * 0.5; // Stronger at bottom

                    // Enhanced multi-layered noise for water-like surface tension
                    const noise1 = Math.sin(length * 4 + time * 1.0) * 0.04 * tensionFactor;
                    const noise2 = Math.sin(px * 3 + py * 2 + time * 1.8) * 0.03 * tensionFactor;
                    const noise3 = Math.sin(py * 4 + pz * 3 + time * 2.2) * 0.03 * tensionFactor;
                    const noise4 = Math.sin(pz * 5 + px * 2 + time * 1.5) * 0.03 * tensionFactor;

                    // Higher frequency ripples for surface detail
                    const ripple1 = Math.sin(length * 20 + time * 5.0) * 0.01 * tensionFactor;
                    const ripple2 = Math.sin(Math.atan2(pz, px) * 15 + time * 4) * 0.01 * tensionFactor;

                    // Combine noise patterns
                    const combinedNoise = noise1 + noise2 + noise3 + noise4 + ripple1 + ripple2;

                    // Apply cursor influence - create ripple effect from cursor
                    // Calculate distance from cursor for ripple effect
                    const distFromCursor = Math.sqrt(Math.pow(px - targetX*2, 2) + Math.pow(py - targetY*2, 2));

                    // Ripple effect that spreads from cursor position
                    const cursorRipple = Math.sin(distFromCursor * 8 - time * 10) *
                                        Math.exp(-distFromCursor * 1.5) * // Fade with distance
                                        cursorIntensity * 0.2;

                    // Attraction/repulsion effect based on cursor
                    const attractFactor = cursorIntensity * 0.1 * (1 / (distFromCursor + 0.5));
                    const attractX = (px - targetX*2) * attractFactor;
                    const attractY = (py - targetY*2) * attractFactor;
                    const attractZ = pz * attractFactor * 0.5;

                    // Calculate final distortion
                    const distortion = 1 + combinedNoise + cursorRipple;

                    // Apply vertex distortion with droplet shape and cursor interaction
                    dropletPositionAttribute.setX(i, px * shapeFactor * distortion - attractX);
                    dropletPositionAttribute.setY(i, py * shapeFactor * distortion - attractY);
                    dropletPositionAttribute.setZ(i, pz * shapeFactor * distortion - attractZ);
                }

                dropletPositionAttribute.needsUpdate = true;

                // Animate small abstract elements with enhanced interactivity
                smallBlobs.forEach((smallBlob, index) => {
                    // Orbit animation with varying speeds
                    smallBlob.angle += 0.003 * smallBlob.speed;

                    // Calculate base orbital position
                    const orbitX = Math.cos(smallBlob.angle) * smallBlob.radius;
                    const orbitY = Math.sin(smallBlob.angle) * smallBlob.radius;

                    // Calculate distance to cursor for magnetic effect
                    const dx = orbitX - targetX * 3; // Amplify cursor position for stronger effect
                    const dy = orbitY - targetY * 3;
                    const distToCursor = Math.sqrt(dx * dx + dy * dy);

                    // Magnetic repulsion/attraction effect
                    // Elements are pushed away or pulled toward cursor based on index
                    const repulsionStrength = (index % 2 === 0) ? 2 : -1.5; // Some attract, some repel
                    const repulsionFactor = Math.min(5, 10 / (distToCursor + 0.1)) * repulsionStrength;

                    // Calculate repulsion/attraction vector
                    let repulsionX = 0, repulsionY = 0;
                    if (distToCursor > 0.1) { // Avoid division by zero
                        repulsionX = (dx / distToCursor) * repulsionFactor;
                        repulsionY = (dy / distToCursor) * repulsionFactor;
                    }

                    // Update position with orbital motion + cursor interaction
                    smallBlob.mesh.position.x = orbitX + repulsionX * cursorIntensity;
                    smallBlob.mesh.position.y = orbitY + repulsionY * cursorIntensity;

                    // Vertical motion with wave pattern
                    smallBlob.mesh.position.z = smallBlob.originalPosition.z +
                        Math.sin(time * 8 * smallBlob.verticalSpeed + index) * 0.4;

                    // Enhanced rotation with custom speeds and cursor influence
                    smallBlob.mesh.rotation.x += smallBlob.rotationSpeed.x + cursorIntensity * 0.01;
                    smallBlob.mesh.rotation.y += smallBlob.rotationSpeed.y + cursorIntensity * 0.01;
                    smallBlob.mesh.rotation.z += smallBlob.rotationSpeed.z;

                    // Scale pulsing effect with phase offset for each element
                    const pulsePhase = time * 3 + index * 0.8;
                    const scaleFactor = 1 + Math.sin(pulsePhase) * 0.15;
                    smallBlob.mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

                    // Change opacity based on cursor proximity for extra interactivity
                    if (smallBlob.mesh.material.opacity !== undefined) {
                        const baseOpacity = 0.7 + Math.random() * 0.3;
                        const opacityFactor = baseOpacity + cursorIntensity * 0.2 * Math.sin(pulsePhase);
                        smallBlob.mesh.material.opacity = Math.min(1, Math.max(0.4, opacityFactor));
                    }
                });

                // Render scene
                renderer.render(scene, camera);
            };

            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Start animation
            animate();
            console.log('Liquid background animation started');
        } catch (error) {
            console.error('Error initializing liquid background:', error);
        }
    };

    // Initialize liquid background
    initLiquidBackground();

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

    // Copyright animation removed as requested

    // Background animations removed as requested

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

                    // Animate stat numbers with super smooth slide up effect
                    statNumbers.forEach(statNumber => {
                        const target = parseInt(statNumber.getAttribute('data-target'));
                        const originalFontSize = window.getComputedStyle(statNumber).fontSize;
                        const originalHeight = statNumber.offsetHeight;

                        // Clear the content
                        statNumber.textContent = '';

                        // Create a wrapper with fixed height
                        const wrapper = document.createElement('div');
                        wrapper.style.height = originalHeight + 'px';
                        wrapper.style.position = 'relative';
                        wrapper.style.overflow = 'hidden';
                        statNumber.appendChild(wrapper);

                        // Create a smooth counter using GSAP-like animation
                        let currentValue = 0;
                        const counterElement = document.createElement('div');
                        counterElement.style.height = '100%';
                        counterElement.style.width = '100%';
                        counterElement.style.display = 'flex';
                        counterElement.style.justifyContent = 'center';
                        counterElement.style.alignItems = 'center';
                        counterElement.style.fontSize = originalFontSize;
                        counterElement.style.fontFamily = 'GTBlack, sans-serif';
                        counterElement.textContent = '0';
                        wrapper.appendChild(counterElement);

                        // Create a hidden element for the next number (for slide up effect)
                        const nextElement = document.createElement('div');
                        nextElement.style.height = '100%';
                        nextElement.style.width = '100%';
                        nextElement.style.display = 'flex';
                        nextElement.style.justifyContent = 'center';
                        nextElement.style.alignItems = 'center';
                        nextElement.style.fontSize = originalFontSize;
                        nextElement.style.fontFamily = 'GTBlack, sans-serif';
                        nextElement.style.position = 'absolute';
                        nextElement.style.top = '100%';
                        nextElement.style.left = '0';
                        nextElement.textContent = '1';
                        wrapper.appendChild(nextElement);

                        // Animation variables
                        const duration = 1000; // 1 second total duration
                        const startTime = performance.now();

                        // Smooth animation function
                        function animate(timestamp) {
                            const elapsed = timestamp - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Easing function for smooth animation (ease-in-out)
                            const easedProgress = progress < 0.5 ?
                                2 * progress * progress :
                                1 - Math.pow(-2 * progress + 2, 2) / 2;

                            // Calculate current value based on progress
                            const newValue = Math.floor(easedProgress * target);

                            // If the value has changed, update the display
                            if (newValue !== currentValue) {
                                // Update current value
                                currentValue = newValue;

                                // Update the counter text
                                counterElement.textContent = currentValue;

                                // Update next element text
                                nextElement.textContent = currentValue + 1;

                                // Apply slide up animation
                                counterElement.style.transition = 'transform 0.15s ease-out';
                                nextElement.style.transition = 'transform 0.15s ease-out';

                                counterElement.style.transform = 'translateY(-100%)';
                                nextElement.style.transform = 'translateY(-100%)';

                                // After transition completes, reset positions
                                setTimeout(() => {
                                    counterElement.style.transition = 'none';
                                    nextElement.style.transition = 'none';

                                    counterElement.style.transform = '';
                                    nextElement.style.transform = '';

                                    counterElement.textContent = currentValue;
                                    nextElement.textContent = currentValue + 1;
                                }, 150);
                            }

                            // Continue animation if not complete
                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                // Animation complete, set final value
                                counterElement.textContent = target;
                                nextElement.remove();
                            }
                        }

                        // Start animation
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

    // Galeri Section Hover Effect with Custom Cursor
    const galeriImageWrapper = document.querySelector('.galeri-image-wrapper');
    const customCursor = document.querySelector('.custom-cursor');

    if (galeriImageWrapper && customCursor) {
        // Track if hovering over gallery image
        let isHoveringGaleriImage = false;

        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            if (isHoveringGaleriImage) {
                customCursor.style.left = `${e.clientX}px`;
                customCursor.style.top = `${e.clientY}px`;
            }
        });

        galeriImageWrapper.addEventListener('mouseenter', () => {
            // Show custom cursor
            customCursor.style.opacity = '1';
            customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
            isHoveringGaleriImage = true;

            // Hide default cursor
            galeriImageWrapper.style.cursor = 'none';

            // Scale image slightly
            galeriImageWrapper.style.transform = 'scale(1.02)';
            galeriImageWrapper.style.boxShadow = '0 10px 60px #0004ff33';
        });

        // Add click event to navigate to gallery page
        galeriImageWrapper.addEventListener('click', () => {
            // Get the href from the galeri-kami link
            const galeriLink = document.querySelector('.galeri-kami');
            if (galeriLink && galeriLink.getAttribute('href')) {
                window.location.href = galeriLink.getAttribute('href');
            } else {
                // Fallback if link not found
                window.location.href = '/galeri';
            }
        });

        galeriImageWrapper.addEventListener('mouseleave', () => {
            // Hide custom cursor
            customCursor.style.opacity = '0';
            customCursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
            isHoveringGaleriImage = false;

            // Restore default cursor
            galeriImageWrapper.style.cursor = 'auto';

            // Reset image scale
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