/* ============================================
   VERDE VIDA JARDINERÍA - FORMULARIO DE CONTACTO
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  populateAsuntoOptions();
  populateMapData();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');

  const validators = {
    nombre: (v) => v.trim().length >= 3 || 'El nombre debe tener al menos 3 caracteres',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Ingresa un email válido',
    telefono: (v) => v === '' || /^[\d\s\+\-\(\)]{8,}$/.test(v) || 'Ingresa un teléfono válido (mínimo 8 dígitos)',
    asunto: (v) => v.trim() !== '' || 'Selecciona un asunto',
    mensaje: (v) => v.trim().length >= 10 || 'El mensaje debe tener al menos 10 caracteres'
  };

  const validateField = (input) => {
    const validator = validators[input.name];
    if (!validator) return true;

    const result = validator(input.value);
    const errorEl = document.getElementById(`${input.name}-error`);

    if (result === true) {
      input.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    } else {
      input.classList.add('error');
      if (errorEl) {
        errorEl.textContent = result;
        errorEl.classList.add('visible');
      }
      return false;
    }
  };

  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    form.querySelectorAll('input, select, textarea').forEach(input => {
      if (!validateField(input)) isValid = false;
    });

    if (!isValid) {
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Enviando...
    `;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        Enviar mensaje
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      `;
      if (successMsg) {
        successMsg.classList.remove('hidden');
        successMsg.classList.add('animate-fade-in-up');
        setTimeout(() => {
          successMsg.classList.add('hidden');
          successMsg.classList.remove('animate-fade-in-up');
        }, 5000);
      }
    }, 1500);
  });
}

function populateAsuntoOptions() {
  const select = document.getElementById('asunto');
  if (!select) return;

  const options = [
    { value: '', label: 'Selecciona un asunto', disabled: true },
    { value: 'cotizacion', label: 'Cotización de servicios' },
    { value: 'clases', label: 'Información sobre clases' },
    { value: 'mantenimiento', label: 'Contratar mantenimiento' },
    { value: 'diseno', label: 'Diseño de jardín' },
    { value: 'empresa', label: 'Cotización empresarial' },
    { value: 'otro', label: 'Otro' }
  ];

  options.forEach(opt => {
    const el = document.createElement('option');
    el.value = opt.value;
    el.textContent = opt.label;
    if (opt.disabled) el.disabled = true;
    select.appendChild(el);
  });
}

function populateMapData() {
  const mapFrame = document.getElementById('mapa-iframe');
  const addressEl = document.getElementById('contact-address');
  const phoneEl = document.getElementById('contact-phone');
  const emailEl = document.getElementById('contact-email');

  if (mapFrame) {
    const address = encodeURIComponent(BUSINESS.address);
    mapFrame.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-70.6!3d-33.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI0JzAwLjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses-419!2scl!4v1&q=${address}`;
  }
  if (addressEl) addressEl.textContent = BUSINESS.address;
  if (phoneEl) phoneEl.textContent = BUSINESS.phone;
  if (emailEl) emailEl.textContent = BUSINESS.email;
}