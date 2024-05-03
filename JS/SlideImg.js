import { img_Arr } from "../Data/Data.js";

window.addEventListener("DOMContentLoaded", () => {
    const previous_Btn = document.getElementById("previous_btn");
    const next_Btn = document.getElementById("next_btn");
    const slid_Img = document.getElementById("slid_img");
    let index = 0;

    previous_Btn.addEventListener("click", () => {
        index -= 1;
        if (index < 0) {
            index = img_Arr.length - 1;
        }
        slid_Img.setAttribute("src", img_Arr[index]);
    });

    next_Btn.addEventListener("click", () => {
        index += 1;
        if (index >= img_Arr.length) {
            index = 0;
        }
        slid_Img.setAttribute("src", img_Arr[index]);
    });

    function change_Img() {
        index++;
        if (index >= img_Arr.length) {
            index = 0;
        }
        slid_Img.setAttribute("src", img_Arr[index]);
    }


    change_Img();
    setInterval(change_Img, 4000);
});
