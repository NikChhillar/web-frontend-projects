const textareaE = document.getElementById("textarea");
const totalC = document.getElementById("total-counter");
const remainingC = document.getElementById("remaining-counter");

textareaE.addEventListener("keyup", () => {
    updateCount();
});
updateCount();
function updateCount() {
    totalC.innerText = textareaE.value.length;
    remainingC.innerText = textareaE.getAttribute("maxLength") - textareaE.value.length;
}