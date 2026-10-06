/* ============================================
   VERDE VIDA JARDINERÍA - DATOS MOCKEADOS
   ============================================ */

const BUSINESS = {
  name: "Verde Vida Jardinería",
  tagline: "Transformamos espacios en vida",
  description: "Somos un equipo apasionado por la naturaleza, dedicado a crear y mantener espacios verdes que inspiran, relajan y conectan con el entorno.",
  email: "contacto@verdevida.cl",
  phone: "+56 9 1234 5678",
  whatsapp: "+56912345678",
  address: "Av. Los Jardines 1234, Providencia, Santiago, Chile",
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 - 18:00",
    saturday: "Sábado: 9:00 - 14:00",
    sunday: "Domingo: Cerrado"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  }
};

/* ============================================
   SERVICIOS
   ============================================ */
const SERVICES = [
  {
    id: 1,
    icon: "sparkles",
    title: "Diseño de Jardines",
    shortDesc: "Creamos espacios únicos que reflejan tu estilo.",
    description: "Diseñamos jardines personalizados que armonizan con tu hogar y estilo de vida. Desde jardines mediterráneos hasta tropicales, nuestro equipo de paisajistas convierte tus ideas en realidades vivas.",
    features: [
      "Visita técnica sin costo",
      "Renderizado 3D del proyecto",
      "Selección de especies nativas",
      "Plan de mantenimiento incluido"
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
  },
  {
    id: 2,
    icon: "scissors",
    title: "Poda y Tala",
    shortDesc: "Mantenimiento profesional para árboles sanos.",
    description: "Servicio especializado de poda ornamental, formación y tala controlada. Contamos con equipo certificado y seguimos estrictas normas de seguridad para preservar la salud de tus árboles.",
    features: [
      "Poda de formación y mantenimiento",
      "Tala técnica controlada",
      "Retiro de escombros",
      "Equipo certificado SEC"
    ],
    image: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?w=800&q=80"
  },
  {
    id: 3,
    icon: "droplet",
    title: "Sistemas de Riego",
    shortDesc: "Riego eficiente que ahorra agua y tiempo.",
    description: "Instalamos sistemas de riego automatizado inteligentes que reducen el consumo de agua hasta en un 60%. Programación por goteo, aspersión y control remoto desde tu smartphone.",
    features: [
      "Riego por goteo y aspersión",
      "Programadores inteligentes",
      "Sensores de humedad",
      "Garantía de 2 años"
    ],
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80"
  },
  {
    id: 4,
    icon: "leaf",
    title: "Huertos Urbanos",
    shortDesc: "Cultiva tus propios vegetales en casa.",
    description: "Diseñamos e instalamos huertos urbanos para que disfrutes de alimentos frescos y orgánicos en tu propia casa. Incluye asesoría para siembra, cosecha y rotación estacional.",
    features: [
      "Diseño en espacios reducidos",
      "Mesones y maceteros incluidos",
      "Kit de semillas iniciales",
      "Asesoría mensual 6 meses"
    ],
    image: "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&q=80"
  },
  {
    id: 5,
    icon: "home",
    title: "Plantas de Interior",
    shortDesc: "Verde que mejora tu calidad de vida.",
    description: "Selección, instalación y mantenimiento de plantas de interior adaptadas a las condiciones de luz y humedad de tu hogar. Incluye maceteros de diseño y guías de cuidado.",
    features: [
      "Asesoría según tu espacio",
      "Maceteros de diseño",
      "Guía de cuidados personalizada",
      "Mantenimiento mensual opcional"
    ],
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80"
  },
  {
    id: 6,
    icon: "building",
    title: "Paisajismo Comercial",
    shortDesc: "Imagen verde para tu empresa.",
    description: "Diseñamos y mantenemos áreas verdes corporativas que mejoran la imagen de tu empresa y el bienestar de tus equipos. Contratos mensuales, semestrales o anuales.",
    features: [
      "Mantenimiento programado",
      "Diseño corporativo",
      "Plantas de bajo consumo hídrico",
      "Reportes mensuales"
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
  }
];

/* ============================================
   GALERÍA
   ============================================ */
const GALLERY = [
  {
    id: 1,
    title: "Jardín residencial Las Condes",
    category: "jardines",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80"
  },
  {
    id: 2,
    title: "Huerto urbano en azotea",
    category: "huertos",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
  },
  {
    id: 3,
    title: "Plantas de interior oficina",
    category: "interiores",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80"
  },
  {
    id: 4,
    title: "Diseño jardín mediterráneo",
    category: "jardines",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80"
  },
  {
    id: 5,
    title: "Paisajismo corporativo",
    category: "comercial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
  },
  {
    id: 6,
    title: "Sistema de riego automatizado",
    category: "comercial",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80"
  },
  {
    id: 7,
    title: "Huerto familiar Vitacura",
    category: "huertos",
    image: "https://images.unsplash.com/photo-1592595896616-c37162298647?w=600&q=80"
  },
  {
    id: 8,
    title: "Jardín tropical privado",
    category: "jardines",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&q=80"
  },
  {
    id: 9,
    title: "Decoración con suculentas",
    category: "interiores",
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&q=80"
  },
  {
    id: 10,
    title: "Poda ornamental profesional",
    category: "jardines",
    image: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?w=600&q=80"
  },
  {
    id: 11,
    title: "Jardín hotel boutique",
    category: "comercial",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&q=80"
  },
  {
    id: 12,
    title: "Terraza verde departamento",
    category: "interiores",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80"
  }
];

const GALLERY_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "jardines", label: "Jardines" },
  { id: "huertos", label: "Huertos" },
  { id: "interiores", label: "Interiores" },
  { id: "comercial", label: "Comercial" }
];

/* ============================================
   CLASES / TALLERES
   ============================================ */
const CLASSES = [
  {
    id: 1,
    title: "Jardinería Básica",
    description: "Aprende los fundamentos: tipos de suelo, riego, luz solar y elección de plantas según el clima de tu zona.",
    level: "Principiante",
    duration: "4 semanas",
    price: 45000,
    instructor: "Ana Martínez",
    icon: "🌱"
  },
  {
    id: 2,
    title: "Poda Avanzada",
    description: "Técnicas profesionales de poda, herramientas, épocas del año y cuidados post-silencio de frutales y ornamentales.",
    level: "Intermedio",
    duration: "3 semanas",
    price: 65000,
    instructor: "Carlos Ruiz",
    icon: "✂️"
  },
  {
    id: 3,
    title: "Huerta Urbana",
    description: "Diseña y cultiva tu propia huerta en espacios reducidos. Siembra, trasplante, cosecha y rotación de especies.",
    level: "Principiante",
    duration: "6 semanas",
    price: 55000,
    instructor: "Laura Sánchez",
    icon: "🥬"
  },
  {
    id: 4,
    title: "Compostaje Doméstico",
    description: "Transforma tus residuos orgánicos en abono rico. Vermicompostaje, compostaje en frío y caliente.",
    level: "Principiante",
    duration: "2 semanas",
    price: 35000,
    instructor: "Ana Martínez",
    icon: "♻️"
  },
  {
    id: 5,
    title: "Diseño de Paisaje",
    description: "Principios de composición, color, texturas y hardsuán. Crea tu propio proyecto con software y a mano alzada.",
    level: "Avanzado",
    duration: "8 semanas",
    price: 120000,
    instructor: "Carlos Ruiz",
    icon: "🎨"
  },
  {
    id: 6,
    title: "Plantas de Interior",
    description: "Selección, cuidado y propagación de plantas de interior. Aprende a identificar plagas y a curar enfermedades.",
    level: "Principiante",
    duration: "3 semanas",
    price: 40000,
    instructor: "Laura Sánchez",
    icon: "🪴"
  },
  {
    id: 7,
    title: "Propagación de Plantas",
    description: "Técnicas de reproducción: esquejes, acodos, división de matas y germinación de semillas.",
    level: "Intermedio",
    duration: "4 semanas",
    price: 50000,
    instructor: "Ana Martínez",
    icon: "🌿"
  },
  {
    id: 8,
    title: "Jardinería Orgánica",
    description: "Cultivo sin químicos: control biológico de plagas, abonos verdes, asociaciones y rotación de cultivos.",
    level: "Intermedio",
    duration: "5 semanas",
    price: 60000,
    instructor: "Carlos Ruiz",
    icon: "🍃"
  }
];

/* ============================================
   HORARIO SEMANAL DE CLASES
   ============================================ */
const SCHEDULE = [
  { day: "Lunes", slots: [
    { time: "10:00 - 12:00", class: "Jardinería Básica", level: "Principiante" },
    { time: "16:00 - 18:00", class: "Propagación de Plantas", level: "Intermedio" }
  ]},
  { day: "Martes", slots: [
    { time: "10:00 - 12:00", class: "Plantas de Interior", level: "Principiante" },
    { time: "16:00 - 18:00", class: "Compostaje Doméstico", level: "Principiante" }
  ]},
  { day: "Miércoles", slots: [
    { time: "10:00 - 12:00", class: "Huerta Urbana", level: "Principiante" },
    { time: "16:00 - 18:00", class: "Jardinería Orgánica", level: "Intermedio" }
  ]},
  { day: "Jueves", slots: [
    { time: "10:00 - 12:00", class: "Diseño de Paisaje", level: "Avanzado" },
    { time: "16:00 - 18:00", class: "Poda Avanzada", level: "Intermedio" }
  ]},
  { day: "Viernes", slots: [
    { time: "10:00 - 12:00", class: "Jardinería Básica", level: "Principiante" },
    { time: "16:00 - 18:00", class: "Huerta Urbana", level: "Principiante" }
  ]},
  { day: "Sábado", slots: [
    { time: "09:00 - 13:00", class: "Taller Integral (todos los niveles)", level: "Mixto" }
  ]},
  { day: "Domingo", slots: [] }
];

/* ============================================
   PLANES DE PRECIOS
   ============================================ */
const PRICING = [
  {
    id: 1,
    name: "Hogar",
    price: 29900,
    period: "mes",
    description: "Ideal para casas y departamentos con jardín pequeño o mediano.",
    featured: false,
    features: [
      "1 visita mensual de mantenimiento",
      "Riego y poda básica",
      "Fumigación orgánica",
      "Asesoría por WhatsApp",
      "Reporte mensual digital"
    ],
    notIncluded: [
      "Diseño de nuevos espacios",
      "Poda de árboles grandes",
      "Instalación de riego"
    ]
  },
  {
    id: 2,
    name: "Profesional",
    price: 69900,
    period: "mes",
    description: "Para jardines medianos a grandes que requieren cuidado constante.",
    featured: true,
    features: [
      "2 visitas mensuales de mantenimiento",
      "Poda ornamental profesional",
      "Fumigación orgánica y control de plagas",
      "Mantenimiento de sistema de riego",
      "Asesoría prioritaria 24/7",
      "Reporte mensual con fotos",
      "10% descuento en clases"
    ],
    notIncluded: [
      "Diseño de nuevos espacios",
      "Tala de árboles"
    ]
  },
  {
    id: 3,
    name: "Empresarial",
    price: 149900,
    period: "mes",
    description: "Solución completa para empresas, edificios y condominios.",
    featured: false,
    features: [
      "Visitas ilimitadas programadas",
      "Diseño y rediseño de áreas verdes",
      "Mantenimiento integral",
      "Equipo dedicado asignado",
      "Reuniones mensuales ejecutivas",
      "Garantía de satisfacción 100%",
      "20% descuento en clases y eventos"
    ],
    notIncluded: []
  }
];

/* ============================================
   EQUIPO
   ============================================ */
const TEAM = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Fundadora & Paisajista Senior",
    bio: "Ingeniera agrónoma con más de 15 años de experiencia en diseño de paisajes sustentables.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Especialista en Poda y Arbolado",
    expertise: "Ingeniero forestal certificado, especialista en poda técnica y arboricultura.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    id: 3,
    name: "Laura Sánchez",
    role: "Coordinadora de Talleres",
    expertise: "Educadora ambiental, apaixonada por enseñar y acercar la naturaleza a las personas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  }
];

/* ============================================
   TESTIMONIOS
   ============================================ */
const TESTIMONIALS = [
  {
    id: 1,
    name: "María José Pérez",
    text: "Verde Vida transformó completamente nuestro jardín. El equipo es profesional, puntual y los resultados superaron nuestras expectativas. Totalmente recomendado.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: 2,
    name: "Roberto Silva",
    text: "Contratamos el plan Profesional hace un año y no podemos estar más contentos. El mantenimiento es impecable, nuestros asesores asienten con todo lo que necesitamos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    id: 3,
    name: "Carolina Méndez",
    text: "Tomé el curso de Huerta Urbana y aprendí muchísimo. Ahora tengo mi propio huerto en la azotea y cosecho mis propias verduras. ¡Gracias Laura por la excelente enseñanza!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
  }
];

/* ============================================
   ESTADÍSTICAS
   ============================================ */
const STATS = [
  { number: "500+", label: "Clientes felices" },
  { number: "12", label: "Años de experiencia" },
  { number: "1200+", label: "Proyectos realizados" },
  { number: "98%", label: "Satisfacción" }
];

/* ============================================
   NAVEGACIÓN
   ============================================ */
const NAV_LINKS = [
  { href: "index.html", label: "Inicio" },
  { href: "nosotros.html", label: "Nosotros" },
  { href: "servicios.html", label: "Servicios" },
  { href: "galeria.html", label: "Galería" },
  { href: "clases.html", label: "Clases" },
  { href: "precios.html", label: "Precios" },
  { href: "contacto.html", label: "Contacto" }
];