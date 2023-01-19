const bodyE = document.querySelector("body");

bodyE.addEventListener("mousemove", (e) => {
    const xP = e.offsetX;
    const yP = e.offsetY;

    const spanE = document.createElement("span");
    spanE.style.left = xP + "px";
    spanE.style.top = yP + "px";
    const size = Math.random() * 100;
    spanE.style.width = size + "px";
    spanE.style.height = size + "px";
    bodyE.appendChild(spanE);
    setTimeout(() => {
        spanE.remove();
    }, 2000);
})