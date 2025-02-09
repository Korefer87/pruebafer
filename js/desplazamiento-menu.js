document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const body = document.body;

    // Función para manejar el scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Mueve el menú debajo de la franja
            body.classList.add("scrolled"); // Ajusta el padding del body
        } else {
            navbar.classList.remove("scrolled"); // Muestra el menú en la parte superior
            body.classList.remove("scrolled"); // Remueve el padding del body
        }
    }

    // Ejecuta la función al cargar la página y cuando el usuario se desplaza
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página por si ya está en una posición desplazada
});
