import './style.css';

 
/* import gsap from 'gsap';

let animationTriggered = false;

const handleScroll = () => {
    if (animationTriggered || window.scrollY <= 100) return; // Prevent re-triggering

    animationTriggered = true; // Prevent further triggers
    const old = document.querySelector('.section01') as HTMLImageElement;
    const image = document.getElementById('image') as HTMLImageElement; // Ensure to get the HTMLImageElement
    const newContent = document.getElementById('new-content');

    // Create Canvas for transferring image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return; // Check if context is created successfully
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const pixels = [];
    for (let y = 0; y < canvas.height; y += 20) {
        for (let x = 0; x < canvas.width; x += 20) {
            const pixel = ctx.getImageData(x, y, 10, 10);
            pixels.push({ pixel, x, y });
        }
    }

    pixels.forEach(({ pixel, x, y }) => {
        const div = document.createElement('div');
        div.style.width = '25px';
        div.style.height = '25px';
        div.style.position = 'absolute';
        div.style.backgroundColor = `rgba(0,0,0})`;
        div.style.left = `${x + Math.random() * 100 - 50}px`;
        div.style.top = `${y + Math.random() * 100 - 50}px`;

        document.body.appendChild(div);

        gsap.to(div, {
            duration: 2,
            opacity: 0,
            scale: 0.5,
            onComplete: () => div.remove()
        });
    });

    // Show new content
    newContent!.style.display = 'block';
    gsap.from(newContent, { duration: 1, opacity: 0 });

    // Hide the first section
    const firstSection = image.closest('section');
    gsap.to(firstSection, { duration: 1, opacity: 0, onComplete: () => {
        firstSection!.style.display = 'none';
        old.style.display = 'none';
    }});

    // Remove the scroll listener
    window.removeEventListener('scroll', handleScroll);
};

// Throttle the scroll event
window.addEventListener('scroll', handleScroll); */
