document.addEventListener('DOMContentLoaded', function() {
    // Wrap page content for smooth transition
    const wrapPageContent = () => {
        // Get all direct children of body except the loading elements
        const bodyChildren = Array.from(document.body.children).filter(child =>
            !child.classList.contains('loading-overlay') &&
            !child.classList.contains('circle-transition')
        );

        // Create a wrapper for all content
        const pageContent = document.createElement('div');
        pageContent.className = 'page-content';
        pageContent.style.width = '100%';
        pageContent.style.height = '100%';
        pageContent.style.position = 'absolute';
        pageContent.style.top = '0';
        pageContent.style.left = '0';
        pageContent.style.zIndex = '1'; // Ensure it's above background elements

        // Special handling for scripts and background elements
        const scripts = [];
        const backgroundElements = [];

        // Move all content into the wrapper, with special handling
        bodyChildren.forEach(child => {
            // Check if this is a script or background element
            const isScript = child.tagName === 'SCRIPT';
            const isBackgroundElement =
                child.id === 'liquid-background' ||
                child.id === 'liquid-canvas' ||
                child.classList.contains('abstract-element') ||
                child.querySelector('#liquid-canvas') !== null;

            if (isScript) {
                // Keep track of scripts to handle separately
                scripts.push(child);
                return;
            }

            if (isBackgroundElement) {
                // Keep track of background elements to handle separately
                backgroundElements.push(child);
                return;
            }

            // For regular content, clone and add to wrapper
            const clone = child.cloneNode(true);
            pageContent.appendChild(clone);

            // Hide original elements but don't remove yet
            child.style.display = 'none';
        });

        // Add the wrapper to the body
        document.body.appendChild(pageContent);

        // Don't hide background elements, they should remain visible
        backgroundElements.forEach(element => {
            // Make sure they're still visible and working
            element.style.display = '';
            element.style.zIndex = '0'; // Ensure they're behind the page content
        });

        return pageContent;
    };

    // Create page content wrapper
    const pageContent = wrapPageContent();
    // Check if GSAP is available
    const hasGSAP = typeof gsap !== 'undefined';

    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';

    // Create abstract line background
    const abstractLines = document.createElement('div');
    abstractLines.className = 'abstract-lines';

    // Create horizontal lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'abstract-line horizontal';
        line.style.top = `${Math.floor(Math.random() * 100)}%`;
        abstractLines.appendChild(line);
    }

    // Create vertical lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'abstract-line vertical';
        line.style.left = `${Math.floor(Math.random() * 100)}%`;
        abstractLines.appendChild(line);
    }

    // Create diagonal lines
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'abstract-line diagonal';
        line.style.top = `${Math.floor(Math.random() * 100)}%`;
        line.style.left = `${Math.floor(Math.random() * 100)}%`;
        line.style.transform = `rotate(${45 + Math.floor(Math.random() * 90)}deg)`;
        abstractLines.appendChild(line);
    }

    // Create loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';

    // Create loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Loading';

    // Create progress bar
    const loadingProgress = document.createElement('div');
    loadingProgress.className = 'loading-progress';

    const loadingProgressBar = document.createElement('div');
    loadingProgressBar.className = 'loading-progress-bar';
    loadingProgress.appendChild(loadingProgressBar);

    // Create circle transition element (initially hidden)
    const circleTransition = document.createElement('div');
    circleTransition.className = 'circle-transition';

    // Append all elements to the overlay
    loadingOverlay.appendChild(abstractLines);
    loadingOverlay.appendChild(loadingSpinner);
    loadingOverlay.appendChild(loadingText);
    loadingOverlay.appendChild(loadingProgress);
    document.body.appendChild(circleTransition); // Add circle transition directly to body

    // Add the overlay to the body
    document.body.appendChild(loadingOverlay);
    document.body.style.overflow = 'hidden'; // Prevent scrolling while loading

    // Animate abstract lines with GSAP if available
    if (hasGSAP) {
        const lines = abstractLines.querySelectorAll('.abstract-line');

        lines.forEach((line, index) => {
            // Set initial opacity
            gsap.set(line, { opacity: 0 });

            // Fade in lines
            gsap.to(line, {
                opacity: 0.5,
                duration: 0.5,
                delay: index * 0.05,
                ease: 'power1.out'
            });

            // Subtle movement for lines
            if (line.classList.contains('horizontal')) {
                gsap.to(line, {
                    x: 'random(-20, 20)',
                    duration: 'random(20, 30)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            } else if (line.classList.contains('vertical')) {
                gsap.to(line, {
                    y: 'random(-20, 20)',
                    duration: 'random(20, 30)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            } else if (line.classList.contains('diagonal')) {
                gsap.to(line, {
                    rotation: `+=${Math.random() * 5}`,
                    duration: 'random(20, 30)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            }
        });
    }

    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;

        // Update progress bar
        if (hasGSAP) {
            gsap.to(loadingProgressBar, {
                width: `${progress}%`,
                duration: 0.3,
                ease: 'power1.out'
            });
        } else {
            loadingProgressBar.style.width = `${progress}%`;
        }

        if (progress === 100) {
            clearInterval(progressInterval);

            // Position the circle transition at the spinner's position
            setTimeout(() => {
                // Get spinner position
                const spinnerRect = loadingSpinner.getBoundingClientRect();
                const spinnerCenterX = spinnerRect.left + spinnerRect.width / 2;
                const spinnerCenterY = spinnerRect.top + spinnerRect.height / 2;

                // Position circle transition at spinner center
                circleTransition.style.top = spinnerCenterY + 'px';
                circleTransition.style.left = spinnerCenterX + 'px';

                // Start circle transition animation
                setTimeout(() => {
                    // Animate circle to full screen
                    circleTransition.classList.add('animate');

                    // Wait for circle animation to start expanding
                    setTimeout(() => {
                        // Remove loading overlay while circle is expanding
                        loadingOverlay.style.opacity = '0';
                        setTimeout(() => loadingOverlay.remove(), 500);

                        // Restore scrolling
                        document.body.style.overflow = '';

                        // Show page content with fade in while circle is still expanding
                        setTimeout(() => {
                            // Show page content
                            pageContent.classList.add('visible');

                            // Clean up original hidden elements, but preserve background elements
                            Array.from(document.body.children).forEach(child => {
                                // Skip background elements and scripts
                                const isBackgroundElement =
                                    child.id === 'liquid-background' ||
                                    child.id === 'liquid-canvas' ||
                                    child.classList.contains('abstract-element') ||
                                    child.querySelector('#liquid-canvas') !== null;

                                const isScript = child.tagName === 'SCRIPT';

                                // Only remove elements that were hidden and aren't background or scripts
                                if (child.style.display === 'none' && !isBackgroundElement && !isScript) {
                                    child.remove();
                                }
                            });

                            // Remove circle transition after page is visible
                            setTimeout(() => {
                                circleTransition.remove();
                            }, 300);
                        }, 800); // Show content when circle is almost full screen
                    }, 400); // Wait for circle to start expanding
                }, 100);
            }, 300); // Small delay before starting transition
        }
    }, 200);

    // Ensure loading screen is removed even if something goes wrong
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(progressInterval);

            // Force progress to 100%
            if (hasGSAP) {
                gsap.to(loadingProgressBar, {
                    width: '100%',
                    duration: 0.3,
                    ease: 'power1.out',
                    onComplete: () => {
                        // Get spinner position
                        const spinnerRect = loadingSpinner.getBoundingClientRect();
                        const spinnerCenterX = spinnerRect.left + spinnerRect.width / 2;
                        const spinnerCenterY = spinnerRect.top + spinnerRect.height / 2;

                        // Position circle transition at spinner center
                        circleTransition.style.top = spinnerCenterY + 'px';
                        circleTransition.style.left = spinnerCenterX + 'px';

                        // Animate circle to full screen
                        circleTransition.classList.add('animate');

                        // Wait for circle animation to start expanding
                        setTimeout(() => {
                            // Remove loading overlay while circle is expanding
                            loadingOverlay.style.opacity = '0';
                            setTimeout(() => loadingOverlay.remove(), 500);

                            // Restore scrolling
                            document.body.style.overflow = '';

                            // Show page content with fade in while circle is still expanding
                            setTimeout(() => {
                                // Show page content
                                pageContent.classList.add('visible');

                                // Clean up original hidden elements, but preserve background elements
                                Array.from(document.body.children).forEach(child => {
                                    // Skip background elements and scripts
                                    const isBackgroundElement =
                                        child.id === 'liquid-background' ||
                                        child.id === 'liquid-canvas' ||
                                        child.classList.contains('abstract-element') ||
                                        child.querySelector('#liquid-canvas') !== null;

                                    const isScript = child.tagName === 'SCRIPT';

                                    // Only remove elements that were hidden and aren't background or scripts
                                    if (child.style.display === 'none' && !isBackgroundElement && !isScript) {
                                        child.remove();
                                    }
                                });

                                // Remove circle transition after page is visible
                                setTimeout(() => {
                                    circleTransition.remove();
                                }, 300);
                            }, 800); // Show content when circle is almost full screen
                        }, 400); // Wait for circle to start expanding
                    }
                });
            } else {
                // Fallback to CSS
                loadingProgressBar.style.width = '100%';

                // Get spinner position
                setTimeout(() => {
                    const spinnerRect = loadingSpinner.getBoundingClientRect();
                    const spinnerCenterX = spinnerRect.left + spinnerRect.width / 2;
                    const spinnerCenterY = spinnerRect.top + spinnerRect.height / 2;

                    // Position circle transition at spinner center
                    circleTransition.style.top = spinnerCenterY + 'px';
                    circleTransition.style.left = spinnerCenterX + 'px';

                    // Animate circle to full screen
                    circleTransition.classList.add('animate');

                    // Wait for circle animation to start expanding
                    setTimeout(() => {
                        // Remove loading overlay while circle is expanding
                        loadingOverlay.style.opacity = '0';
                        setTimeout(() => loadingOverlay.remove(), 500);

                        // Restore scrolling
                        document.body.style.overflow = '';

                        // Show page content with fade in while circle is still expanding
                        setTimeout(() => {
                            // Show page content
                            pageContent.classList.add('visible');

                            // Clean up original hidden elements, but preserve background elements
                            Array.from(document.body.children).forEach(child => {
                                // Skip background elements and scripts
                                const isBackgroundElement =
                                    child.id === 'liquid-background' ||
                                    child.id === 'liquid-canvas' ||
                                    child.classList.contains('abstract-element') ||
                                    child.querySelector('#liquid-canvas') !== null;

                                const isScript = child.tagName === 'SCRIPT';

                                // Only remove elements that were hidden and aren't background or scripts
                                if (child.style.display === 'none' && !isBackgroundElement && !isScript) {
                                    child.remove();
                                }
                            });

                            // Remove circle transition after page is visible
                            setTimeout(() => {
                                circleTransition.remove();
                            }, 300);
                        }, 800); // Show content when circle is almost full screen
                    }, 400); // Wait for circle to start expanding
                }, 300);
            }
        }, 1000); // Minimum display time of 1 second
    });
});
