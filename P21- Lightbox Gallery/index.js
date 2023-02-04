const gallery = document.querySelectorAll(".gallery .image");
const preview = document.querySelector(".preview");
const shadow = document.querySelector(".shadow");
const closeI = document.querySelector(".icon");
const imageP = preview.querySelector("img");
const currentImg = preview.querySelector(".currentI");
const totalImg = preview.querySelector(".totalI");

window.onload = () => {

    for (let i = 0; i < gallery.length; i++) {

        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickIndex;



        gallery[i].onclick = () => {

            console.log(i);
            clickIndex = newIndex;

            function previewImg() {
                currentImg.textContent = newIndex + 1;
                let selectedIurl = gallery[newIndex].querySelector("img").src;
                console.log(selectedIurl);
                imageP.src = selectedIurl;
            }

            const preBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if (newIndex == 0) {
                preBtn.style.display = "none";
            }
            
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }


            preBtn.onclick = () => {

                newIndex--;
                if (newIndex == 0) {
                    previewImg();
                    preBtn.style.display = "none";
                } else {
                    previewImg();
                    nextBtn.style.display = "block";
                }
            }


            nextBtn.onclick = () => {

                newIndex++;
                if (newIndex >= gallery.length - 1) {
                    previewImg();
                    nextBtn.style.display = "none";
                } else {
                    preBtn.style.display = "block";
                    previewImg();

                }
            }

            previewImg();
            preview.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";


            closeI.onclick = () => {

                newIndex = clickIndex;
                nextBtn.style.display = "block";
                preBtn.style.display = "block";
                preview.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";

            }
        }

    }
}