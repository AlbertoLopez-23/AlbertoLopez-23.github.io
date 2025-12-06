// Sistema de Internacionalización (i18n)
// Detección automática por zona horaria y selector manual

const translations = {
    es: {
        // Navegación
        'nav.about': 'Sobre Mí',
        'nav.projects': 'Proyectos',
        'nav.education': 'Educación',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.subtitle': 'Desarrollador especializado en Inteligencia Artificial y Machine Learning',
        'hero.cta': 'Conoce más',
        
        // Preview Cards
        'preview.about.title': 'Sobre Mí',
        'preview.about.desc': 'Conoce mi trayectoria, habilidades y pasiones profesionales',
        'preview.about.link': 'Explorar →',
        'preview.projects.title': 'Proyectos',
        'preview.projects.desc': 'Explora mis proyectos de IA y Machine Learning',
        'preview.projects.link': 'Ver proyectos →',
        'preview.education.title': 'Educación',
        'preview.education.desc': 'Mi formación académica y certificaciones',
        'preview.education.link': 'Ver formación →',
        'preview.contact.title': 'Contacto',
        'preview.contact.desc': 'Conectemos y trabajemos juntos',
        'preview.contact.link': 'Contactar →',
        
        // About
        'about.title': 'Sobre Mí',
        'about.intro.title': 'Introducción',
        'about.intro.text': 'Soy un desarrollador apasionado por la Inteligencia Artificial y el Machine Learning. Me especializo en crear soluciones innovadoras que combinan tecnología de vanguardia con aplicaciones prácticas del mundo real.',
        'about.skills.title': 'Habilidades y Stack Tecnológico',
        'about.skills.python': 'Python',
        'about.skills.ml': 'Machine Learning',
        'about.skills.dl': 'Deep Learning',
        'about.skills.tensorflow': 'TensorFlow / PyTorch',
        'about.interests.title': 'Intereses',
        'about.interests.text': 'Me interesa especialmente el desarrollo de modelos de IA generativa, procesamiento de lenguaje natural, y la aplicación de técnicas de aprendizaje automático para resolver problemas complejos en diversos dominios.',
        'about.values.title': 'Valores Profesionales',
        'about.values.innovation': 'Innovación constante',
        'about.values.quality': 'Calidad en cada proyecto',
        'about.values.learning': 'Aprendizaje continuo',
        'about.values.collaboration': 'Colaboración efectiva',
        
        // Projects
        'projects.title': 'Proyectos',
        'projects.0.title': 'AI Project Alpha',
        'projects.0.short': 'Sistema avanzado de procesamiento de datos con IA',
        'projects.0.description': 'Proyecto completo de inteligencia artificial que implementa técnicas avanzadas de procesamiento de datos y aprendizaje automático. El sistema utiliza modelos de deep learning para análisis predictivo y procesamiento de lenguaje natural.',
        'projects.0.technologies': 'Tecnologías: Python, TensorFlow, NLP, Scikit-learn',
        'projects.1.title': 'Machine Learning Tool',
        'projects.1.short': 'Herramienta para entrenamiento de modelos ML',
        'projects.1.description': 'Herramienta completa para el desarrollo y entrenamiento de modelos de machine learning. Incluye pipeline de datos, preprocesamiento automático y visualización de resultados.',
        'projects.1.technologies': 'Tecnologías: Python, Scikit-learn, Pandas, Matplotlib',
        'projects.2.title': 'Neural Network App',
        'projects.2.short': 'Aplicación de redes neuronales profundas',
        'projects.2.description': 'Aplicación interactiva para diseñar y entrenar redes neuronales profundas. Permite experimentar con diferentes arquitecturas y visualizar el proceso de entrenamiento en tiempo real.',
        'projects.2.technologies': 'Tecnologías: PyTorch, Deep Learning, React, TensorBoard',
        'projects.3.title': 'Deep Learning Platform',
        'projects.3.short': 'Plataforma completa para desarrollo de modelos DL',
        'projects.3.description': 'Plataforma cloud para el desarrollo, entrenamiento y despliegue de modelos de deep learning. Incluye gestión de datasets, experimentación y monitoreo de modelos en producción.',
        'projects.3.technologies': 'Tecnologías: Keras, TensorFlow, Cloud Computing, Docker',
        
        // Education
        'education.title': 'Educación',
        'education.main.date': '2020 - 2024',
        'education.main.title': 'Grado en Ingeniería Informática',
        'education.main.institution': 'Universidad [Placeholder]',
        'education.main.description': 'Especialización en Inteligencia Artificial y Machine Learning. Proyectos destacados en procesamiento de datos y desarrollo de modelos predictivos.',
        'education.course1.date': '2023',
        'education.course1.title': 'Certificación en Deep Learning',
        'education.course1.institution': 'Coursera / DeepLearning.AI',
        'education.course1.description': 'Especialización completa en redes neuronales profundas y aplicaciones prácticas.',
        'education.course2.date': '2022',
        'education.course2.title': 'Machine Learning Engineer',
        'education.course2.institution': 'Google Cloud',
        'education.course2.description': 'Certificación en desarrollo e implementación de modelos de ML en la nube.',
        
        // Contact
        'contact.title': 'Contacto',
        'contact.intro': '¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo.',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.linkedin.value': 'Conectar en LinkedIn',
        
        // Footer
        'footer.about': 'Sobre este sitio',
        'footer.description': 'Portfolio personal desarrollado con tecnologías modernas y diseño Dark Modern SaaS.',
        'footer.quick': 'Enlaces rápidos',
        'footer.tech': 'Tecnologías',
        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav.about': 'About Me',
        'nav.projects': 'Projects',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': 'Hello, I\'m',
        'hero.subtitle': 'Developer specialized in Artificial Intelligence and Machine Learning',
        'hero.cta': 'Learn more',
        
        // Preview Cards
        'preview.about.title': 'About Me',
        'preview.about.desc': 'Learn about my journey, skills and professional passions',
        'preview.about.link': 'Explore →',
        'preview.projects.title': 'Projects',
        'preview.projects.desc': 'Explore my AI and Machine Learning projects',
        'preview.projects.link': 'View projects →',
        'preview.education.title': 'Education',
        'preview.education.desc': 'My academic background and certifications',
        'preview.education.link': 'View education →',
        'preview.contact.title': 'Contact',
        'preview.contact.desc': 'Let\'s connect and work together',
        'preview.contact.link': 'Get in touch →',
        
        // About
        'about.title': 'About Me',
        'about.intro.title': 'Introduction',
        'about.intro.text': 'I am a developer passionate about Artificial Intelligence and Machine Learning. I specialize in creating innovative solutions that combine cutting-edge technology with real-world practical applications.',
        'about.skills.title': 'Skills and Tech Stack',
        'about.skills.python': 'Python',
        'about.skills.ml': 'Machine Learning',
        'about.skills.dl': 'Deep Learning',
        'about.skills.tensorflow': 'TensorFlow / PyTorch',
        'about.interests.title': 'Interests',
        'about.interests.text': 'I am particularly interested in generative AI model development, natural language processing, and applying machine learning techniques to solve complex problems across various domains.',
        'about.values.title': 'Professional Values',
        'about.values.innovation': 'Constant innovation',
        'about.values.quality': 'Quality in every project',
        'about.values.learning': 'Continuous learning',
        'about.values.collaboration': 'Effective collaboration',
        
        // Projects
        'projects.title': 'Projects',
        'projects.0.title': 'AI Project Alpha',
        'projects.0.short': 'Advanced AI-powered data processing system',
        'projects.0.description': 'Complete artificial intelligence project that implements advanced data processing and machine learning techniques. The system uses deep learning models for predictive analysis and natural language processing.',
        'projects.0.technologies': 'Technologies: Python, TensorFlow, NLP, Scikit-learn',
        'projects.1.title': 'Machine Learning Tool',
        'projects.1.short': 'Tool for training ML models',
        'projects.1.description': 'Complete tool for developing and training machine learning models. Includes data pipeline, automatic preprocessing and results visualization.',
        'projects.1.technologies': 'Technologies: Python, Scikit-learn, Pandas, Matplotlib',
        'projects.2.title': 'Neural Network App',
        'projects.2.short': 'Deep neural networks application',
        'projects.2.description': 'Interactive application for designing and training deep neural networks. Allows experimenting with different architectures and visualizing the training process in real-time.',
        'projects.2.technologies': 'Technologies: PyTorch, Deep Learning, React, TensorBoard',
        'projects.3.title': 'Deep Learning Platform',
        'projects.3.short': 'Complete platform for DL model development',
        'projects.3.description': 'Cloud platform for developing, training and deploying deep learning models. Includes dataset management, experimentation and production model monitoring.',
        'projects.3.technologies': 'Technologies: Keras, TensorFlow, Cloud Computing, Docker',
        
        // Education
        'education.title': 'Education',
        'education.main.date': '2020 - 2024',
        'education.main.title': 'Bachelor\'s in Computer Engineering',
        'education.main.institution': 'University [Placeholder]',
        'education.main.description': 'Specialization in Artificial Intelligence and Machine Learning. Outstanding projects in data processing and predictive model development.',
        'education.course1.date': '2023',
        'education.course1.title': 'Deep Learning Certification',
        'education.course1.institution': 'Coursera / DeepLearning.AI',
        'education.course1.description': 'Complete specialization in deep neural networks and practical applications.',
        'education.course2.date': '2022',
        'education.course2.title': 'Machine Learning Engineer',
        'education.course2.institution': 'Google Cloud',
        'education.course2.description': 'Certification in developing and implementing ML models in the cloud.',
        
        // Contact
        'contact.title': 'Contact',
        'contact.intro': 'Have a project in mind? I\'d love to hear from you and collaborate.',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.linkedin.value': 'Connect on LinkedIn',
        
        // Footer
        'footer.about': 'About this site',
        'footer.description': 'Personal portfolio developed with modern technologies and Dark Modern SaaS design.',
        'footer.quick': 'Quick links',
        'footer.tech': 'Technologies',
        'footer.rights': 'All rights reserved.'
    }
};

// Detectar idioma basado en zona horaria
function detectLanguage() {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = new Date().getTimezoneOffset();
        
        // Zonas horarias de España (UTC+1 en invierno, UTC+2 en verano)
        // También detectar por nombre de timezone
        if (timezone.includes('Madrid') || timezone.includes('Europe/Madrid') || 
            timezone.includes('Barcelona') || timezone.includes('Canary')) {
            return 'es';
        }
        
        // Detectar por offset (UTC+1 o UTC+2)
        // getTimezoneOffset devuelve minutos, negativo para zonas adelantadas
        // España está en UTC+1 (offset -60) o UTC+2 (offset -120)
        if (offset <= -60 && offset >= -120) {
            // Verificar si está en la zona horaria europea central/occidental
            // Esto incluirá España y otros países, pero es una aproximación
            return 'es';
        }
        
        return 'en';
    } catch (error) {
        console.warn('Error detecting timezone, defaulting to English:', error);
        return 'en';
    }
}

// Obtener idioma actual (localStorage o detección)
function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && (saved === 'es' || saved === 'en')) {
        return saved;
    }
    return detectLanguage();
}

// Cambiar idioma
function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') {
        console.warn('Invalid language:', lang);
        return;
    }
    
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Actualizar display del selector de idioma
    const langDisplay = document.getElementById('langDisplay');
    if (langDisplay) {
        langDisplay.textContent = lang.toUpperCase();
    }
    
    // Disparar evento personalizado para que otros scripts reaccionen
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Obtener traducción
function t(key, lang = null) {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang]?.[key] || key;
}

// Inicializar i18n al cargar
function initI18n() {
    const lang = getCurrentLanguage();
    setLanguage(lang);
}

// Exportar funciones para uso global
window.i18n = {
    setLanguage,
    getCurrentLanguage,
    t,
    initI18n,
    translations
};

// Auto-inicializar cuando se carga el script
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

