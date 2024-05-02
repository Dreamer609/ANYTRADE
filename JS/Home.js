const img_Arr = ["/Images/desktop-wallpaper-footer.jpg", "/Images/download.jpg"]

window.addEventListener("DOMContentLoaded", () => {
    const img_slid = document.getElementById("slid_img");
    img_slid.setAttribute("src", img_Arr[0])
    let index = 0;
    const previous_Btn = document.getElementById("previous_btn");
    previous_Btn.addEventListener("click", () => {
        index -= 1;
        if (index == img_Arr.length) {
            index = 0;
        }
        img_slid.setAttribute("src", img_Arr[index])
        console.log(index);
    })
})

