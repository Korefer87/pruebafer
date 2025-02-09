 <!-- Resto del contenido HTML -->

<!-- Script de desplazamiento del menú -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Función que se ejecuta cuando el usuario hace scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Si el desplazamiento es mayor que 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
</script>

</body>
</html>
