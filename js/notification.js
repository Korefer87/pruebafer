document.addEventListener("DOMContentLoaded", function () {
    // Crear el contenido de la notificación
    const notificationHTML = `
        <div class="flag">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="Mexico Flag">
        </div>
        <div class="message">
            <strong>Karina from MX</strong> just booked 1 day ago.
        </div>
        <button class="close-btn">&times;</button>
    `;

    // Crear el div de notificación
    const notification = document.createElement('div');
    notification.className = 'reservation-notification';
    notification.innerHTML = notificationHTML;

    // Agregar la notificación al body
    document.body.appendChild(notification);

    // Mostrar la notificación después de 10 segundos (10000 ms)
    setTimeout(() => {
        notification.classList.add('show'); // Aplicar clase 'show' para hacerla visible

        // Cerrar automáticamente la notificación después de 10 segundos (10000 ms)
        setTimeout(() => {
            notification.classList.remove('show'); // Ocultar después de 10 segundos
        }, 10000);
    }, 10000);

    // Cerrar la notificación cuando se haga clic en el botón de cerrar
    const closeButton = notification.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        notification.classList.remove('show'); // Quitar la clase 'show' para ocultarla
    });
});
