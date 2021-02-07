// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    const performOperation = operation => {
        function display() {
            let i = parseInt(document.getElementById("part-one").textContent);
            let j = parseInt(document.getElementById("part-two").textContent);
            if (j<10) {
                j = "0"+j
            }
            let k = parseInt(document.getElementById("part-three").textContent);
            if (k<10) {
                k = "0"+k
            }
            let l = parseInt(document.getElementById("part-four").textContent);
            if (l<10) {
                l = "0"+l
            }
            document.getElementById("target").innerHTML = "+"+i+j+k+l;
        }
        switch (operation) {
            case "part-one":
                let data1 = document.getElementById("part-one");
                let maxi1 = parseInt(data1.getAttribute("data-max"));
                let i = parseInt(data1.textContent);
                if (i <= maxi1) {
                    i += 1;
                    document.getElementById("part-one").innerHTML = i;
                }
                display();
                break;
            case "part-two":
                let data2 = document.getElementById("part-two");
                let maxi2 = parseInt(data2.getAttribute("data-max"));
                let j = parseInt(data2.textContent)
                if (j <= maxi2) {;
                j += 1;
                document.getElementById("part-two").innerHTML = j;
                }
                display();
                break;
            case "part-three":
                let data3 = document.getElementById("part-three");
                let maxi3 = parseInt(data3.getAttribute("data-max"));
                let k = parseInt(data3.textContent);
                if (k <= maxi3) {
                k += 1;
                document.getElementById("part-three").innerHTML = k;
                }
                display();
                break;  
            case "part-four":
                let data4 = document.getElementById("part-four");
                let maxi4 = parseInt(data4.getAttribute("data-max"));
                let l = parseInt(data4.textContent);
                if (l <= maxi4) {
                l += 1;
                document.getElementById("part-four").innerHTML = l;
                }
                display();
                break;      
            default:
                break;
        }
    };
    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();
//-----------html-----------//
/* <section class="material">
<p id="target">+460000000</p>
<div class="actions">
    <button type="button" id="part-one" data-min="460" data-max="499">460</button>
    <button type="button" id="part-two" data-min="00" data-max="99">00</button>
    <button type="button" id="part-three" data-min="00" data-max="99">00</button>
    <button type="button" id="part-four" data-min="00" data-max="99">00</button>
</div> */