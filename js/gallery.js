document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const totalPages = 3; // Cambiamos el total de páginas a 3

    const galleryPage1 = document.getElementById("galleryPage1");
    const galleryPage2 = document.getElementById("galleryPage2");
    const galleryPage3 = document.getElementById("galleryPage3"); // Añadimos la página 3
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");

    function showPage(page) {
        // Ocultar todas las páginas inicialmente
        galleryPage1.style.display = "none";
        galleryPage2.style.display = "none";
        galleryPage3.style.display = "none"; // Ocultar también la página 3

        // Mostrar la página correspondiente
        if (page === 1) {
            galleryPage1.style.display = "grid";
            prevPageBtn.disabled = true;
            nextPageBtn.disabled = false;
        } else if (page === 2) {
            galleryPage2.style.display = "grid";
            prevPageBtn.disabled = false;
            nextPageBtn.disabled = false;
        } else if (page === 3) {
            galleryPage3.style.display = "grid";
            nextPageBtn.disabled = true;
            prevPageBtn.disabled = false;
        }
    }

    prevPageBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextPageBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Inicializar la primera página
    showPage(currentPage);
});
