document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("winnerModal");
    const closeButton = document.querySelector(".modal-close");
    let lastScrollTop = 0; // Variable para almacenar la última posición de scroll

    // Detectar cuando el usuario ha llegado al 98% del contenido de la página
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Calcular el porcentaje de scroll actual
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Solo mostrar el modal si el usuario se desplaza hacia abajo
        if (scrollPercent >= 98 && scrollTop > lastScrollTop) {
            showModal();
        }

        // Actualizar la última posición de scroll
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevenir valores negativos
    });

    // Función para mostrar el modal con la animación personalizada
    function showModal() {
        modal.style.display = "flex"; // Mostrar el modal
        modal.querySelector('.modal-content').style.animation = "pipeEffect 1s ease-out forwards"; // Aplicar la animación
    }

    // Cerrar el modal cuando se hace clic en el botón de cierre
    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar el modal
    });

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
