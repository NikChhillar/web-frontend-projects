const d1 = document.getElementById("day");
const h1 = document.getElementById("hour");
const m1 = document.getElementById("mins");
const s1 = document.getElementById("sec");

const newyrT = new Date("Jan 1, 2024 00:00:00").getTime();

updateCdown();

function updateCdown() {
    const now = new Date().getTime();
    const gap = newyrT - now;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    const rd = Math.floor(gap / d);
    const rh = Math.floor((gap % d) / h);
    const rm = Math.floor((gap % h) / m);
    const rs = Math.floor((gap % m) / s);


    d1.innerHTML = rd;
    h1.innerHTML = rh;
    m1.innerHTML = rm;
    s1.innerHTML = rs;

    setTimeout(updateCdown, 1000);
}

