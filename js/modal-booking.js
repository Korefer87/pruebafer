document.addEventListener("DOMContentLoaded", function () {
    const clickMask = document.querySelector(".click-mask");
    const newClickMask = document.getElementById("newClickMask"); // Nuevo enlace con ID único
    const modal = document.getElementById("bookingModal");
    const closeButton = document.querySelector(".modal-close");
    const closeModalButton = document.getElementById("modalCloseButton");
    const bookingFrame = document.getElementById("bookingFrame");

    // Identificamos los botones de apertura del modal
    const openModalButton = document.getElementById("openModalButton");
    const openModalButton1 = document.getElementById("openModalButton1");
    const secondOpenModalButton = document.getElementById("secondOpenModalButton");
    const thirdOpenModalButton = document.getElementById("thirdOpenModalButton");
    const fourthOpenModalButton = document.getElementById("fourthOpenModalButton");
    const fifthOpenModalButton = document.getElementById("fifthOpenModalButton");
    const sixthOpenModalButton = document.getElementById("sixthOpenModalButton");
    
    // Nuevo botón que debe abrir el modal
    const openModalButtonPrimary = document.getElementById("openModalButtonPrimary");

    // Función para abrir el modal
    function openModal() {
        bookingFrame.src = "https://myallocator.com/booknow/UyRcVc946k26oR-hk2Aehw";
        modal.style.display = "flex"; // Mostrar el modal
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
        bookingFrame.src = ""; // Limpiar el src para detener el iframe
    }

    // Abrir el modal al hacer clic en la máscara invisible existente
    if (clickMask) {
        clickMask.addEventListener("click", openModal);
    }

    // Abrir el modal al hacer clic en el nuevo enlace "newClickMask"
    if (newClickMask) {
        newClickMask.addEventListener("click", openModal);
    }

    // Abrir el modal al hacer clic en los botones "Book Now"
    if (openModalButton) {
        openModalButton.addEventListener("click", openModal);
    }
    if (openModalButton1) {
        openModalButton1.addEventListener("click", openModal);
    }
    if (secondOpenModalButton) {
        secondOpenModalButton.addEventListener("click", openModal);
    }
    if (thirdOpenModalButton) {
        thirdOpenModalButton.addEventListener("click", openModal);
    }
    if (fourthOpenModalButton) {
        fourthOpenModalButton.addEventListener("click", openModal);
    }
    if (fifthOpenModalButton) {
        fifthOpenModalButton.addEventListener("click", openModal);
    }
    if (sixthOpenModalButton) {
        sixthOpenModalButton.addEventListener("click", openModal);
    }

    // Abrir el modal al hacer clic en el nuevo botón "openModalButtonPrimary"
    if (openModalButtonPrimary) {
        openModalButtonPrimary.addEventListener("click", openModal);
    }

    // Cerrar el modal al hacer clic en el botón "X"
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    // Cerrar el modal al hacer clic en el botón azul de cierre
    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }

    // Cerrar el modal al hacer clic fuera del contenido del modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
