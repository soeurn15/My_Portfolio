// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== MOBILE MENU TOGGLE ====================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    // prevent background scroll when menu is open on mobile
    try {
        if (isActive && window.bodyScrollLock && typeof bodyScrollLock.disableBodyScroll === 'function') {
            bodyScrollLock.disableBodyScroll(navMenu);
        } else if (!isActive && window.bodyScrollLock && typeof bodyScrollLock.enableBodyScroll === 'function') {
            bodyScrollLock.enableBodyScroll(navMenu);
        } else {
            document.body.style.overflow = isActive ? 'hidden' : '';
        }
    } catch (err) {
        document.body.style.overflow = isActive ? 'hidden' : '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        try {
            if (window.bodyScrollLock && typeof bodyScrollLock.enableBodyScroll === 'function') {
                bodyScrollLock.enableBodyScroll(navMenu);
            } else {
                document.body.style.overflow = '';
            }
        } catch (err) {
            document.body.style.overflow = '';
        }
    });
});

// Close mobile menu on resize or orientation change to avoid stuck overlays
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        try {
            if (window.bodyScrollLock && typeof bodyScrollLock.enableBodyScroll === 'function') {
                bodyScrollLock.enableBodyScroll(navMenu);
            } else {
                document.body.style.overflow = '';
            }
        } catch (err) {
            document.body.style.overflow = '';
        }
    }
});

window.addEventListener('orientationchange', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        try {
            if (window.bodyScrollLock && typeof bodyScrollLock.enableBodyScroll === 'function') {
                bodyScrollLock.enableBodyScroll(navMenu);
            } else {
                document.body.style.overflow = '';
            }
        } catch (err) {
            document.body.style.overflow = '';
        }
    }
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== NAVBAR BACKGROUND ON SCROLL ====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section elements
document.querySelectorAll('section > .container').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send the data like this:
    /*
    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
    });
    */
});

// ==================== TYPING EFFECT (Optional Enhancement) ====================
// Uncomment below to add a typing effect to the hero subtitle
/*
const subtitle = document.querySelector('.hero-subtitle');
const roles = ['Full Stack Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        subtitle.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        subtitle.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect
// typeEffect();
*/

// ==================== SCROLL TO TOP BUTTON (Optional Enhancement) ====================
// Uncomment to add a scroll-to-top button
/*
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add these CSS styles for the scroll-to-top button:
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        z-index: 999;
    }
    
    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-hover);
    }
`;
document.head.appendChild(style);
*/

// ==================== PROJECT CARD TILT EFFECT (Optional Enhancement) ====================
// Uncomment to add a subtle 3D tilt effect to project cards
/*
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
*/

console.log('Portfolio loaded successfully! 🚀');

// ==================== DOWNLOAD CV (mobile-friendly fallback) ====================
const downloadCvBtn = document.getElementById('downloadCv');

if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', async (e) => {
        const url = downloadCvBtn.getAttribute('href');
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
        // On mobile browsers, let the browser handle opening the PDF in a new tab/window immediately.
        if (isMobile) {
            // ensure opens in a new tab
            window.open(url, '_blank', 'noopener');
            return;
        }

        // On desktop, attempt fetch+blob fallback if needed, but prevent default so we can control download
        e.preventDefault();
        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('Network response was not ok');
            const blob = await resp.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'song-soeurn-cv.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.warn('Download fallback failed, opening in new tab', err);
            window.open(url, '_blank', 'noopener');
        }
    });
}

// ==================== GET IN TOUCH BUTTON (ensure mobile scroll + close menu)
const getInTouchBtn = document.getElementById('getInTouchBtn');
if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', (e) => {
        // Default anchor scrolling handled elsewhere; ensure mobile menu is closed and smooth scroll.
        e.preventDefault();
        const target = document.querySelector('#contact');
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// ==================== TOUCH DEVICE ENHANCEMENTS ====================
// Add `touch` class to body for CSS hooks and enable tap-to-toggle for project overlays
function isTouchDevice() {
    return ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (isTouchDevice()) {
    document.body.classList.add('touch');
    // Reduce heavy animations for better performance on touch devices
    document.body.classList.add('reduced-animations');

    // Allow tapping a project card to toggle its overlay on touch devices
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // If the user clicked a link or button inside the card, don't toggle
            const target = e.target;
            if (target.closest('a') || target.closest('button')) return;

            card.classList.toggle('overlay-active');
        });
    });

    // Close overlays when tapping outside
    document.addEventListener('click', (e) => {
        const openCard = document.querySelector('.project-card.overlay-active');
        if (!openCard) return;
        if (!e.target.closest('.project-card')) {
            openCard.classList.remove('overlay-active');
        }
    });
}
