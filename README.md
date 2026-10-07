# Coffea — Landing page

Landing page responsive para Coffea, desarrollada como trabajo práctico de Diseño UX/UI.

Está construida con HTML5 y CSS3, sin dependencias ni JavaScript.

## Características

- Diseño responsive con enfoque mobile-first.
- Estilos organizados con `@layer` y variables de diseño centralizadas.
- Imágenes optimizadas en formato WebP.
- Página 404 personalizada.
- Configuración de cabeceras y caché para Netlify.

## Estructura del proyecto

```text
.
├── index.html          # Página principal
├── 404.html            # Página de error
├── css/
│   ├── tokens.css      # Colores, tipografías, espacios y radios
│   ├── base.css        # Estilos base
│   ├── layout.css      # Estructura y secciones
│   ├── utilities.css   # Clases utilitarias
│   └── main.css        # Punto de entrada de los estilos
├── assets/
│   ├── img/            # Imágenes WebP
│   └── icons/          # Íconos SVG
└── netlify.toml        # Configuración de despliegue
```

## Ejecutar en local

Podés abrir [index.html](./index.html) directamente en el navegador. Para usar un servidor local, ejecutá:

```bash
python -m http.server 8000
```

Luego visitá `http://localhost:8000`.

## Convenciones de estilos

- Metodología BEM para nombrar las clases.
- Diseño mobile-first, con puntos de quiebre desde 768 px, 1024 px y 1440 px.
- Los colores, fuentes, espaciados y radios se definen en [css/tokens.css](./css/tokens.css).

## Despliegue

El proyecto está listo para publicarse en Netlify. La carpeta de publicación es la raíz del proyecto (`.`) y no requiere comando de compilación.
