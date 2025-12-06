// Sistema de Internacionalización (i18n)
// Detección automática por zona horaria y selector manual

const translations = {
    es: {
        // Navegación
        'nav.about': 'Sobre Mí',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.education': 'Educación',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.subtitle': 'Analista de Datos',
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
        'about.intro.text': 'Hola, soy Alberto. Matemático y apasionado de los datos.',
        'about.what.title': 'Lo que hago',
        'about.what.text': 'Tengo base de matemático y vocación de analista. Estudié Matemáticas porque me gusta la lógica y el pensamiento abstracto, y me especialicé en Big Data y Visual Analytics porque quería aplicar todo eso a problemas reales. Disfruto encontrando respuestas en los datos y traduciéndolas para que se entiendan fácil.',
        'about.origin.title': 'De dónde vengo',
        'about.origin.text': 'Soy una mezcla de culturas: nací en Madrid, crecí en Galicia y ahora vivo en Badajoz. Además, he tenido la suerte de vivir fuera dos veces: pasé un año en EE. UU. y otro en Polonia. Estas experiencias no solo me dieron un inglés fluido, sino que me enseñaron a espabilarme y adaptarme rápido a cualquier sitio o equipo de trabajo.',
        'about.personality.title': 'Cómo soy',
        'about.personality.text': 'Me considero una persona positiva y tranquila. Para desconectar del trabajo, necesito cambiar el chip: me ayuda mucho ir al gimnasio, dar paseos largos o simplemente pasar un buen rato con mis amigos. El surf también me gusta, pero al final, lo que realmente me carga las pilas para rendir bien es mantener ese equilibrio entre estar activo y disfrutar de mi gente.',
        'about.skills.title': 'Habilidades',
        'about.skills.languages': 'Lenguajes de Programación',
        'about.skills.tools': 'Herramientas y Tecnologías',
        'about.skills.other': 'Otras habilidades',
        
        // Projects
        'projects.title': 'Proyectos',
        'projects.inDevelopment': 'En desarrollo',
        'projects.0.title': 'Clustering en Fútbol Profesional',
        'projects.0.short': 'Análisis de rendimiento físico mediante Machine Learning no supervisado',
        'projects.0.description': 'Análisis de más de 380,000 registros de La Liga para descubrir patrones físicos invisibles en jugadores mediante técnicas de clustering (K-Means y SOM).',
        'projects.0.technologies': 'Tecnologías: Python, Scikit-learn, MiniSom, K-Means, SOM',
        'projects.1.title': 'Predicción de Valor de Mercado',
        'projects.1.short': 'Detectando ineficiencias del mercado con Machine Learning',
        'projects.1.description': 'Sistema de tasación objetivo fusionando datos de rendimiento, valoración técnica y datos económicos. Entrenamiento de IA para valorar 1,875 jugadores y detectar oportunidades de inversión.',
        'projects.1.technologies': 'Tecnologías: Python, XGBoost, Web Scraping, Lasso Regression',
        'projects.2.title': 'Reinforcement Learning en Sistemas Críticos',
        'projects.2.short': 'Reduciendo Tiempos de Traslado Sanitario mediante optimización de rutas con algoritmos de aprendizaje por refuerzo',
        'projects.2.description': 'Proyecto en desarrollo para optimizar rutas de traslado sanitario usando algoritmos de aprendizaje por refuerzo.',
        'projects.2.technologies': 'Tecnologías: Python, RL, En desarrollo',
        'projects.3.title': 'Próximamente',
        'projects.3.short': 'Siempre trabajando en nuevos proyectos',
        'projects.3.description': 'Plataforma cloud para el desarrollo, entrenamiento y despliegue de modelos de deep learning. Incluye gestión de datasets, experimentación y monitoreo de modelos en producción.',
        'projects.3.technologies': 'Tecnologías: Keras, TensorFlow, Cloud Computing, Docker',
        
        // Education
        'education.title': 'Educación',
        'education.master.date': '2024 - 2025',
        'education.master.title': 'Máster en Big Data & Visual Analytics',
        'education.master.institution': 'Universidad Internacional de La Rioja (UNIR)',
        'education.degree.date': '2018 - 2024',
        'education.degree.title': 'Grado en Matemáticas',
        'education.degree.institution': 'Universidad de Extremadura',
        'education.exchange.date': '2022 - 2023',
        'education.exchange.title': 'Grado en Matemáticas',
        'education.exchange.institution': 'Uniwersytet Zielonogórski',
        'education.highschool.date': '2016 - 2017',
        'education.highschool.title': 'Año Académico en EE.UU',
        'education.highschool.institution': 'St. John Paul II Catholic High School, Huntsville, Alabama, EE.UU',
        
        // Experience
        'experience.title': 'Experiencia Profesional',
        'experience.setenova.date': 'Febrero 2025 - Actualidad',
        'experience.setenova.title': 'Analista e Ingeniero de Datos Junior',
        'experience.setenova.company': 'Setenova',
        'experience.setenova.desc1': 'Participación activa en proyectos variados, colaborando en equipos multidisciplinarios y asumiendo responsabilidades en todas las fases del ciclo de vida del dato, desde la recolección hasta el desarrollo de soluciones.',
        'experience.setenova.desc5': 'Dirección de proyectos y coordinación de equipos, liderando iniciativas y asegurando la entrega exitosa de objetivos.',
        'experience.setenova.desc2': 'Diseño y desarrollo de flujos de trabajo automatizados con Airflow, optimizando procesos y asegurando la eficiencia operativa.',
        'experience.setenova.desc3': 'Programación y automatización de tareas con Python, asegurando la máxima calidad en la recolección, limpieza y procesamiento de la información, así como la gestión y consulta de bases de datos con PostgreSQL para garantizar la integridad y disponibilidad de los datos.',
        'experience.setenova.desc4': 'Integración de herramientas de inteligencia artificial para el análisis avanzado de datos, impulsando la innovación y la toma de decisiones basadas en información precisa.',
        
        // Languages
        'languages.title': 'Idiomas',
        'languages.spanish.name': 'Español',
        'languages.spanish.level': 'Nativo',
        'languages.galician.name': 'Gallego',
        'languages.galician.level': 'Nativo',
        'languages.english.name': 'Inglés',
        'languages.english.level': 'Nivel C1',
        
        // Certifications
        'certifications.title': 'Certificaciones',
        'certifications.aws.title': 'AWS Certified Cloud Practitioner',
        'certifications.english.title': 'Certificate in Advanced English (C1)',
        'certifications.azure.title': 'Azure Fundamentals AZ-900',
        
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
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': 'Hello, I\'m',
        'hero.subtitle': 'Data Analyst',
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
        'about.intro.text': 'Hello, I\'m Alberto. Mathematician and data enthusiast.',
        'about.what.title': 'What I do',
        'about.what.text': 'I have a mathematician\'s foundation and an analyst\'s vocation. I studied Mathematics because I like logic and abstract thinking, and I specialized in Big Data and Visual Analytics because I wanted to apply all of that to real problems. I enjoy finding answers in data and translating them so they\'re easy to understand.',
        'about.origin.title': 'Where I come from',
        'about.origin.text': 'I\'m a mix of cultures: I was born in Madrid, grew up in Galicia and now live in Badajoz. Plus, I\'ve been lucky enough to live abroad twice: I spent a year in the USA and another in Poland. These experiences not only gave me fluent English, but also taught me to be resourceful and adapt quickly to any place or work team.',
        'about.personality.title': 'How I am',
        'about.personality.text': 'I consider myself a positive and calm person. To disconnect from work, I need to switch gears: going to the gym, taking long walks, or simply having a good time with my friends helps me a lot. I also like surfing, but in the end, what really recharges my batteries to perform well is maintaining that balance between being active and enjoying my people.',
        'about.skills.title': 'Skills',
        'about.skills.languages': 'Programming Languages',
        'about.skills.tools': 'Tools and Technologies',
        'about.skills.other': 'Other skills',
        
        // Projects
        'projects.title': 'Projects',
        'projects.inDevelopment': 'In development',
        'projects.0.title': 'Clustering in Professional Football',
        'projects.0.short': 'Physical performance analysis through unsupervised Machine Learning',
        'projects.0.description': 'Analysis of over 380,000 records from La Liga to discover invisible physical patterns in players using clustering techniques (K-Means and SOM).',
        'projects.0.technologies': 'Technologies: Python, Scikit-learn, MiniSom, K-Means, SOM',
        'projects.1.title': 'Market Value Prediction',
        'projects.1.short': 'Detecting market inefficiencies with Machine Learning',
        'projects.1.description': 'Objective valuation system merging performance data, technical ratings and economic data. AI training to value 1,875 players and detect investment opportunities.',
        'projects.1.technologies': 'Technologies: Python, XGBoost, Web Scraping, Lasso Regression',
        'projects.2.title': 'Reinforcement Learning in Critical Systems',
        'projects.2.short': 'Reducing Healthcare Transfer Times through route optimization with reinforcement learning algorithms',
        'projects.2.description': 'Project in development to optimize healthcare transfer routes using reinforcement learning algorithms.',
        'projects.2.technologies': 'Technologies: Python, RL, In development',
        'projects.3.title': 'Coming Soon',
        'projects.3.short': 'Always working on new projects',
        'projects.3.description': 'Cloud platform for developing, training and deploying deep learning models. Includes dataset management, experimentation and production model monitoring.',
        'projects.3.technologies': 'Technologies: Keras, TensorFlow, Cloud Computing, Docker',
        
        // Education
        'education.title': 'Education',
        'education.master.date': '2024 - 2025',
        'education.master.title': 'Master in Big Data & Visual Analytics',
        'education.master.institution': 'Universidad Internacional de La Rioja (UNIR)',
        'education.degree.date': '2018 - 2024',
        'education.degree.title': 'Bachelor\'s in Mathematics',
        'education.degree.institution': 'Universidad de Extremadura',
        'education.exchange.date': '2022 - 2023',
        'education.exchange.title': 'Bachelor\'s in Mathematics',
        'education.exchange.institution': 'Uniwersytet Zielonogórski',
        'education.highschool.date': '2016 - 2017',
        'education.highschool.title': 'Academic Year in USA',
        'education.highschool.institution': 'St. John Paul II Catholic High School, Huntsville, Alabama, USA',
        
        // Experience
        'experience.title': 'Professional Experience',
        'experience.setenova.date': 'February 2025 - Present',
        'experience.setenova.title': 'Junior Data Analyst and Engineer',
        'experience.setenova.company': 'Setenova',
        'experience.setenova.desc1': 'Active participation in various projects, collaborating in multidisciplinary teams and assuming responsibilities in all phases of the data lifecycle, from collection to solution development.',
        'experience.setenova.desc5': 'Project management and team coordination, leading initiatives and ensuring successful delivery of objectives.',
        'experience.setenova.desc2': 'Design and development of automated workflows with Airflow, optimizing processes and ensuring operational efficiency.',
        'experience.setenova.desc3': 'Programming and task automation with Python, ensuring maximum quality in data collection, cleaning and processing, as well as database management and querying with PostgreSQL to guarantee data integrity and availability.',
        'experience.setenova.desc4': 'Integration of artificial intelligence tools for advanced data analysis, driving innovation and data-driven decision making.',
        
        // Languages
        'languages.title': 'Languages',
        'languages.spanish.name': 'Spanish',
        'languages.spanish.level': 'Native',
        'languages.galician.name': 'Galician',
        'languages.galician.level': 'Native',
        'languages.english.name': 'English',
        'languages.english.level': 'C1 Level',
        
        // Certifications
        'certifications.title': 'Certifications',
        'certifications.aws.title': 'AWS Certified Cloud Practitioner',
        'certifications.english.title': 'Certificate in Advanced English (C1)',
        'certifications.azure.title': 'Azure Fundamentals AZ-900',
        
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

