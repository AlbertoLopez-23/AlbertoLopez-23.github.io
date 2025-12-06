// Script principal - Interactividad y animaciones

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initParallax();
    initModals();
    initLanguageToggle();
    initSmoothScroll();
    initCurrentYear();
    initMicroInteractions();
});

// ============================================
// Navegación
// ============================================
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(20, 20, 20, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'var(--bg-secondary)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// Scroll Reveal Animations
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }, parseInt(delay));
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Animate skill bars when visible
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ============================================
// Parallax Effects
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;
            
            // Only apply parallax if element is in viewport
            if (scrollY + window.innerHeight > elementTop && scrollY < elementTop + elementHeight) {
                const yPos = -(scrollY - elementTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Initial call
    updateParallax();
}

// ============================================
// Modales de Proyectos
// ============================================
function initModals() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    const bentoBoxes = document.querySelectorAll('.bento-box');
    
    const projectData = [
        {
            icon: '🤖',
            title: 'projects.0.title',
            description: 'projects.0.description',
            technologies: 'projects.0.technologies'
        },
        {
            icon: '🧠',
            title: 'projects.1.title',
            description: 'projects.1.description',
            technologies: 'projects.1.technologies'
        },
        {
            icon: '🔬',
            title: 'projects.2.title',
            description: 'projects.2.description',
            technologies: 'projects.2.technologies'
        },
        {
            icon: '🚀',
            title: 'projects.3.title',
            description: 'projects.3.description',
            technologies: 'projects.3.technologies'
        }
    ];
    
    function openModal(projectIndex) {
        const project = projectData[projectIndex];
        const lang = window.i18n.getCurrentLanguage();
        
        modalBody.innerHTML = `
            <div class="modal-icon">${project.icon}</div>
            <h2>${window.i18n.t(project.title, lang)}</h2>
            <p>${window.i18n.t(project.description, lang)}</p>
            <p class="modal-tech">${window.i18n.t(project.technologies, lang)}</p>
        `;
        
        // Calcular el ancho del scrollbar antes de ocultarlo
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Compensar el ancho del scrollbar para evitar desplazamiento del header
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        // Animate modal content
        setTimeout(() => {
            modalBody.style.opacity = '1';
            modalBody.style.transform = 'translateY(0)';
        }, 50);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        
        // Reset animation
        modalBody.style.opacity = '0';
        modalBody.style.transform = 'translateY(20px)';
    }
    
    // Open modal on bento box click
    bentoBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            // Proyectos deshabilitados (en desarrollo) no hacen nada
            if (box.getAttribute('data-disabled') === 'true') {
                return;
            }
            // Proyecto 0 (Clustering Fútbol) redirige a página personalizada
            if (index === 0) {
                window.location.href = 'project-clustering-futbol.html';
                return;
            }
            // Proyecto 1 (Valor de Mercado) redirige a página personalizada
            if (index === 1) {
                window.location.href = 'project-valor-mercado-futbol.html';
                return;
            }
            // Proyecto 2 (Ambulancias) redirige a página personalizada
            if (index === 2) {
                window.location.href = 'project-ambulancias.html';
                return;
            }
            openModal(index);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Update modal content on language change
    window.addEventListener('languageChanged', (e) => {
        if (modal.classList.contains('active')) {
            const activeProject = Array.from(bentoBoxes).findIndex(box => 
                box.classList.contains('active')
            );
            if (activeProject !== -1) {
                openModal(activeProject);
            }
        }
    });
}

// ============================================
// Language Toggle
// ============================================
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    
    if (!langToggle) return;
    
    langToggle.addEventListener('click', () => {
        const currentLang = window.i18n.getCurrentLanguage();
        const newLang = currentLang === 'es' ? 'en' : 'es';
        window.i18n.setLanguage(newLang);
    });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#' || !href) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Current Year
// ============================================
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// Micro-interacciones
// ============================================
function initMicroInteractions() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn-primary, .lang-toggle');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Bento boxes hover glow
    const bentoBoxes = document.querySelectorAll('.bento-box');
    bentoBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 32px rgba(152, 210, 192, 0.2)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Contact items pulse
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.animation = 'pulse 0.6s ease';
            }
        });
    });
}

// ============================================
// Ripple Effect CSS (añadido dinámicamente)
// ============================================
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(152, 210, 192, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
    }
    
    .btn-primary,
    .lang-toggle {
        position: relative;
        overflow: hidden;
    }
    
    .nav-link.active {
        color: var(--text-primary);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// Performance: Debounce para scroll
// ============================================
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

// Optimizar scroll events
const optimizedScroll = debounce(() => {
    // Scroll-based animations aquí
}, 10);

window.addEventListener('scroll', optimizedScroll, { passive: true });

// ============================================
// Efecto Spotlight (Glow que sigue al ratón)
// ============================================
document.querySelectorAll('.bento-box, .timeline-content').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
