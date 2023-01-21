const ques = document.querySelectorAll(".que");

ques.forEach((question) => {
    const btn = question.querySelector(".que-btn");
    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");
    });
});