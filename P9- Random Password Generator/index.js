const btnGenerate = document.querySelector(".btn");
const copyIc = document.querySelector(".fa-copy");
const toastD = document.querySelector(".alert-con");
const psdGenerated = document.getElementById("input");


btnGenerate.addEventListener("click", () => {
    createPswd();
})

copyIc.addEventListener("click", () => {
    copyPswd();
    toastD.classList.remove("active");
    setTimeout(() => { toastD.classList.add("active") }, 1500);
})

function createPswd() {
    const characters = "0123456789abcdefghijklmnopqsrtuvwxyz!@#$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVwXYZ";
    const pswdLen = 15;
    let pd = "";
    for (let i = 0; i < pswdLen; i++) {
        const randomN = Math.floor(Math.random() * characters.length);
        pd += characters.substring(randomN, randomN + 1);

    }
    psdGenerated.value = pd;
    toastD.innerHTML = `${pd} copied!!`;
}

function copyPswd() {
    psdGenerated.select();
    psdGenerated.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(psdGenerated.value);

}