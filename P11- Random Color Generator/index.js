const contMain = document.querySelector(".con");

for (let i = 0; i < 30; i++) {
    const clrConT = document.createElement("div");
    clrConT.classList.add("clr-con");
    contMain.appendChild(clrConT);
}

const clrConts = document.querySelectorAll(".clr-con");

generateClr();

function generateClr() {
    clrConts.forEach((clrConT) => {
        const newClr = randonClr();
        clrConT.style.backgroundColor = "#" + newClr;
        clrConT.innerHTML = "#" + newClr;
    })
}



function randonClr() {
    const characters = "0123456789abcdef";
    const clrLen = 6;
    let colorC = "";
    for (let i = 0; i < clrLen; i++) {
        const randomN = Math.floor(Math.random() * characters.length);
        colorC += characters.substring(randomN, randomN + 1);
    }
    return colorC;
}
