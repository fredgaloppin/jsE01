
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        var message = ""
        for (let i = 1; i <= 21; i++) {
            let squareNb = Math.sqrt(i);
            let decimalPart = squareNb - Math.floor(squareNb);
            if(decimalPart == 0){
                message += i +": "+ i*i+"\n";
            }
        }
        alert(message);

    });

})();
