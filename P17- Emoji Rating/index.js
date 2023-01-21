const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".far");
const clrs = ["red", "orange", "purple", "blue", "green"];

updateRating(0);

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(indx) {
    stars.forEach((star, i) => {
        if (i < indx + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
    emojis.forEach(emoji => {
        emoji.style.transform = `translateX(-${indx * 50}px)`;
        emoji.style.color = clrs[indx];
    });
}
