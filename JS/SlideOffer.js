const offer_Text_Arr = ["Welcome to ANYTRADE", "Get 50% off on your first purchase", "Sing up to get 20% off on any Purchase"]

window.addEventListener("DOMContentLoaded", () => {
    const offer_Slide = document.getElementById("slide");
    let index = 0;
    function text_Change() {

        offer_Slide.textContent = offer_Text_Arr[index];
        index += 1;

        if (index == offer_Text_Arr.length) {
            index = 0;
        }
    }

    text_Change();
    setInterval(text_Change, 9000);
})


