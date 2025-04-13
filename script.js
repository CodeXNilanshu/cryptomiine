// Enhanced GreenMine Labs JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library (can be replaced with our custom animations)
    initAnimations();
    
    // Mobile menu toggle functionality
    setupMobileMenu();
    
    // Smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Contact form validation and submission
    setupContactForm();
    
    // Newsletter subscription
    setupNewsletterForm();
    
    // Header scroll effect
    setupScrollHeader();
    
    // Particles background effect (optional - can be enabled if desired)
    // setupParticlesBackground();
    
    // Add visual feedback to buttons
    setupButtonEffects();
    
    // Add counter animation to stat numbers
    setupCounterAnimation();
});

// Initialize animations for elements
function initAnimations() {
    // Trigger animation when elements are in viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .impact-card, .stat-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    setTimeout(animateOnScroll, 300);
    
    // Add entrance animation to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && 
            !event.target.closest('.nav-menu') && 
            !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state in navigation
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Highlight active section in navigation based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === '#' + sectionId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    });
}

// Setup contact form validation and submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Simple form validation
        const validateField = (field) => {
            const value = field.value.trim();
            const fieldName = field.name;
            let isValid = true;
            
            // Remove any existing error messages
            const existingError = field.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Check if empty
            if (value === '') {
                addErrorMessage(field, 'This field is required');
                isValid = false;
            } 
            // Email validation
            else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                addErrorMessage(field, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Update field styling
            if (isValid) {
                field.classList.remove('invalid');
                field.classList.add('valid');
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
            }
            
            return isValid;
        };
        
        // Add error message below the field
        const addErrorMessage = (field, message) => {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            errorElement.style.color = '#FF6B6B';
            errorElement.style.fontSize = '0.85rem';
            errorElement.style.marginTop = '5px';
            field.parentElement.appendChild(errorElement);
        };
        
        // Validate on blur
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => {
                validateField(field);
            });
            
            // Clear error on focus
            field.addEventListener('focus', () => {
                field.classList.remove('invalid');
                const existingError = field.parentElement.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
            });
        });
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let isFormValid = true;
            contactForm.querySelectorAll('input, textarea').forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });
            
            if (!isFormValid) {
                return;
            }
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to your server
            // For now, we'll just simulate a successful submission
            
            // Disable form and show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Show success message
                contactForm.innerHTML = `
                    <div class="success-message" style="text-align: center;">
                        <div style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3>Thank You!</h3>
                        <p style="margin: 15px 0 30px;">Your message has been sent successfully. We'll get back to you soon.</p>
                        <button type="button" class="btn btn-primary" id="resetForm">Send Another Message</button>
                    </div>
                `;
                
                // Add event listener to reset form button
                document.getElementById('resetForm').addEventListener('click', () => {
                    window.location.reload();
                });
            }, 1500);
        });
    }
}

// Setup newsletter form
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Simple validation
            if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailInput.style.borderColor = '#FF6B6B';
                
                // Show error message if not already present
                if (!this.querySelector('.error-message')) {
                    const errorElement = document.createElement('div');
                    errorElement.className = 'error-message';
                    errorElement.textContent = 'Please enter a valid email address';
                    errorElement.style.color = '#FF6B6B';
                    errorElement.style.fontSize = '0.85rem';
                    errorElement.style.marginTop = '5px';
                    this.appendChild(errorElement);
                }
                
                return;
            }
            
            // Remove any error message
            const errorMessage = this.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
            
            // Disable form and show loading state
            const submitButton = this.querySelector('button');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Replace form with success message
                this.innerHTML = `
                    <div style="color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Thank you for subscribing!</span>
                    </div>
                `;
            }, 1000);
        });
    }
}

// Setup header scroll effect
function setupScrollHeader() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Setup button hover effects
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 7px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
}

// Setup counter animation for stats
function setupCounterAnimation() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent);
        const suffix = element.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50; // Adjust for smoother/faster animation
        const duration = 1500; // ms
        const stepTime = duration / (target / increment);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    };
    
    // Use Intersection Observer to trigger animation when stats are visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => observer.observe(stat));
}

// Optional: Particle background effect (can be activated if desired)
function setupParticlesBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-background';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = '#36F1CD';
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) {
                this.speedX = -this.speedX;
            }
            
            if (this.y > canvas.height || this.y < 0) {
                this.speedY = -this.speedY;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    const particlesArray = [];
    const numberOfParticles = Math.min(canvas.width, canvas.height) / 10; // Adjust density
    
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        // Connect particles with lines if they're close enough
        connectParticles();
        
        requestAnimationFrame(animate);
    }
    
    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) { // Adjust connection distance
                    ctx.beginPath();
                    ctx.strokeStyle = '#36F1CD';
                    ctx.globalAlpha = 0.1 - (distance / 1000);
                    ctx.lineWidth = 1;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    animate();
}
