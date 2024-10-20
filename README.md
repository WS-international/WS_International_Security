# <div align="center">Proyecto de Catálogo de Servicios WS</div>

<p align="center">
  <img src="https://github.com/AlejandroLondonoValle/WS_Security-develop/blob/main/src/imgs/pixelcut-export.png?raw=true" alt="Logo" width="500">
</p>

Este proyecto es un catálogo de servicios que muestra diferentes características y funcionalidades interactivas utilizando HTML, CSS, y JavaScript, junto con Bootstrap para la presentación visual. Está diseñado para ofrecer una experiencia de usuario atractiva y fluida.

## Tabla de Contenidos

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación y Configuración](#instalación-y-configuración)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Funcionalidades](#funcionalidades)
6. [Contribuciones](#contribuciones)
7. [Licencia](#licencia)

## Características

- **Interactividad**: Se utiliza JavaScript para manejar eventos y animaciones, como el ocultamiento de la sección de héroe y el control del carrusel.
- **Diseño Responsivo**: Bootstrap permite que el diseño se adapte a diferentes tamaños de pantalla.
- **Temas**: Implementación de un sistema de cambio de tema (claro/oscuro) basado en las preferencias del usuario.
- **Carrusel de Imágenes**: Un carrusel que presenta imágenes de manera fluida, con control y pausado en modales.
- **Sección de Bienvenida**: Al ocultar la sección de héroe, el usuario es llevado suavemente a la sección de bienvenida.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap (CDN)

## Instalación y Configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone [URL del repositorio]
   ```
2. Abre el archivo `index.html` en tu navegador para ver el proyecto en acción.

## Estructura del Proyecto

```
/proyecto
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── src/
    ├── fonts/
    └── images/
```

## Funcionalidades

- **Ocultamiento de la sección de héroe**: La sección de héroe se oculta al hacer clic en un botón, y se recuerda esta acción utilizando `sessionStorage`.
- **Control de Scroll**: El scroll se desactiva cuando la sección de héroe está visible y se habilita al ocultarla.
- **Cambio de Color**: Permite alternar entre temas claro y oscuro utilizando `localStorage` para recordar la elección del usuario.
- **Carrusel de Bootstrap**: Se implementa un carrusel de imágenes con una funcionalidad suave y que se pausa cuando se abre un modal.
  
## Contribuciones

Este proyecto fue creado por **Luis Alejandro Londoño Valle**. Este proyecto es de uso privado y no acepta contribuciones. Si deseas más información, puedes contactar al creador.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---
