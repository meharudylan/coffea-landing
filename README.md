# Coffea — landing page

Landing page responsive para Coffea, desarrollada con HTML5 semántico y CSS3. Las interacciones de carruseles, paginador, menú y favoritos se resuelven con funciones nativas del navegador; el proyecto no usa JavaScript, frameworks ni preprocesadores.

## Estructura del proyecto

```text
.
├── index.html
├── 404.html
├── netlify.toml
├── css/
│   ├── main.css
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── utilities.css
│   └── components/
│       ├── header.css
│       ├── hero.css
│       ├── categories.css
│       ├── product-card.css
│       ├── carousel.css
│       ├── promo.css
│       ├── testimonial-card.css
│       ├── newsletter.css
│       └── footer.css
└── assets/
    ├── img/       # Fotografías WebP locales
    └── icons/     # Íconos SVG locales
```

## Ejecutar en local

Desde la carpeta del proyecto, iniciá un servidor estático:

```bash
python -m http.server 8000
```

Abrí `http://localhost:8000` en el navegador.

## Interacciones

- Los carruseles permiten desplazamiento horizontal con swipe o trackpad y usan `scroll-snap`. En tablet y desktop, las flechas son enlaces a las anclas de las primeras y últimas cards, de acuerdo con la alternativa sin JavaScript del PRD. En mobile las flechas se ocultan y se usa el desplazamiento táctil.
- Los puntos de testimonios enlazan a cada testimonio; el carrusel horizontal se ajusta con `scroll-snap` en pantallas pequeñas.
- Los favoritos son checkboxes estilizados. Su estado es visual y no se guarda.
- El menú mobile usa `<details>` y `<summary>`.
- El newsletter valida el correo con el navegador. El formulario usa `action="#"` y no envía los datos a un servicio.
- Los botones de pedido son visuales; no hay carrito ni lógica de compra.
- Los enlaces del footer (secciones legales, servicios, información y redes sociales) son marcadores de posición porque el PRD no incluye páginas internas ni cuentas sociales reales.

## Convenciones y diseño

- Nombres de clases con metodología BEM.
- CSS separado por tokens, estilos base, layout, componentes y utilidades, importados en ese orden desde `css/main.css` con `@layer`.
- Estilos mobile-first con breakpoints en 768 px, 1024 px y 1440 px.
- Colores, tipografías, radios y escala de espacios centralizados en `css/tokens.css`.
- Las imágenes se sirven localmente en WebP y los íconos desde `assets/icons/` en SVG.

## Despliegue en Netlify

`netlify.toml` configura la raíz (`.`) como carpeta de publicación y no requiere comando de build. Para habilitar deploy continuo, conectá el repositorio GitHub o GitLab en Netlify, elegí `main` como rama de producción y dejá vacío el comando de build. La integración del repositorio puede crear Deploy Previews para pull/merge requests. Netlify administra HTTPS para el dominio asignado.