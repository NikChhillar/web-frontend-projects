
const daysThisMonth = document.querySelector(".days");
const monthToday = document.querySelector(".date h1");
const dayToday = document.querySelector(".date p");

const monthsIndex = new Date().getMonth();

const mnths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthToday.innerHTML = mnths[monthsIndex];

dayToday.innerHTML = new Date().toDateString();

const lastDay = new Date(new Date().getFullYear(), monthsIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthsIndex, 1).getDay() + 6;
console.log(firstDay)

let days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }

}
daysThisMonth.innerHTML = days;