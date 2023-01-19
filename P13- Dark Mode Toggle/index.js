const inputE = document.querySelector(".input");
const bodyE = document.querySelector("body");

function updateBody() {
    if (inputE.checked) {
        bodyE.style.background = "black";
    } else {
        bodyE.style.background = "white";
    }
}

inputE.addEventListener("input", () => {
    updateBody();
})