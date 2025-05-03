// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize landing section animations
    initLandingAnimations();
});

// Landing Section Animations
function initLandingAnimations() {
    const landingSection = document.getElementById('landing-tentang-himasif');
    if (!landingSection) return;

    // Text animations with GSAP
    gsap.from('.tentang-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.himasif-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out'
    });
}
