// MediaBay Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeLoadingScreen();
    initializeScrollIndicator();
    initializeSidePanel();
    initializeScrollAnimations();
    initializeHeroAnimations();
    initializePortfolioFilters();
    initializeTestimonialSlider();
    initializeIndustrySelector();
    initializeQuoteEstimator();
    initializeSmoothScrolling();
    initializeParallaxEffects();
    initializeStatsCounter();
    initializeTimelineAnimations();
    
    console.log('MediaBay website initialized successfully!');
});

// Loading Screen Management
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        scrollIndicator.classList.add('visible');
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.remove();
            }
        }, 500);
    }, 2500);
}

// Scroll Indicator
function initializeScrollIndicator() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
        
        // Show/hide scroll indicator
        if (scrollIndicator) {
            if (scrollTop > 100) {
                scrollIndicator.classList.add('visible');
            } else {
                scrollIndicator.classList.remove('visible');
            }
        }
    });
}

// Side Panel Navigation
function initializeSidePanel() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidePanel = document.getElementById('side-panel');
    const panelClose = document.getElementById('panel-close');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'panel-overlay';
    document.body.appendChild(overlay);
    
    // Toggle panel
    function togglePanel() {
        const isOpen = sidePanel.classList.contains('open');
        
        if (isOpen) {
            closePanel();
        } else {
            openPanel();
        }
    }
    
    function openPanel() {
        sidePanel.classList.add('open');
        menuToggle.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closePanel() {
        sidePanel.classList.remove('open');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', togglePanel);
    }
    
    if (panelClose) {
        panelClose.addEventListener('click', closePanel);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closePanel);
    }
    
    // Close panel when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    closePanel();
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animateElements.forEach(el => observer.observe(el));
    
    // Add animation classes to elements
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('fade-in-up', `stagger-${(index % 6) + 1}`);
    });
    
    document.querySelectorAll('.template-card').forEach((card, index) => {
        card.classList.add('scale-in', `stagger-${(index % 3) + 1}`);
    });
    
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.classList.add('fade-in-left', `stagger-${index + 1}`);
    });
}

// Hero Animations
function initializeHeroAnimations() {
    const heroSection = document.querySelector('.hero-section');
    const wordAnimates = document.querySelectorAll('.word-animate');
    
    // Trigger word animations on load
    setTimeout(() => {
        wordAnimates.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 3000); // After loading screen
    
    // Hero CTA button interactions
    const ctaButtons = document.querySelectorAll('.hero-cta .btn-primary, .hero-cta .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.textContent.includes('Start Your Project')) {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (button.textContent.includes('View Portfolio')) {
                e.preventDefault();
                document.getElementById('portfolio').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Portfolio Filters
function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Here you would typically filter portfolio items
            // For now, we'll just show a message
            console.log(`Filtering portfolio by: ${filter}`);
            
            // Add visual feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
}

// Testimonial Slider
function initializeTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        
        // Activate current dot
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
    
    // Case study expansion
    const expandButtons = document.querySelectorAll('.expand-case-study');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Here you would typically open a modal or navigate to case study
            alert('Case study details would open here');
        });
    });
}

// Industry Selector
function initializeIndustrySelector() {
    const industryButtons = document.querySelectorAll('.industry-btn');
    const templateCards = document.querySelectorAll('.template-card');
    
    industryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            industryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const industry = button.getAttribute('data-industry');
            
            // Filter template cards
            templateCards.forEach(card => {
                const cardIndustry = card.getAttribute('data-industry');
                
                if (industry === 'all' || cardIndustry === industry) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Template card interactions
    templateCards.forEach(card => {
        card.addEventListener('click', () => {
            const templateName = card.querySelector('h3').textContent;
            const templatePrice = card.querySelector('.template-price').textContent;
            
            // Here you would typically open template details or start customization
            alert(`Selected template: ${templateName} - ${templatePrice}`);
        });
    });
}

// Quote Estimator
function initializeQuoteEstimator() {
    const pageRadios = document.querySelectorAll('input[name="pages"]');
    const featureCheckboxes = document.querySelectorAll('input[name="features"]');
    const basePriceElement = document.getElementById('base-price');
    const featuresPriceElement = document.getElementById('features-price');
    const totalPriceElement = document.getElementById('total-price');
    const getQuoteBtn = document.querySelector('.get-quote-btn');
    
    function updatePricing() {
        let basePrice = 0;
        let featuresPrice = 0;
        
        // Get base price from selected pages
        const selectedPageOption = document.querySelector('input[name="pages"]:checked');
        if (selectedPageOption) {
            basePrice = parseInt(selectedPageOption.getAttribute('data-price')) || 0;
        }
        
        // Get features price
        featureCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                featuresPrice += parseInt(checkbox.getAttribute('data-price')) || 0;
            }
        });
        
        const totalPrice = basePrice + featuresPrice;
        
        // Update display with animation
        if (basePriceElement) {
            animateNumber(basePriceElement, basePrice);
        }
        
        if (featuresPriceElement) {
            animateNumber(featuresPriceElement, featuresPrice);
        }
        
        if (totalPriceElement) {
            animateNumber(totalPriceElement, totalPrice);
        }
    }
    
    function animateNumber(element, targetValue) {
        const currentValue = parseInt(element.textContent.replace(/[^\d]/g, '')) || 0;
        const increment = (targetValue - currentValue) / 20;
        let current = currentValue;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= targetValue) || 
                (increment < 0 && current <= targetValue)) {
                current = targetValue;
                clearInterval(timer);
            }
            element.textContent = `R${Math.round(current).toLocaleString()}`;
        }, 50);
    }
    
    // Event listeners
    pageRadios.forEach(radio => {
        radio.addEventListener('change', updatePricing);
    });
    
    featureCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updatePricing);
    });
    
    // Get quote button
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener('click', () => {
            const totalPrice = totalPriceElement ? totalPriceElement.textContent : 'R0';
            
            // Scroll to contact form and pre-fill some information
            const contactSection = document.getElementById('contact');
            const messageField = document.getElementById('message');
            
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                if (messageField) {
                    setTimeout(() => {
                        messageField.value = `I'm interested in getting a quote for a website. Based on the estimator, the estimated cost is ${totalPrice}. Please provide more details.`;
                        messageField.focus();
                    }, 1000);
                }
            }
        });
    }
    
    // Initialize with default values
    updatePricing();
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax Effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-elements .element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Stats Counter Animation
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                
                if (!isNaN(numericValue)) {
                    animateCounter(target, 0, numericValue, finalValue);
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, start, end, originalText) {
    const duration = 2000;
    const increment = (end - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= end) {
            current = end;
            clearInterval(timer);
            element.textContent = originalText;
        } else {
            const suffix = originalText.includes('+') ? '+' : 
                          originalText.includes('%') ? '%' : '';
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Timeline Animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Utility Functions
function debounce(func, wait) {
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

const throttledScrollHandler = throttle(() => {
    initializeScrollIndicator();
}, 16);

// Replace direct scroll event listeners with optimized versions
window.removeEventListener('scroll', updateActiveNavLink);
window.addEventListener('scroll', debouncedScrollHandler);

// Error handling
window.addEventListener('error', (e) => {
    console.error('MediaBay Error:', e.error);
});

// Accessibility enhancements
document.addEventListener('keydown', (e) => {
    // Escape key closes side panel
    if (e.key === 'Escape') {
        const sidePanel = document.getElementById('side-panel');
        if (sidePanel && sidePanel.classList.contains('open')) {
            const panelClose = document.getElementById('panel-close');
            if (panelClose) {
                panelClose.click();
            }
        }
    }
});

// Focus management for accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Apply focus trapping to side panel
const sidePanel = document.getElementById('side-panel');
if (sidePanel) {
    trapFocus(sidePanel);
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
}

// Social media link tracking
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.getAttribute('aria-label');
        console.log(`Social media click: ${platform}`);
        // Here you would typically send analytics data
    });
});

// Service card interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        const serviceName = card.querySelector('h3').textContent;
        
        // Scroll to contact form and pre-fill service type
        const contactSection = document.getElementById('contact');
        const projectTypeSelect = document.getElementById('project-type');
        
        if (contactSection && projectTypeSelect) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                // Try to match service to project type options
                const options = projectTypeSelect.querySelectorAll('option');
                options.forEach(option => {
                    if (option.textContent.toLowerCase().includes(serviceName.toLowerCase().split(' ')[0])) {
                        option.selected = true;
                    }
                });
                
                projectTypeSelect.focus();
            }, 1000);
        }
    });
});

console.log('MediaBay main.js loaded successfully!');