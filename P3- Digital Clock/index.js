const hrs = document.getElementById("hrs");
const mins = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");

function updateDClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let apm = "AM"

    if (h > 12) {
        h = h - 12;
        apm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hrs.innerText = h;
    sec.innerText = s;
    mins.innerText = m;
    ampm.innerText = apm;

    setTimeout(() => { updateDClock(); }, 1000);

}

updateDClock();