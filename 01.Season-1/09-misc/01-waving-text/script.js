// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    let txt = document.querySelector("#target").textContent.split('');
    target.innerHTML = "";
   
    for (let j = 0; j < txt.length; j++) {
        if (j==0 || j%8 ==0) {
            let element = txt[j];
            let result = element.fontsize(7);
            document.getElementById("target").innerHTML += result;
        }
        if (j==1 || j%8 ==1 || j%8 ==7) {
            let element = txt[j];
            let result = element.fontsize(6);
            document.getElementById("target").innerHTML += result;
        }
        if (j==2 || j%8 ==2 || j%8 ==6) {
            let element = txt[j];
            let result = element.fontsize(5);
            document.getElementById("target").innerHTML += result; 
        } 
        if (j==3 || j%8 ==3 || j%8 ==5) {
            let element = txt[j];
            let result = element.fontsize(4);
            document.getElementById("target").innerHTML += result; 
            
        }              
        if (j==4 || j%8 ==4) {
            let element = txt[j];
            let result = element.fontsize(2);
            document.getElementById("target").innerHTML += result; 
        }
    }

})();

        