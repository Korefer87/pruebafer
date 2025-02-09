document.addEventListener("DOMContentLoaded", function () {
    const countdownContainer = document.querySelector("#tequila-countdown");
    const countdownMask = document.querySelector("#tequila-mask");
    const tequilaSection = document.querySelector("#tequila-tour");

    // Función para actualizar la cuenta regresiva
    function updateCountdown() {
        const now = new Date();
        const nextDeparture = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0, 0); // 11:00 AM hoy

        if (now > nextDeparture) {
            nextDeparture.setDate(nextDeparture.getDate() + 1);
        }

        const remainingTime = nextDeparture - now;
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        countdownContainer.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);

    // Redirigir a la sección del tour de tequila al hacer clic en el contador o el texto
    countdownMask.addEventListener("click", function () {
        tequilaSection.scrollIntoView({ behavior: "smooth" });
    });
});
