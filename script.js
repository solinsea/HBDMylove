// Cute Floating Particles Generator
const particlesContainer = document.getElementById('particles-container');
const cuteEmojis = ['💖', '✨', '🌸', '🎀', '🎈', '💕', '🦋', '🌷'];

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('cute-particle');
    
    // Pick a random cute emoji
    particle.textContent = cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];
    
    // Random size
    const size = Math.random() * 1.5 + 1.2;
    particle.style.fontSize = `${size}rem`;
    
    // Random X position
    particle.style.left = `${Math.random() * 100}vw`;
    
    // Random animation duration
    particle.style.animationDuration = `${Math.random() * 5 + 6}s`;
    
    particlesContainer.appendChild(particle);
    
    // Clean up
    setTimeout(() => {
        particle.remove();
    }, 12000);
}

// Generate particles more frequently for a richer background
setInterval(createParticle, 350);

// Add interactive click sparkles!
document.addEventListener('click', function(e) {
    for(let i=0; i<3; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle-shape');
        
        // Slight randomness around click position
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        
        sparkle.style.left = `${e.clientX + offsetX}px`;
        sparkle.style.top = `${e.clientY + offsetY}px`;
        
        particlesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
});

// Typing Effect
const text = "Happy Birthday, My Sweetheart 💖";
const typingElement = document.querySelector('.typing-text');
let textIndex = 0;

function type() {
    if (textIndex < text.length) {
        typingElement.textContent += text.charAt(textIndex);
        textIndex++;
        
        // Add a small random delay for realistic typing
        const typingSpeed = Math.random() * 100 + 100;
        setTimeout(type, typingSpeed);
    }
}

window.addEventListener('load', () => {
    setTimeout(type, 800);
});

// Better Scroll Animation with Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // Add a small delay based on the element's position if it's a gallery item
            if (entry.target.classList.contains('gallery-item')) {
                const randomDelay = Math.random() * 0.3;
                entry.target.style.transitionDelay = `${randomDelay}s`;
            }
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});
