const n1 = Math.ceil(Math.random() * 100);
const n2 = Math.ceil(Math.random() * 15);

const question = document.getElementById("ques");
const form = document.getElementById("form");
const score = document.getElementById("score");
const inputans = document.getElementById("input");

let sc = JSON.parse(localStorage.getItem("sc"));
if (!sc) {
    sc = 0;
}

question.innerHTML = `What is ${n1} multiply by ${n2} ?`;
score.innerHTML = `score: ${sc}`;

const correctans = n1 * n2;

form.addEventListener("submit", () => {

    const userans = +inputans.value;
    if (userans === correctans) {
        sc++;
        updatelocalStorage();
    } else {
        sc--;
        updatelocalStorage();
    }

});

function updatelocalStorage() {
    localStorage.setItem("sc", JSON.stringify(sc));
}
