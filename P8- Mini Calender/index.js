const mnthN = document.getElementById("mnth");
const yrN = document.getElementById("yr");
const dayN = document.getElementById("dayNum");
const dateN = document.getElementById("dateNo");




mnthN.innerHTML = new Date().toLocaleString("en", {
    month: "long"
})
yrN.innerHTML = new Date().getFullYear();
dateN.innerHTML = new Date().getDate();
dayN.innerHTML = new Date().toLocaleString("en", {
    weekday: "long"
})

