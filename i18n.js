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
        'about.origin.text': 'Soy una mezcla de culturas: nací en Madrid, crecí en Galicia y ahora vivo en Badajoz. Además, he tenido la suerte de vivir fuera dos veces: pasé un año en EE. UU. y otro en Polonia. Estas experiencias no solo me dieron un inglés fluido, sino que me enseñaron adaptarme rápido a cualquier sitio o equipo de trabajo.',
        'about.personality.title': 'Cómo soy',
        'about.personality.text': 'Me considero una persona positiva y tranquila. Para desconectar del trabajo, necesito cambiar el chip: me ayuda mucho ir al gimnasio, dar paseos largos o simplemente pasar un buen rato con mis amigos. El surf también me gusta, pero al final, lo que realmente me carga las pilas para rendir bien es mantener ese equilibrio entre estar activo y disfrutar de mi gente.',
        'about.skills.title': 'Habilidades',
        'about.skills.languages': 'Lenguajes de Programación',
        'about.skills.tools': 'Herramientas y Tecnologías',
        'about.skills.other': 'Otras habilidades',
        
        // Projects
        'projects.title': 'Proyectos',
        'projects.inDevelopment': 'En desarrollo',
        'projects.viewProject': 'Ver proyecto',
        'projects.0.title': 'Clustering en Fútbol Profesional',
        'projects.0.short': 'Análisis de rendimiento físico mediante Machine Learning no supervisado',
        'projects.0.description': 'Análisis de más de 380,000 registros de La Liga para descubrir patrones físicos invisibles en jugadores mediante técnicas de clustering (K-Means y SOM).',
        'projects.0.technologies': 'Tecnologías: Python, Scikit-learn, MiniSom, K-Means, SOM',
        'projects.1.title': 'Predicción de Valor de Mercado',
        'projects.1.short': 'Detectando ineficiencias del mercado con Machine Learning',
        'projects.1.description': 'Sistema de tasación objetivo fusionando datos de rendimiento, valoración técnica y datos económicos. Entrenamiento de IA para valorar 1,875 jugadores y detectar oportunidades de inversión.',
        'projects.1.technologies': 'Tecnologías: Python, XGBoost, Web Scraping, Lasso Regression',
        'projects.2.title': 'Algoritmos que Salvan Vidas',
        'projects.2.short': 'Optimización Inteligente de Rutas de Emergencia',
        'projects.2.description': 'Sistema de enrutamiento inteligente para ambulancias usando Inteligencia Artificial y modelado basado en grafos. El algoritmo asigna pesos a variables de la vía para generar rutas que eviten puntos negros de retención.',
        'projects.2.technologies': 'Tecnologías: Python, IA, Teoría de Grafos',
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
        'footer.rights': 'Todos los derechos reservados.',

        // Project Pages
        'project.back': 'Volver a Proyectos',
        'project.github': 'Repositorio GitHub',
        'project.web': 'Página Web',

        // Project: Valor de Mercado
        'project.futbol.title': 'Predicción de Valor de Mercado en Fútbol',
        'project.futbol.subtitle': 'Detectando Ineficiencias con Machine Learning',
        'project.futbol.challenge.title': '1. El Desafío: Objetivar lo Subjetivo',
        'project.futbol.challenge.quote': 'El mercado de fichajes mueve miles de millones, pero a menudo se basa en la intuición o la especulación mediática. ¿Podemos usar datos para calcular el precio \'justo\' de un jugador y detectar cuándo el mercado se equivoca?',
        'project.futbol.challenge.text': 'En este proyecto personal, desarrollé un sistema de tasación objetivo fusionando tres mundos de datos: rendimiento real (Understat), valoración técnica de expertos (SoFIFA) y datos económicos (Transfermarkt). El objetivo: entrenar una IA capaz de valorar a 1,875 jugadores de las grandes ligas y, lo más importante, auditar al mercado para descubrir oportunidades de inversión.',
        'project.futbol.tech.title': '2. Stack Tecnológico',
        'project.futbol.tech.text': 'Un flujo de trabajo "End-to-End" centrado en la ingeniería de datos y el modelado predictivo:',
        'project.futbol.methodology.title': '3. Metodología: La Búsqueda del Modelo Perfecto',
        'project.futbol.methodology.text': 'Planteé el problema desde dos enfoques para ver cuál predecía mejor el precio:',
        'project.futbol.findings.title': '4. Hallazgos Clave: Las Ineficiencias del Mercado',
        'project.futbol.visual.title': '5. Presentación Visual',
        'project.futbol.chart.equipos': 'Top 10 Equipos por Mayor Diferencia Relativa: Comparación entre valores predichos y reales. Barras verdes indican sobreestimación (Pred > Real), barras rojas indican subestimación (Pred < Real).',
        'project.futbol.chart.nacionalidades': 'Top 10 Nacionalidades por Mayor Diferencia Relativa: Análisis de discrepancias medias por nacionalidad. Islandia presenta la mayor desviación negativa (-14.3%), indicando que los jugadores de esta nacionalidad rinden significativamente mejor de lo que el modelo predijo.',
        'project.futbol.tech.data': 'Data Acquisition',
        'project.futbol.tech.feature': 'Feature Engineering',
        'project.futbol.tech.modeling': 'Modelado',
        'project.futbol.tech.kpis': 'KPIs de Negocio',
        'project.futbol.tech.data.list1': 'Web Scraping masivo',
        'project.futbol.tech.data.list2': 'Integración de fuentes heterogéneas',
        'project.futbol.tech.data.list3': 'Atributos técnicos (SoFIFA)',
        'project.futbol.tech.data.list4': 'Métricas de rendimiento (xG/xA)',
        'project.futbol.tech.data.list5': 'Datos financieros (Transfermarkt)',
        'project.futbol.tech.feature.list1': 'Normalización de variables',
        'project.futbol.tech.feature.list2': 'Selección mediante Lasso Regression',
        'project.futbol.tech.feature.list3': 'Análisis de correlación',
        'project.futbol.tech.modeling.list1': 'Regresión Lineal',
        'project.futbol.tech.modeling.list2': 'SVR (Support Vector Regression)',
        'project.futbol.tech.modeling.list3': 'Redes Neuronales',
        'project.futbol.tech.modeling.list4': 'XGBoost',
        'project.futbol.tech.kpis.list1': 'DRV (Diferencia Relativa de Valor)',
        'project.futbol.tech.kpis.list2': 'Métrica propia para medir discrepancias',
        'project.futbol.tech.kpis.list3': 'Análisis de ineficiencias del mercado',
        'project.futbol.methodology.micro': 'Enfoque de Micro-Segmentación',
        'project.futbol.methodology.micro.text': 'Probé dividir a los jugadores por posición y por "clústeres de calidad" (usando K-Means) para entrenar modelos especializados.',
        'project.futbol.methodology.global': 'Enfoque Global',
        'project.futbol.methodology.global.text': 'Entrené un único modelo robusto con todos los datos disponibles.',
        'project.futbol.methodology.result': 'El Resultado:',
        'project.futbol.methodology.result.text': 'Contra mi hipótesis inicial, el enfoque global utilizando XGBoost fue muy superior (R² ≈ 0.83). Aprendí que segmentar demasiado los datos reducía la capacidad de aprendizaje del algoritmo, mientras que el modelo global era capaz de capturar mejor las complejidades del mercado al tener más ejemplos.',
        'project.futbol.findings.intro': 'Esta fue la parte más valiosa del proyecto. Al comparar mi predicción objetiva (IA) contra el precio real de Transfermarkt, descubrí sesgos sistemáticos en el fútbol actual:',
        'project.futbol.findings.nationality.title': 'A. El "Impuesto" de la Nacionalidad',
        'project.futbol.findings.nationality.text': 'El modelo detectó que el pasaporte influye desproporcionadamente en el precio.',
        'project.futbol.findings.nationality.opportunity': 'Oportunidad de Mercado',
        'project.futbol.findings.nationality.opportunity.text': 'Nacionalidades como la islandesa aparecieron infravaloradas sistemáticamente un -14.3% respecto a su rendimiento real.',
        'project.futbol.findings.nationality.overprice': 'Sobreprecio',
        'project.futbol.findings.nationality.overprice.text': 'Por el contrario, otras nacionalidades cotizan por encima de lo que justifican sus estadísticas. Esto sugiere que los directores deportivos podrían ahorrar presupuesto scouting en mercados "menos de moda".',
        'project.futbol.findings.clubs.title': 'B. Clubes Sobrevalorados vs. Infravalorados',
        'project.futbol.findings.clubs.text': 'Analizando el indicador DRV por equipos, identifiqué qué plantillas están cotizando por encima o por debajo de su valor real:',
        'project.futbol.findings.clubs.under': 'Plantillas Infravaloradas',
        'project.futbol.findings.clubs.under.text': 'Equipos como el RC Lens (+9.4%) o el Real Betis (+9.1%) tienen jugadores que rinden muy por encima de su precio de mercado actual. Son plantillas muy eficientes.',
        'project.futbol.findings.clubs.over': 'Plantillas Sobrevaloradas',
        'project.futbol.findings.clubs.over.text': 'Equipos como el Ipswich Town (-9.2%) o los Wolves (-7.2%) tienen precios de mercado inflados que no se corresponden con sus métricas objetivas de rendimiento y calidad.',
        'project.futbol.findings.market.title': 'C. ¿Qué paga realmente el mercado?',
        'project.futbol.findings.market.text': 'El análisis de correlación reveló que el mercado paga por futuro, no por presente. Las variables que más influyen en el precio no son los goles actuales (0.49), sino el Potencial (0.69) y el Rating General (0.63). Esto confirma que el mercado de fichajes es especulativo: se paga por lo que el jugador puede llegar a ser.',
        'project.futbol.findings.sponsor.title': 'D. El Efecto Patrocinio',
        'project.futbol.findings.sponsor.text': 'Descubrí una curiosidad de marketing: los jugadores patrocinados por marcas nicho (ej. Skechers) suelen estar infravalorados (+6.9% de valor real vs precio mercado), lo que podría indicar una oportunidad para fichar talento emergente antes de que firmen por grandes marcas.',

        // Project: Ambulancias
        'project.ambulancias.title': 'Algoritmos que Salvan Vidas',
        'project.ambulancias.subtitle': 'Optimización Inteligente de Rutas de Emergencia',
        'project.ambulancias.intro.title': '1. Introducción Teórica: La Geometría de la Emergencia',
        'project.ambulancias.intro.quote': 'En la asistencia sanitaria urgente, la distancia más corta entre dos puntos no siempre es la más rápida. La infraestructura urbana actual presenta obstáculos invisibles para los vehículos de emergencia: cruces con baja visibilidad, aislamiento acústico en vehículos modernos y la inevitable congestión en intersecciones principales.',
        'project.ambulancias.intro.text': 'La Teoría de Grafos aplicada a la movilidad urbana nos permite reinterpretar el mapa de la ciudad no como un plano estático, sino como una red dinámica de nodos y aristas. El reto no es solo aumentar la velocidad del vehículo, sino reducir la fricción del entorno, calculando matemáticamente el \'coste\' temporal de cada maniobra, cada semáforo y cada giro.',
        'project.ambulancias.about.title': '2. Sobre el Proyecto',
        'project.ambulancias.about.text1': 'Nuestro sistema propone un cambio de paradigma en la navegación de ambulancias. Utilizando Inteligencia Artificial y modelado basado en grafos, estamos desarrollando un algoritmo de enrutamiento que va más allá del GPS tradicional.',
        'project.ambulancias.about.text2': 'A diferencia de los navegadores convencionales, nuestro modelo asigna un \'peso\' o puntuación a cada variable de la vía:',
        'project.ambulancias.about.goal': 'El objetivo es generar rutas que, aunque puedan recorrer más metros, eviten los \'puntos negros\' de retención (cruces conflictivos), garantizando un trayecto fluido y continuo donde cada segundo ganado se traduce en oportunidades de supervivencia.',
        'project.ambulancias.status.title': '3. Estado Actual',
        'project.ambulancias.status.text': 'El proyecto se encuentra en fase de conceptualización y desarrollo del algoritmo base, tomando como laboratorio de pruebas la complejidad vial de ciudades como Badajoz. Estamos entrenando al modelo para \'entender\' la ciudad como un organismo vivo.',
        'project.ambulancias.coming': 'PRÓXIMAMENTE',
        'project.ambulancias.coming.text': 'Este proyecto está en desarrollo activo. Pronto compartiremos más detalles sobre el algoritmo, resultados y visualizaciones.',
        'project.ambulancias.topology.title': 'Topología de la Calle',
        'project.ambulancias.topology.text': 'Ponderación basada en límites de velocidad y número de carriles disponibles.',
        'project.ambulancias.complexity.title': 'Complejidad del Nodo',
        'project.ambulancias.complexity.text': 'Análisis de los cruces según el número de vías convergentes y la probabilidad de bloqueo.',
        'project.ambulancias.maneuver.title': 'Coste de Maniobra',
        'project.ambulancias.maneuver.text': 'Penalización inteligente de giros complejos (como giros a la izquierda frente a la fluidez de la derecha).',
        'project.ambulancias.congestion.title': 'Congestión en Tiempo Real',
        'project.ambulancias.congestion.text': 'Adaptación dinámica del grafo según la densidad del tráfico.',

        // Project: Clustering Fútbol
        'project.clustering.title': 'Clustering en Fútbol Profesional',
        'project.clustering.subtitle': 'Análisis de Rendimiento Físico de los Jugadores mediante Machine Learning no supervisado',
        'project.clustering.challenge.title': '1. El Desafío',
        'project.clustering.challenge.quote': 'En el fútbol moderno, los datos lo son todo. Pero, ¿realmente define la posición teórica de un jugador su impacto real en el campo?',
        'project.clustering.challenge.text': 'Como apasionado del deporte y el análisis de datos, decidí ir más allá de las etiquetas tradicionales (defensa, medio, delantero). Mi objetivo fue utilizar Machine Learning no supervisado para descubrir si existen \'tipos de jugadores\' invisibles basados puramente en su rendimiento físico, analizando más de 380,000 registros de la temporada 2022-2023 de La Liga (1ª y 2ª División).',
        'project.clustering.tech.title': '2. Stack Tecnológico',
        'project.clustering.tech.text': 'Para este proyecto utilicé un enfoque científico basado en Python, gestionando grandes volúmenes de datos deportivos:',
        'project.clustering.tech.language': 'Lenguaje',
        'project.clustering.tech.data': 'Data Engineering',
        'project.clustering.tech.models': 'Modelos de IA',
        'project.clustering.tech.data.list1': 'Limpieza y estandarización de datasets masivos',
        'project.clustering.tech.data.list2': 'Registros por intervalos de 5 minutos',
        'project.clustering.tech.data.list3': 'Más de 380,000 registros procesados',
        'project.clustering.tech.models.list1': 'K-Means Clustering',
        'project.clustering.tech.models.list2': 'Redes Neuronales (SOM)',
        'project.clustering.methodology.title': '3. ¿Qué hice? (La Metodología Simplificada)',
        'project.clustering.methodology.text': 'El proyecto se centró en procesar métricas físicas puras, ignorando goles o asistencias. Analicé distancias recorridas a distintos rangos de velocidad y si estas han sido recorridas con y sin balón. Para encontrar patrones, utilicé técnicas de Clustering.',
        'project.clustering.methodology.what.title': '¿Qué es el Clustering?',
        'project.clustering.methodology.what.text1': 'Tal como definí en el proyecto, el Clustering es una técnica de aprendizaje no supervisado. Su objetivo no es predecir un resultado conocido, sino encontrar patrones "invisibles" dentro de los datos agrupándolos por similitud.',
        'project.clustering.methodology.what.text2': 'En lugar de imponer una conclusión previa (como decirle al modelo "esto es un defensa"), el algoritmo analiza la estructura intrínseca de los datos para averiguar quién se parece a quién. De esta forma, simplemente analizando los esfuerzos físicos realizados durante el encuentro (distancias, velocidades, sprints), el modelo es capaz de agrupar a los futbolistas que comparten el mismo ADN físico, independientemente de su dorsal.',
        'project.clustering.methodology.algorithms': 'Los algoritmos que comparé:',
        'project.clustering.methodology.kmeans.title': 'K-Means (El clásico)',
        'project.clustering.methodology.kmeans.text': 'Funciona definiendo "centros" de gravedad y agrupando a los jugadores alrededor del centro más cercano. Es rápido y eficiente, ideal para diferenciar grupos muy marcados.',
        'project.clustering.methodology.som.title': 'Mapas Autoorganizados o SOM (La Red Neuronal)',
        'project.clustering.methodology.som.text': 'Es una técnica más avanzada basada en redes neuronales. A diferencia de K-Means, el SOM crea un "mapa" visual donde coloca a los jugadores similares cerca unos de otros, preservando la relación topológica entre ellos. Es excelente para detectar matices sutiles en datos complejos.',
        'project.clustering.insights.title': '4. Insights y Hallazgos',
        'project.clustering.insights.intro': 'Más allá de los algoritmos, el análisis reveló patrones tácticos sobre cómo ha evolucionado el fútbol físico:',
        'project.clustering.insights.lateral.title': 'La desaparición del "Lateral" clásico',
        'project.clustering.insights.lateral.text': 'El modelo agrupó frecuentemente a laterales y delanteros en el mismo clúster. Esto valida con datos la tendencia del fútbol moderno: los carrileros actuales tienen una exigencia de explosividad, sprint y recorrido prácticamente idéntica a la de un extremo o delantero. Físicamente, son intercambiables.',
        'project.clustering.insights.profiles.title': 'Perfiles especializados vs. Versátiles',
        'project.clustering.insights.profiles.text': 'Mientras que los defensas centrales (derechos e izquierdos) mostraron una gran cohesión (siempre caían en el mismo grupo), indicando un rol físico muy especializado y estático, los mediocentros mostraron mayor dispersión, sugiriendo que la categoría "centrocampista" es demasiado vaga para describir el despliegue físico real.',
        'project.clustering.insights.scouting.title': 'Scouting basado en el rendimiento, no en la posición',
        'project.clustering.insights.scouting.text': 'Al ignorar la etiqueta de la posición, este modelo permite identificar jugadores infravalorados. Si un equipo busca un extremo caro, podría usar este modelo para encontrar un lateral más económico que ofrece exactamente el mismo despliegue físico de alta intensidad.',
        'project.clustering.insights.injuries.title': 'Potencial en prevención de lesiones',
        'project.clustering.insights.injuries.text': 'Detectar cambios de clúster de un jugador a lo largo de la temporada podría servir como sistema de alerta temprana. Si un jugador explosivo empieza a caer en clústeres de "bajo rendimiento" sin motivo aparente, podría indicar fatiga acumulada o riesgo de lesión.'
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
        'projects.viewProject': 'View project',
        'projects.0.title': 'Clustering in Professional Football',
        'projects.0.short': 'Physical performance analysis through unsupervised Machine Learning',
        'projects.0.description': 'Analysis of over 380,000 records from La Liga to discover invisible physical patterns in players using clustering techniques (K-Means and SOM).',
        'projects.0.technologies': 'Technologies: Python, Scikit-learn, MiniSom, K-Means, SOM',
        'projects.1.title': 'Market Value Prediction',
        'projects.1.short': 'Detecting market inefficiencies with Machine Learning',
        'projects.1.description': 'Objective valuation system merging performance data, technical ratings and economic data. AI training to value 1,875 players and detect investment opportunities.',
        'projects.1.technologies': 'Technologies: Python, XGBoost, Web Scraping, Lasso Regression',
        'projects.2.title': 'Algorithms that Save Lives',
        'projects.2.short': 'Intelligent Emergency Route Optimization',
        'projects.2.description': 'Intelligent routing system for ambulances using Artificial Intelligence and graph-based modeling. The algorithm assigns weights to road variables to generate routes that avoid traffic bottlenecks.',
        'projects.2.technologies': 'Technologies: Python, AI, Graph Theory',
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
        'footer.rights': 'All rights reserved.',

        // Project Pages
        'project.back': 'Back to Projects',
        'project.github': 'GitHub Repository',
        'project.web': 'Web Page',

        // Project: Valor de Mercado
        'project.futbol.title': 'Football Market Value Prediction',
        'project.futbol.subtitle': 'Detecting Market Inefficiencies with Machine Learning',
        'project.futbol.challenge.title': '1. The Challenge: Objectifying the Subjective',
        'project.futbol.challenge.quote': 'The transfer market moves billions, but often relies on intuition or media speculation. Can we use data to calculate the \'fair\' price of a player and detect when the market is wrong?',
        'project.futbol.challenge.text': 'In this personal project, I developed an objective valuation system by merging three data worlds: real performance (Understat), expert technical ratings (SoFIFA) and economic data (Transfermarkt). The goal: train an AI capable of valuing 1,875 players from major leagues and, most importantly, audit the market to discover investment opportunities.',
        'project.futbol.tech.title': '2. Tech Stack',
        'project.futbol.tech.text': 'An "End-to-End" workflow focused on data engineering and predictive modeling:',
        'project.futbol.methodology.title': '3. Methodology: The Search for the Perfect Model',
        'project.futbol.methodology.text': 'I approached the problem from two perspectives to see which predicted price better:',
        'project.futbol.findings.title': '4. Key Findings: Market Inefficiencies',
        'project.futbol.visual.title': '5. Visual Presentation',
        'project.futbol.chart.equipos': 'Top 10 Teams by Highest Relative Difference: Comparison between predicted and actual values. Green bars indicate overestimation (Pred > Real), red bars indicate underestimation (Pred < Real).',
        'project.futbol.chart.nacionalidades': 'Top 10 Nationalities by Highest Relative Difference: Analysis of average discrepancies by nationality. Iceland shows the highest negative deviation (-14.3%), indicating that players of this nationality perform significantly better than the model predicted.',
        'project.futbol.tech.data': 'Data Acquisition',
        'project.futbol.tech.feature': 'Feature Engineering',
        'project.futbol.tech.modeling': 'Modeling',
        'project.futbol.tech.kpis': 'Business KPIs',
        'project.futbol.tech.data.list1': 'Massive Web Scraping',
        'project.futbol.tech.data.list2': 'Integration of heterogeneous sources',
        'project.futbol.tech.data.list3': 'Technical attributes (SoFIFA)',
        'project.futbol.tech.data.list4': 'Performance metrics (xG/xA)',
        'project.futbol.tech.data.list5': 'Financial data (Transfermarkt)',
        'project.futbol.tech.feature.list1': 'Variable normalization',
        'project.futbol.tech.feature.list2': 'Selection via Lasso Regression',
        'project.futbol.tech.feature.list3': 'Correlation analysis',
        'project.futbol.tech.modeling.list1': 'Linear Regression',
        'project.futbol.tech.modeling.list2': 'SVR (Support Vector Regression)',
        'project.futbol.tech.modeling.list3': 'Neural Networks',
        'project.futbol.tech.modeling.list4': 'XGBoost',
        'project.futbol.tech.kpis.list1': 'DRV (Relative Value Difference)',
        'project.futbol.tech.kpis.list2': 'Custom metric to measure discrepancies',
        'project.futbol.tech.kpis.list3': 'Market inefficiency analysis',
        'project.futbol.methodology.micro': 'Micro-Segmentation Approach',
        'project.futbol.methodology.micro.text': 'I tried dividing players by position and by "quality clusters" (using K-Means) to train specialized models.',
        'project.futbol.methodology.global': 'Global Approach',
        'project.futbol.methodology.global.text': 'I trained a single robust model with all available data.',
        'project.futbol.methodology.result': 'The Result:',
        'project.futbol.methodology.result.text': 'Against my initial hypothesis, the global approach using XGBoost was far superior (R² ≈ 0.83). I learned that over-segmenting the data reduced the algorithm\'s learning capacity, while the global model was better able to capture market complexities by having more examples.',
        'project.futbol.findings.intro': 'This was the most valuable part of the project. By comparing my objective prediction (AI) against Transfermarkt\'s real price, I discovered systematic biases in current football:',
        'project.futbol.findings.nationality.title': 'A. The Nationality "Tax"',
        'project.futbol.findings.nationality.text': 'The model detected that passport disproportionately influences price.',
        'project.futbol.findings.nationality.opportunity': 'Market Opportunity',
        'project.futbol.findings.nationality.opportunity.text': 'Nationalities like Icelandic appeared systematically undervalued by -14.3% relative to their real performance.',
        'project.futbol.findings.nationality.overprice': 'Overpricing',
        'project.futbol.findings.nationality.overprice.text': 'On the contrary, other nationalities trade above what their statistics justify. This suggests that sports directors could save scouting budget in "less trendy" markets.',
        'project.futbol.findings.clubs.title': 'B. Overvalued vs. Undervalued Clubs',
        'project.futbol.findings.clubs.text': 'By analyzing the DRV indicator by teams, I identified which squads are trading above or below their real value:',
        'project.futbol.findings.clubs.under': 'Undervalued Squads',
        'project.futbol.findings.clubs.under.text': 'Teams like RC Lens (+9.4%) or Real Betis (+9.1%) have players who perform well above their current market price. They are very efficient squads.',
        'project.futbol.findings.clubs.over': 'Overvalued Squads',
        'project.futbol.findings.clubs.over.text': 'Teams like Ipswich Town (-9.2%) or Wolves (-7.2%) have inflated market prices that do not correspond to their objective performance and quality metrics.',
        'project.futbol.findings.market.title': 'C. What does the market really pay for?',
        'project.futbol.findings.market.text': 'Correlation analysis revealed that the market pays for the future, not the present. The variables that most influence price are not current goals (0.49), but Potential (0.69) and Overall Rating (0.63). This confirms that the transfer market is speculative: you pay for what the player can become.',
        'project.futbol.findings.sponsor.title': 'D. The Sponsorship Effect',
        'project.futbol.findings.sponsor.text': 'I discovered a marketing curiosity: players sponsored by niche brands (e.g. Skechers) tend to be undervalued (+6.9% real value vs market price), which could indicate an opportunity to sign emerging talent before they sign with major brands.',

        // Project: Ambulancias
        'project.ambulancias.title': 'Algorithms that Save Lives',
        'project.ambulancias.subtitle': 'Intelligent Emergency Route Optimization',
        'project.ambulancias.intro.title': '1. Theoretical Introduction: The Geometry of Emergency',
        'project.ambulancias.intro.quote': 'In urgent healthcare assistance, the shortest distance between two points is not always the fastest. Current urban infrastructure presents invisible obstacles for emergency vehicles: low-visibility intersections, acoustic isolation in modern vehicles, and inevitable congestion at main intersections.',
        'project.ambulancias.intro.text': 'Graph Theory applied to urban mobility allows us to reinterpret the city map not as a static plane, but as a dynamic network of nodes and edges. The challenge is not just to increase vehicle speed, but to reduce environmental friction, mathematically calculating the temporal \'cost\' of each maneuver, each traffic light, and each turn.',
        'project.ambulancias.about.title': '2. About the Project',
        'project.ambulancias.about.text1': 'Our system proposes a paradigm shift in ambulance navigation. Using Artificial Intelligence and graph-based modeling, we are developing a routing algorithm that goes beyond traditional GPS.',
        'project.ambulancias.about.text2': 'Unlike conventional navigators, our model assigns a \'weight\' or score to each road variable:',
        'project.ambulancias.about.goal': 'The goal is to generate routes that, although they may travel more meters, avoid \'black spots\' of retention (conflictive intersections), guaranteeing a fluid and continuous journey where every second gained translates into survival opportunities.',
        'project.ambulancias.status.title': '3. Current Status',
        'project.ambulancias.status.text': 'The project is in the conceptualization and base algorithm development phase, using the road complexity of cities like Badajoz as a testing laboratory. We are training the model to \'understand\' the city as a living organism.',
        'project.ambulancias.coming': 'COMING SOON',
        'project.ambulancias.coming.text': 'This project is in active development. We will soon share more details about the algorithm, results and visualizations.',
        'project.ambulancias.topology.title': 'Street Topology',
        'project.ambulancias.topology.text': 'Weighting based on speed limits and number of available lanes.',
        'project.ambulancias.complexity.title': 'Node Complexity',
        'project.ambulancias.complexity.text': 'Analysis of intersections according to the number of converging roads and the probability of blockage.',
        'project.ambulancias.maneuver.title': 'Maneuver Cost',
        'project.ambulancias.maneuver.text': 'Intelligent penalty for complex turns (such as left turns versus right turn fluidity).',
        'project.ambulancias.congestion.title': 'Real-Time Congestion',
        'project.ambulancias.congestion.text': 'Dynamic adaptation of the graph according to traffic density.',

        // Project: Clustering Fútbol
        'project.clustering.title': 'Clustering in Professional Football',
        'project.clustering.subtitle': 'Analysis of Player Physical Performance through Unsupervised Machine Learning',
        'project.clustering.challenge.title': '1. The Challenge',
        'project.clustering.challenge.quote': 'In modern football, data is everything. But does a player\'s theoretical position really define their real impact on the field?',
        'project.clustering.challenge.text': 'As a sports and data analysis enthusiast, I decided to go beyond traditional labels (defender, midfielder, forward). My goal was to use Unsupervised Machine Learning to discover if there are invisible \'player types\' based purely on their physical performance, analyzing more than 380,000 records from the 2022-2023 season of La Liga (1st and 2nd Division).',
        'project.clustering.tech.title': '2. Tech Stack',
        'project.clustering.tech.text': 'For this project I used a scientific approach based on Python, managing large volumes of sports data:',
        'project.clustering.tech.language': 'Language',
        'project.clustering.tech.data': 'Data Engineering',
        'project.clustering.tech.models': 'AI Models',
        'project.clustering.tech.data.list1': 'Cleaning and standardization of massive datasets',
        'project.clustering.tech.data.list2': 'Records at 5-minute intervals',
        'project.clustering.tech.data.list3': 'More than 380,000 records processed',
        'project.clustering.tech.models.list1': 'K-Means Clustering',
        'project.clustering.tech.models.list2': 'Neural Networks (SOM)',
        'project.clustering.methodology.title': '3. What did I do? (Simplified Methodology)',
        'project.clustering.methodology.text': 'The project focused on processing pure physical metrics, ignoring goals or assists. I analyzed distances covered at different speed ranges and whether these were covered with and without the ball. To find patterns, I used Clustering techniques.',
        'project.clustering.methodology.what.title': 'What is Clustering?',
        'project.clustering.methodology.what.text1': 'As I defined in the project, Clustering is an unsupervised learning technique. Its goal is not to predict a known outcome, but to find "invisible" patterns within the data by grouping them by similarity.',
        'project.clustering.methodology.what.text2': 'Instead of imposing a previous conclusion (like telling the model "this is a defender"), the algorithm analyzes the intrinsic structure of the data to find out who resembles whom. In this way, simply by analyzing the physical efforts made during the match (distances, speeds, sprints), the model is able to group footballers who share the same physical DNA, regardless of their number.',
        'project.clustering.methodology.algorithms': 'The algorithms I compared:',
        'project.clustering.methodology.kmeans.title': 'K-Means (The classic)',
        'project.clustering.methodology.kmeans.text': 'Works by defining "centers" of gravity and grouping players around the nearest center. It is fast and efficient, ideal for differentiating very marked groups.',
        'project.clustering.methodology.som.title': 'Self-Organizing Maps or SOM (The Neural Network)',
        'project.clustering.methodology.som.text': 'It is a more advanced technique based on neural networks. Unlike K-Means, SOM creates a visual "map" where it places similar players close to each other, preserving the topological relationship between them. It is excellent for detecting subtle nuances in complex data.',
        'project.clustering.insights.title': '4. Insights and Findings',
        'project.clustering.insights.intro': 'Beyond algorithms, the analysis revealed tactical patterns about how physical football has evolved:',
        'project.clustering.insights.lateral.title': 'The disappearance of the classic "Full-back"',
        'project.clustering.insights.lateral.text': 'The model frequently grouped full-backs and forwards in the same cluster. This validates with data the trend of modern football: current wing-backs have a demand for explosiveness, sprint and coverage practically identical to that of a winger or forward. Physically, they are interchangeable.',
        'project.clustering.insights.profiles.title': 'Specialized vs. Versatile Profiles',
        'project.clustering.insights.profiles.text': 'While central defenders (right and left) showed great cohesion (always falling into the same group), indicating a very specialized and static physical role, central midfielders showed greater dispersion, suggesting that the "midfielder" category is too vague to describe the real physical deployment.',
        'project.clustering.insights.scouting.title': 'Scouting based on performance, not position',
        'project.clustering.insights.scouting.text': 'By ignoring the position label, this model allows identifying undervalued players. If a team is looking for an expensive winger, they could use this model to find a more economical full-back that offers exactly the same high-intensity physical deployment.',
        'project.clustering.insights.injuries.title': 'Potential in injury prevention',
        'project.clustering.insights.injuries.text': 'Detecting cluster changes of a player throughout the season could serve as an early warning system. If an explosive player starts falling into "low performance" clusters for no apparent reason, it could indicate accumulated fatigue or injury risk.'
    }
};

// Detectar idioma basado en el idioma del navegador
function detectLanguage() {
    try {
        // Obtener el idioma del navegador
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Si el idioma del navegador comienza con 'es' (español), usar español
        if (browserLang && browserLang.toLowerCase().startsWith('es')) {
            return 'es';
        }
        
        // Por defecto, usar inglés
        return 'en';
    } catch (error) {
        console.warn('Error detecting browser language, defaulting to English:', error);
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

