// ===== NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SLIDESHOW =====
let slideIndex = 1;
let slideInterval;

// Initialize slideshow
showSlides(slideIndex);
startAutoSlide();

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Show current slide and dot
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000); // Change slide every 5 seconds
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Animate rating bars
            if (entry.target.classList.contains('rating-fill')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-content, .feature-item, .access-item, .review-card, .price-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Observe rating bars
document.querySelectorAll('.rating-fill').forEach(el => {
    observer.observe(el);
});

// ===== VIDEO BACKGROUND =====
const heroVideo = document.getElementById('heroVideo');

// Fallback for video if it doesn't load
if (heroVideo) {
    heroVideo.addEventListener('error', () => {
        console.log('Video failed to load, using fallback image');
        const videoBackground = document.querySelector('.video-background');
        if (videoBackground) {
            videoBackground.style.background = 'url("assets/images/hero-fallback.jpg") center/cover no-repeat';
        }
    });
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.video-background');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== LAZY LOAD IMAGES =====
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== RATING BARS ANIMATION =====
const ratingBarsContainer = document.querySelector('.rating-bars');
if (ratingBarsContainer) {
    const ratingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.rating-fill');
                fills.forEach((fill, index) => {
                    setTimeout(() => {
                        fill.style.transition = 'width 1.5s ease-out';
                    }, index * 100);
                });
                ratingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    ratingObserver.observe(ratingBarsContainer);
}

// ===== CURSOR EFFECT (OPTIONAL) =====
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Change cursor on hover
document.querySelectorAll('a, button, .slide-nav').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScroll = debounce(() => {
    // Add any scroll-dependent functionality here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===== KEYBOARD NAVIGATION FOR SLIDESHOW =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// ===== TOUCH SWIPE FOR SLIDESHOW =====
let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');

if (slideshowContainer) {
    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideshowContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeSlide(1); // Swipe left
        } else {
            changeSlide(-1); // Swipe right
        }
    }
}

// ===== FORM VALIDATION (if needed) =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Add form validation and submission logic here
        console.log('Form submitted');

        // Show success message
        alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
    });
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.classList.add('skip-link');
document.body.insertBefore(skipLink, document.body.firstChild);

// Focus management for modal/menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

console.log('🏢 The Park House Higashi-Ginza website loaded successfully!');
