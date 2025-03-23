document.addEventListener('DOMContentLoaded', function() {
    const himasifImage = document.querySelector('.himasif-hero-image');
    const titleContainer = document.querySelector('.title-container');
    const landingSection = document.querySelector('#landing');
    const photoSection = document.querySelector('#photo');
    
    function lerp(start, end, factor) {
        return start * (1 - factor) + end * factor;
    }
    
    function updateScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(scrollTop / windowHeight, 1);
        
        titleContainer.style.opacity = Math.max(0, 1 - (scrollProgress * 2));
        
        if (scrollProgress > 0) {
            const targetWidth = lerp(300, window.innerWidth * 0.9, scrollProgress);
            const scale = lerp(1, 1.1, scrollProgress);
            const blur = lerp(0, 1, 1 - scrollProgress);
            
            himasifImage.style.width = `${targetWidth}px`;
            himasifImage.style.transform = `scale(${scale})`;
            himasifImage.style.filter = `blur(${blur}px)`;
            
            const yOffset = scrollProgress * 50;
            himasifImage.style.marginTop = `${yOffset}px`;
        } else {
            himasifImage.style.width = '300px';
            himasifImage.style.transform = 'scale(1)';
            himasifImage.style.filter = 'blur(0)';
            himasifImage.style.marginTop = '0px';
        }
    }
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    updateScroll();
    window.addEventListener('resize', updateScroll, { passive: true });

    // Background Animation
    function initBackground() {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resize();
        window.addEventListener('resize', resize);

        const blobs = [
            {
                x: canvas.width * 0.3,
                y: canvas.height * 0.4,
                radius: canvas.width * 0.25,
                color: 'rgba(173, 216, 230, 0.7)', // Light blue
                dx: 1.5,
                dy: 1.2
            },
            {
                x: canvas.width * 0.7,
                y: canvas.height * 0.6,
                radius: canvas.width * 0.3,
                color: 'rgba(0, 51, 102, 0.7)', // Dark blue
                dx: -1.2,
                dy: 0.9
            }
        ];

        function drawBlob(blob) {
            const gradient = ctx.createRadialGradient(
                blob.x, blob.y, 0,
                blob.x, blob.y, blob.radius
            );
            gradient.addColorStop(0, blob.color);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.beginPath();
            ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }

        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.filter = 'blur(50px)';
            blobs.forEach(blob => {
                blob.x += blob.dx;
                blob.y += blob.dy;

                if (blob.x - blob.radius < 0 || blob.x + blob.radius > canvas.width) {
                    blob.dx *= -1;
                }
                if (blob.y - blob.radius < 0 || blob.y + blob.radius > canvas.height) {
                    blob.dy *= -1;
                }

                drawBlob(blob);
            });
            ctx.filter = 'none';

            requestAnimationFrame(animate);
        }

        animate();
    }

    initBackground();
});