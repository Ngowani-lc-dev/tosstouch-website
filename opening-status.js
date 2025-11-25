// Salon opening hours
const openingHours = {
    1: { open: 9, close: 18 },
    2: { open: 9, close: 18 },
    3: { open: 9, close: 18 },
    4: { open: 9, close: 18 },
    5: { open: 9, close: 18 },
    6: { open: 9, close: 14 },
    0: null
};

const now = new Date();
const day = now.getDay();
const hour = now.getHours();
const statusElement = document.getElementById("status");

function getNextOpeningDay() {
    for (let i = 1; i <= 7; i++) {
        const nextDay = (day + i) % 7;
        if (openingHours[nextDay]) {
            return { day: nextDay, time: openingHours[nextDay].open };
        }
    }
}

if (!openingHours[day]) {
    const nextOpen = getNextOpeningDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    statusElement.textContent =
        `Closed Today – Opens ${days[nextOpen.day]} at ${nextOpen.time}:00`;
    statusElement.style.color = "red";
} else {
    const { open, close } = openingHours[day];

    if (hour >= open && hour < close) {
        statusElement.textContent = "Open Now";
        statusElement.style.color = "green";
    } else {
        const nextOpen =
            hour < open
                ? { day: day, time: open }
                : getNextOpeningDay();

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        statusElement.textContent =
            `Closed Now – Opens ${days[nextOpen.day]} at ${nextOpen.time}:00`;
        statusElement.style.color = "red";
    }
}
