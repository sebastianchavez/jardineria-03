/* ============================================
   VERDE VIDA JARDINERÍA - LÓGICA PRINCIPAL
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initImageFallback();
  initNavbar();
  initRevealOnScroll();
  initMobileMenu();
  initActiveLink();
  initScrollTopButton();
  initFooterYear();
  initGalleryFilter();
  initServiceCards();
  initTestimonials();
  initPricing();
  initTeam();
  initClasses();
  initStats();
  initSchedule();
});

/* ============================================
   FALLBACK GLOBAL DE IMÁGENES
   Captura cualquier <img> que falle y usa picsum
   ============================================ */
function initImageFallback() {
  document.addEventListener('error', (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG' && target.dataset.fallbackApplied !== '1') {
      target.dataset.fallbackApplied = '1';
      const seed = (target.alt || 'verde').replace(/\s+/g, '-').toLowerCase();
      target.src = `https://picsum.photos/seed/${seed}/600/400`;
    }
  }, true);
}

/* ============================================
   NAVBAR - Cambio al hacer scroll
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

/* ============================================
   MENÚ MÓVIL
   ============================================ */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    if (isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    } else {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });
  });
}

/* ============================================
   ACTIVE LINK
   ============================================ */
function initActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
function initRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   SCROLL TO TOP BUTTON
   ============================================ */
function initScrollTopButton() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   FOOTER - Año dinámico
   ============================================ */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ============================================
   GALERÍA - Filtro por categoría
   ============================================ */
function initGalleryFilter() {
  const galleryContainer = document.getElementById('gallery-grid');
  if (!galleryContainer) return;

  const filterContainer = document.getElementById('gallery-filters');
  if (!filterContainer) return;

  filterContainer.innerHTML = GALLERY_CATEGORIES.map(cat => `
    <button class="gallery-filter-btn px-4 py-2 rounded-full border-2 border-leaf text-leaf font-medium hover:bg-leaf hover:text-white" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  const renderGallery = (filter = 'todos') => {
    const items = filter === 'todos' ? GALLERY : GALLERY.filter(g => g.category === filter);
    galleryContainer.innerHTML = items.map((item, idx) => `
      <div class="gallery-item aspect-square reveal" style="transition-delay: ${idx * 50}ms">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/verde-${item.id}/600/600';">
        <div class="gallery-overlay">
          <div>
            <h3 class="font-display text-xl font-semibold">${item.title}</h3>
            <p class="text-sm text-sage">${GALLERY_CATEGORIES.find(c => c.id === item.category)?.label || ''}</p>
          </div>
        </div>
      </div>
    `).join('');
    initRevealOnScroll();
  };

  filterContainer.addEventListener('click', (e) => {
    if (e.target.matches('.gallery-filter-btn')) {
      filterContainer.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderGallery(e.target.dataset.category);
    }
  });

  filterContainer.querySelector('.gallery-filter-btn[data-category="todos"]').classList.add('active');
  renderGallery();
}

/* ============================================
   SERVICIOS
   ============================================ */
function initServiceCards() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const limit = parseInt(container.dataset.limit) || SERVICES.length;
  const services = SERVICES.slice(0, limit);

  container.innerHTML = services.map((service, idx) => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-md card-hover reveal" style="transition-delay: ${idx * 100}ms">
      <div class="relative h-48 overflow-hidden">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/servicio-${service.id}/800/600';">
        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
          ${getIconSVG(service.icon)}
        </div>
      </div>
      <div class="p-6">
        <h3 class="font-display text-2xl font-bold text-forest mb-2">${service.title}</h3>
        <p class="text-gray-600 mb-4">${service.shortDesc}</p>
        <a href="servicios.html" class="inline-flex items-center gap-2 text-leaf font-semibold hover:text-forest transition-colors">
          Conocer más
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   TESTIMONIOS
   ============================================ */
function initTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map((t, idx) => `
    <div class="bg-white p-8 rounded-2xl shadow-md card-hover reveal" style="transition-delay: ${idx * 100}ms">
      <div class="flex items-center gap-1 mb-4">
        ${Array(t.rating).fill('<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
      </div>
      <p class="text-gray-700 italic mb-6 leading-relaxed">"${t.text}"</p>
      <div class="flex items-center gap-3">
        <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" onerror="this.onerror=null;this.src='https://picsum.photos/seed/cliente-${t.id}/100/100';">
        <div>
          <h4 class="font-bold text-forest">${t.name}</h4>
          <p class="text-sm text-gray-500">Cliente verificado</p>
        </div>
      </div>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   PRECIOS
   ============================================ */
function initPricing() {
  const container = document.getElementById('pricing-grid');
  if (!container) return;

  container.innerHTML = PRICING.map((plan, idx) => `
    <div class="relative bg-white rounded-2xl shadow-lg p-8 card-hover reveal ${plan.featured ? 'border-4 border-leaf transform md:scale-105' : ''}" style="transition-delay: ${idx * 100}ms">
      ${plan.featured ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-leaf text-white px-4 py-1 rounded-full text-sm font-semibold">Más popular</div>' : ''}
      <div class="text-center mb-6">
        <h3 class="font-display text-3xl font-bold text-forest mb-2">${plan.name}</h3>
        <p class="text-gray-600 text-sm mb-4">${plan.description}</p>
        <div class="flex items-end justify-center gap-1">
          <span class="text-5xl font-bold text-forest">$${plan.price.toLocaleString('es-CL')}</span>
          <span class="text-gray-500 pb-2">/${plan.period}</span>
        </div>
      </div>
      <ul class="space-y-3 mb-8">
        ${plan.features.map(f => `
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-700">${f}</span>
          </li>
        `).join('')}
        ${(plan.notIncluded || []).map(f => `
          <li class="flex items-start gap-2 opacity-50">
            <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            <span class="text-gray-500 line-through">${f}</span>
          </li>
        `).join('')}
      </ul>
      <a href="contacto.html" class="${plan.featured ? 'btn-primary' : 'btn-secondary'} w-full justify-center">
        Contratar plan
      </a>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   EQUIPO
   ============================================ */
function initTeam() {
  const container = document.getElementById('team-grid');
  if (!container) return;

  container.innerHTML = TEAM.map((member, idx) => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-md card-hover reveal" style="transition-delay: ${idx * 100}ms">
      <div class="aspect-square overflow-hidden bg-cream">
        <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/equipo-${member.id}/400/400';">
      </div>
      <div class="p-6 text-center">
        <h3 class="font-display text-2xl font-bold text-forest mb-1">${member.name}</h3>
        <p class="text-leaf font-semibold mb-3">${member.role}</p>
        <p class="text-gray-600 text-sm">${member.bio || member.expertise}</p>
      </div>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   CLASES
   ============================================ */
function initClasses() {
  const container = document.getElementById('classes-grid');
  if (!container) return;

  const levelColors = {
    'Principiante': 'bg-sage/20 text-forest',
    'Intermedio': 'bg-earth/30 text-forest',
    'Avanzado': 'bg-leaf/20 text-forest',
    'Mixto': 'bg-leaf text-white'
  };

  container.innerHTML = CLASSES.map((cls, idx) => `
    <div class="bg-white rounded-2xl p-6 shadow-md card-hover reveal" style="transition-delay: ${idx * 100}ms">
      <div class="text-5xl mb-4">${cls.icon}</div>
      <div class="flex items-start justify-between mb-3">
        <h3 class="font-display text-2xl font-bold text-forest">${cls.title}</h3>
        <span class="px-3 py-1 rounded-full text-xs font-semibold ${levelColors[cls.level] || 'bg-gray-200'}">${cls.level}</span>
      </div>
      <p class="text-gray-600 mb-4 leading-relaxed">${cls.description}</p>
      <div class="space-y-2 mb-6 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>${cls.duration}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <span>${cls.instructor}</span>
        </div>
      </div>
      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <span class="text-3xl font-bold text-forest">$${cls.price.toLocaleString('es-CL')}</span>
        <a href="contacto.html" class="text-leaf font-semibold hover:text-forest">Inscribirme →</a>
      </div>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   HORARIO SEMANAL
   ============================================ */
function initSchedule() {
  const container = document.getElementById('schedule-grid');
  if (!container) return;

  const levelColors = {
    'Principiante': 'bg-sage/30 text-forest',
    'Intermedio': 'bg-earth/40 text-forest',
    'Avanzado': 'bg-leaf/30 text-forest',
    'Mixto': 'bg-leaf text-white'
  };

  container.innerHTML = SCHEDULE.map((day, idx) => `
    <div class="bg-cream rounded-2xl overflow-hidden shadow-md reveal" style="transition-delay: ${idx * 80}ms">
      <div class="bg-leaf text-white px-6 py-4 flex items-center justify-between">
        <h3 class="font-display text-xl font-bold">${day.day}</h3>
        ${day.slots.length === 0 ? '<span class="text-xs bg-white/20 px-3 py-1 rounded-full">Cerrado</span>' : `<span class="text-xs bg-white/20 px-3 py-1 rounded-full">${day.slots.length} clase${day.slots.length > 1 ? 's' : ''}</span>`}
      </div>
      <div class="p-6">
        ${day.slots.length === 0 ? `
          <p class="text-gray-500 italic text-center py-4">No hay clases programadas este día.</p>
        ` : `
          <div class="space-y-3">
            ${day.slots.map(slot => `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-leaf flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span class="font-semibold text-forest">${slot.time}</span>
                </div>
                <div class="flex items-center gap-3 flex-1 sm:justify-end">
                  <span class="font-medium text-gray-700">${slot.class}</span>
                  <span class="px-3 py-1 rounded-full text-xs font-semibold ${levelColors[slot.level] || 'bg-gray-200'}">${slot.level}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `).join('');

  initRevealOnScroll();
}

/* ============================================
   ESTADÍSTICAS (contador animado)
   ============================================ */
function initStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = STATS.map((stat, idx) => `
    <div class="text-center reveal" style="transition-delay: ${idx * 100}ms">
      <div class="font-display text-5xl md:text-6xl font-bold text-white mb-2" data-count="${stat.number}">0</div>
      <div class="text-sage text-lg uppercase tracking-wider">${stat.label}</div>
    </div>
  `).join('');

  animateCounters();
  initRevealOnScroll();
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = el.dataset.count;
  const isNumeric = /^\d+$/.test(target.replace(/\D/g, ''));
  const numericTarget = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/^\d+/, '');
  const prefix = target.match(/^\D+/)?.[0] || '';
  const duration = 2000;
  const startTime = performance.now();

  const update = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * numericTarget);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };

  requestAnimationFrame(update);
}

/* ============================================
   ICONOS SVG (Lucide)
   ============================================ */
function getIconSVG(iconName) {
  const icons = {
    sparkles: '<svg class="w-6 h-6 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    scissors: '<svg class="w-6 h-6 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l-2.879 2.879M19 5L5 19m16-7L9 5"/></svg>',
    droplet: '<svg class="w-6 h-6 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-4 6-7 9.5-7 13a7 7 0 1014 0c0-3.5-3-7-7-13z"/></svg>',
    leaf: '<svg class="w-6 h-6 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21c3-3 7-3 10-3m-10 0c0-7 4-12 10-12s10 5 10 10c0 5-7 5-10 5s-10 0-10-3zm10-3a3 3 0 100-6 3 3 0 000 6z"/></svg>',
    building: '<svg class="w-6 h-6 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    phone: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.517 5.517l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    email: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    location: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    clock: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  };
  return icons[iconName] || icons.leaf;
}

/* ============================================
   EXPONER UTILIDADES GLOBALES
   ============================================ */
window.verdeVida = {
  formatPrice: (n) => n.toLocaleString('es-CL'),
  BUSINESS,
  SERVICES,
  CLASSES,
  PRICING,
  SCHEDULE,
  getIconSVG
};