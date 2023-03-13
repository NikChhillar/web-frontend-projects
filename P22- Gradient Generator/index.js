const colorInp = document.querySelectorAll(".colors input");
const gradientEl = document.querySelector(".gradient");
const selectbox = document.querySelector(".select-box select");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");
//

const getRandomClr = () => {
    const rdmClr = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${rdmClr}`;
};

//
const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInp[0].value = getRandomClr();
        colorInp[1].value = getRandomClr();
    }
    const gradient = `linear-gradient(${selectbox.value}, ${colorInp[0].value}, ${colorInp[1].value})`;
    gradientEl.style.background = gradient;
    textArea.value = `background: ${gradient}`;
};

colorInp.forEach((inp) => {
    inp.addEventListener("input", () => generateGradient(false));
});

selectbox.addEventListener("change", () => generateGradient(false));

refreshBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerHTML = "Copied..!";
    setTimeout(() => (copyBtn.innerHTML = "Copy Code"), 1000);
});

