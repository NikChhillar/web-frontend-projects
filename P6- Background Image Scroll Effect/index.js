const bgImg = document.getElementById("bg-img");

window.addEventListener("scroll", () => {

    updateImg();

})

function updateImg() {
    bgImg.style.opacity = 1 - (window.pageYOffset / 900);
    bgImg.style.backgroundSize = 100 - window.pageYOffset / 12 + "%";
}

