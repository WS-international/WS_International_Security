//Funcionalidad de ocultamiento de hero y inibidor de scroll

window.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("heroSection");
    const hideButton = document.getElementById("hideHeroSection");

    // Función para deshabilitar completamente el scroll y ocultar el scrollbar
    function disableScroll() {
        document.body.style.overflow = 'hidden';  // Deshabilita scroll y oculta scrollbar
    }

    // Función para habilitar el scroll y mostrar el scrollbar
    function enableScroll() {
        document.body.style.overflow = 'auto';  // Habilita scroll y muestra scrollbar
    }

    // Previene el scroll (rueda del mouse, dispositivos táctiles, flechas de teclado)
    function preventScroll(event) {
        event.preventDefault();
    }

    // Previene el scroll con las flechas del teclado (teclas de arriba y abajo)
    function preventArrowKeys(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
        }
    }

    // Verifica si la sección ya fue ocultada y ajusta el scroll
    if (sessionStorage.getItem("heroShown")) {
        heroSection.style.display = "none";
        enableScroll();  // Permite el scroll si la sección ya fue ocultada previamente
    } else {
        heroSection.style.display = "block";
        disableScroll();  // Deshabilita el scroll mientras la sección está visible
        document.addEventListener('wheel', preventScroll, { passive: false });
        document.addEventListener('touchmove', preventScroll, { passive: false });
        document.addEventListener('keydown', preventArrowKeys, false);
    }

    // Escucha el clic en el botón para ocultar la sección y habilitar el scroll
    hideButton.addEventListener("click", function (event) {
        event.preventDefault();  // Evita el comportamiento por defecto del enlace
        heroSection.style.display = "none";  // Oculta la sección
        sessionStorage.setItem("heroShown", "true");  // Marca que la sección ya fue vista
        enableScroll();  // Habilita el scroll una vez que la sección se oculta

        // Remueve los listeners de scroll
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('keydown', preventArrowKeys);

        // Hace scroll suave hacia la sección de bienvenida
        document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
    });

    // Oculta el hero video al subir el scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Oculta el hero section al hacer scroll más allá de la altura de la ventana
        if (scrollPosition > window.innerHeight) {
            heroSection.style.opacity = '0';  // Desaparece gradualmente
            heroSection.style.visibility = 'hidden';  // Hace que el elemento no sea visible
        } else {
            heroSection.style.opacity = '1';  // Restaura visibilidad
            heroSection.style.visibility = 'visible';  // Vuelve visible
        }
    });
});



//Cambio de color 


// Activar el cambio de color de bootstrap
(() => {
    'use strict'

    const storedTheme = localStorage.getItem('theme')

    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = (theme) => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
        localStorage.setItem('theme', theme)
    }

    setTheme(getPreferredTheme())

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setTheme(theme)
            document.querySelectorAll('[data-bs-theme-value]').forEach(t => {
                t.classList.remove('active')
                t.setAttribute('aria-pressed', 'false')
            })
            toggle.classList.add('active')
            toggle.setAttribute('aria-pressed', 'true')
        })
    })
})()

//Jugar con el cambio de color en las secciones y revertirlo
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.custom-section');

    // Detecta el tema inicial
    const theme = document.documentElement.getAttribute('data-bs-theme');
    updateSectionTheme(theme);

    // Escucha los cambios de tema
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'data-bs-theme') {
                const newTheme = document.documentElement.getAttribute('data-bs-theme');
                updateSectionTheme(newTheme);
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });

    // Cambia la clase según el tema
    function updateSectionTheme(theme) {
        if (theme === 'dark') {
            section.classList.remove('custom-section-light');
            section.classList.add('custom-section-dark');
        } else {
            section.classList.remove('custom-section-dark');
            section.classList.add('custom-section-light');
        }
    }
});

// Obtener todos los elementos de la galería
const images = document.querySelectorAll('.zoom-effect');

// Añadir el evento de clic a cada imagen para abrir en el lightbox
images.forEach(image => {
    image.addEventListener('click', function () {
        const imageSrc = this.getAttribute('data-bs-src');
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imageSrc;
    });
});

