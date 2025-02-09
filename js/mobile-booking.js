// Asegúrate de que la barra esté oculta inicialmente
document.addEventListener("DOMContentLoaded", function() {
    var bookingBar = document.querySelector(".fixed-booking-bar");
    bookingBar.classList.remove('show'); // Ocultar la barra al cargar la página
});

// Detectar si el usuario ha desplazado más del 7% de la página
document.addEventListener("scroll", function() {
    var bookingBar = document.querySelector(".fixed-booking-bar");

    // Obtener el scroll actual y la altura total de la página
    var scrollPosition = window.scrollY;
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Mostrar la barra cuando el usuario se desplace más del 7% de la página
    if (scrollPosition > pageHeight * 0.07) {
        bookingBar.classList.add('show'); // Agregar la clase para mostrar con animación
    } else {
        bookingBar.classList.remove('show'); // Remover la clase para ocultar
    }
});
