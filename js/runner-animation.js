document.addEventListener("DOMContentLoaded", function () {
    const secondRunner = document.querySelector(".runner-icon-second"); // Segundo monito
    const scrollBar = document.querySelector(".scroll-bar");
    const fireworksContainer = document.querySelector(".fireworks");
    let lastScrollTop = 0; // Variable para almacenar la última posición de desplazamiento
    let isScrolling; // Variable para detectar cuando el usuario deja de desplazarse

    // Verificar si el segundo monito está en el DOM
    if (!secondRunner) {
        console.error('No se encontró el elemento .runner-icon-second.');
        return;
    }

    // Detectar el desplazamiento de la página y mostrar la barra azul y el monito
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        // Mostrar la barra azul y el segundo monito cuando el usuario comience a desplazarse
        if (scrollTop > 0) {
            scrollBar.style.display = "flex"; // Mostrar la barra
            secondRunner.style.display = "block"; // Mostrar el segundo monito
        } else {
            scrollBar.style.display = "none"; // Ocultar la barra
            secondRunner.style.display = "none"; // Ocultar el segundo monito
        }

        // Calcular el desplazamiento en píxeles del segundo monito
        const maxMove = window.innerWidth - 50; // El tamaño máximo del movimiento (ancho de la ventana menos el ancho del icono)
        const runnerPosition = scrollPercent * maxMove;

        // Mover el segundo monito horizontalmente a lo largo de la barra azul
        secondRunner.style.transform = `translateX(${runnerPosition}px)`;

        // Detectar la dirección del desplazamiento
        if (scrollTop > lastScrollTop) {
            // Usuario desplazándose hacia abajo
            secondRunner.style.transform += ' scaleX(1)'; // Corre hacia la derecha
        } else {
            // Usuario desplazándose hacia arriba
            secondRunner.style.transform += ' scaleX(-1)'; // Corre hacia la izquierda (espejo)
        }

        // Actualizar la última posición de desplazamiento
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevenir valores negativos

        // Detectar si el usuario ha llegado al final de la página
        if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
            showFireworks(); // Mostrar fuegos artificiales cuando se llega al final
        }

        // Limpiar el temporizador si el usuario sigue desplazándose
        clearTimeout(isScrolling);

        // Pausar el monito si no hay desplazamiento en 150 ms
        isScrolling = setTimeout(function () {
            secondRunner.classList.add('paused'); // Pausar la animación del monito
        }, 150);
    });

    // Función para mostrar los fuegos artificiales
    function showFireworks() {
        fireworksContainer.style.display = 'block'; // Mostrar los fuegos artificiales

        // Crear múltiples fuegos artificiales
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;

            // Asignar colores aleatorios
            const colors = ['firework-red', 'firework-blue', 'firework-green'];
            firework.classList.add(colors[Math.floor(Math.random() * colors.length)]);

            fireworksContainer.appendChild(firework);

            // Remover el fuego artificial después de la animación
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }

        // Ocultar los fuegos artificiales después de 3 segundos
        setTimeout(() => {
            fireworksContainer.style.display = 'none';
        }, 3000);
    }
});
