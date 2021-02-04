// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    const x = document.getElementsByTagName("img")[0];
 
    let i = 0;
        document.getElementById("next").addEventListener("click", () => {
            if (i == gallery.length-1) {
                i = 0;
            } else {
                i += 1;
            }
            x.src = gallery[i];
              
        });
    

})();


