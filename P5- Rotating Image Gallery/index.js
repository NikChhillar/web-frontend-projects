const imgCont = document.querySelector(".img-con");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");
let x = 0;
let timer;
btnPrevious.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGal();
});
btnNext.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGal();
});

function updateGal() {
    imgCont.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGal();
    }, 2500);
}

updateGal();