const btnWatch = document.querySelector(".btn");
const btnClose = document.querySelector(".close");
const trailerCon = document.querySelector(".trailer-con");
const videoE = document.querySelector("video");


btnWatch.addEventListener("click", () => {
    trailerCon.classList.remove("active");
})
btnClose.addEventListener("click", () => {
    trailerCon.classList.add("active");
    videoE.pause();
    videoE.currentTime = 0;
})