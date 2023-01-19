const inputE = document.querySelector(".input");
const bodyE = document.querySelector("body");

inputE.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody() {
    if (inputE.checked) {
        bodyE.style.background = "black";
    } else {
        bodyE.style.background = "white";
    }
}

inputE.addEventListener("input", () => {
    updateBody();
    updateLStorage();
})

function updateLStorage() {
    localStorage.setItem("mode", JSON.stringify(inputE.checked))
}