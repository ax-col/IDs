function startTimer(idPrefix, startDate) {
    const yearsElement = document.getElementById(idPrefix + '-years');
    const daysElement = document.getElementById(idPrefix + '-days');
    const hoursElement = document.getElementById(idPrefix + '-hours');
    const minutesElement = document.getElementById(idPrefix + '-minutes');
    const secondsElement = document.getElementById(idPrefix + '-seconds');

    function updateTimer() {
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let startYearAnniversary = new Date(startDate);
        startYearAnniversary.setFullYear(now.getFullYear());

        if (now < startYearAnniversary) {
            years--;
        }

        let pastAnniversary = new Date(startDate);
        pastAnniversary.setFullYear(startDate.getFullYear() + years);

        let days = Math.floor((now - pastAnniversary) / 86400000);
        let hours = Math.floor(((now - pastAnniversary) % 86400000) / 3600000);
        let minutes = Math.floor(((now - pastAnniversary) % 3600000) / 60000);
        let seconds = Math.floor(((now - pastAnniversary) % 60000) / 1000);

        yearsElement.textContent = String(years).padStart(2, '0');
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
    updateTimer();
}

// Llamada correcta a los contadores con prefijos bien definidos
window.onload = function () {
    startTimer("counter1", new Date("2021-08-22T16:40:00"));
    startTimer("counter2", new Date("2021-03-19T12:00:00"));
    startTimer("counter3", new Date("2023-06-29T10:30:00"));
    startTimer("counter4", new Date("2023-07-13T14:45:00"));
};