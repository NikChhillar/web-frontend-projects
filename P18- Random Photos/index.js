const imgCon = document.querySelector(".img-con");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    imageNo = 10;
    addNewImg();
});

function addNewImg() {
    for (let i = 0; i < imageNo; i++) {
        const newI = document.createElement("img");
        newI.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imgCon.appendChild(newI);

    }

}