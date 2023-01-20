const nextBtn = document.getElementById("next");
const preBtn = document.getElementById("pre");
const stepsE = document.querySelectorAll(".step");
const pFront = document.querySelector(".progress-front");

let currentChecked = 1;


nextBtn.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepsE.length) {
        currentChecked = stepsE.length;
    }
    updateStepP();
})

preBtn.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepP();
})

function updateStepP() {
    stepsE.forEach((stepE, index) => {
        if (index < currentChecked) {
            stepE.classList.add("checked");
            stepE.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${index === 0 ? "Start" : index === stepsE.length - 1 ? "Finished" : "Step " + index}</small>
            `;
        } else {
            stepE.classList.remove("checked");
            stepE.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `;
        }
    });
    const checkedNo = document.querySelectorAll(".checked");
    pFront.style.width = ((checkedNo.length - 1) / (stepsE.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        preBtn.disabled = true;
    } else if (currentChecked === stepsE.length) {
        nextBtn.disabled = true;
    } else {
        preBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
