// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    function display(a,b){
        let element = txt[a];
        let result = element.fontsize(b);
        document.getElementById("target").innerHTML += result;
    }
    let txt = document.querySelector("#target").textContent.split('');
    target.innerHTML = "";
   
    for (let j = 0; j < txt.length; j++) {
        if (j%8 ==0) {
            display(j,7);
        }
        if (j%8 ==1 || j%8 ==7) {
            display(j,6);
        }
        if (j%8 ==2 || j%8 ==6) {
            display(j,5);
        } 
        if (j%8 ==3 || j%8 ==5) {
            display(j,4); 
        }              
        if (j%8 ==4) {
            display(j,2);
        }
    }
})();

        