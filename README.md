# Verde Vida Jardinería - Landing Page Template

Template profesional de landing page multipágina para empresas de jardinería, diseñado con HTML + Tailwind CSS + JavaScript nativo (sin frameworks).

## Descripción

Sitio web completo de 10 páginas para una empresa ficticia de jardinería ("Verde Vida"). Todos los datos están mockeados en `js/data.js` para que el template se vea "listo" desde el primer momento. Incluye paleta de colores verde natural, animaciones suaves, formulario con validación y componentes reutilizables.

## Páginas incluidas

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Hero, servicios destacados, estadísticas, testimonios, CTA |
| Nosotros | `nosotros.html` | Historia, misión/visión/valores, equipo |
| Servicios | `servicios.html` | Catálogo de 6 servicios + proceso de trabajo |
| Galería | `galeria.html` | 12 proyectos con filtro por categoría |
| Clases | `clases.html` | 8 cursos + horario semanal + instructores |
| Precios | `precios.html` | 3 planes + tabla comparativa + FAQ |
| Contacto | `contacto.html` | Formulario + mapa + horarios |
| Privacidad | `privacidad.html` | Política de privacidad |
| Términos | `terminos.html` | Términos y condiciones |
| Error 404 | `404.html` | Página de error |

## Estructura de archivos

```
jardineria-03/
├── index.html              # Pantalla de inicio
├── nosotros.html           # Sobre nosotros
├── servicios.html          # Nuestros servicios
├── galeria.html            # Galería de proyectos
├── clases.html             # Clases y horarios
├── precios.html            # Planes y precios
├── contacto.html           # Contacto + formulario + mapa
├── privacidad.html         # Políticas de privacidad
├── terminos.html           # Términos y condiciones
├── 404.html                # Página de error
├── css/
│   └── styles.css          # Animaciones y personalizaciones
├── js/
│   ├── data.js             # Todos los datos mockeados
│   ├── main.js             # Lógica común (navbar, animaciones)
│   └── contacto.js          # Validación del formulario
└── README.md
```

## Cómo usar

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador. No requiere servidor.

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server -p 8000

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## Tecnologías utilizadas

- **HTML5** semántico
- **Tailwind CSS 3.x** (vía CDN con configuración personalizada)
- **JavaScript vanilla** (sin frameworks ni librerías)
- **Google Fonts**: Playfair Display (titulares) + Inter (texto)
- **Unsplash** como CDN de imágenes (con respaldo automático a picsum.photos)

## Personalización

### Cambiar colores
Edita el bloque `tailwind.config` en cada archivo HTML (o centralízalo en uno solo):

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: '#2d5016',   // Verde bosque oscuro
        leaf: '#4a7c2c',     // Verde principal
        sage: '#87a96b',     // Verde salvia
        earth: '#d4b896',    // Beige tierra
        cream: '#f5f1e8'     // Crema fondo
      }
    }
  }
}
```

### Cambiar contenido
Todos los textos, imágenes, precios, horarios y datos del equipo están en `js/data.js`. Edita los siguientes objetos:

- `BUSINESS` — nombre, teléfono, email, dirección, horarios
- `SERVICES` — los 6 servicios
- `GALLERY` — las 12 imágenes
- `CLASSES` — los 8 cursos
- `SCHEDULE` — horario semanal
- `PRICING` — los 3 planes
- `TEAM` — equipo
- `TESTIMONIALS` — testimonios
- `STATS` — estadísticas

### Reemplazar imágenes
Puedes reemplazar cualquier URL de Unsplash por una propia. Las imágenes ya tienen `onerror` que cae a picsum.photos automáticamente si una URL falla.

### Agregar/quitar páginas
1. Crea un nuevo archivo HTML copiando la estructura de navbar y footer de cualquier página existente
2. Agrega el enlace en el navbar de **todas** las páginas
3. Agrega el enlace en el footer de **todas** las páginas

## Características técnicas

- **Navbar fija** que cambia de transparente a sólida al hacer scroll
- **Menú móvil** deslizante con animación
- **Animaciones reveal** on scroll usando IntersectionObserver
- **Contadores animados** en sección de estadísticas
- **Galería con filtros** dinámicos sin recargar página
- **Formulario con validación** en vivo + simulación de envío
- **Mapa de Google Maps** embebido via iframe
- **Botones flotantes**: WhatsApp + scroll-to-top
- **Responsive** mobile-first con breakpoints Tailwind (sm, md, lg)
- **Fallback automático** de imágenes rotas a picsum.photos
- **Sin dependencias externas** excepto Tailwind CDN y Google Fonts

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 14+ y Chrome Android 10+
- Responsive desde 320px hasta 1920px+

## Créditos

- Imágenes: [Unsplash](https://unsplash.com) (con fallback a [Picsum](https://picsum.photos))
- Iconos: SVG inline (Lucide-inspired)
- Tipografías: [Google Fonts](https://fonts.google.com)

## Licencia

Este template es de uso libre para proyectos comerciales y personales.