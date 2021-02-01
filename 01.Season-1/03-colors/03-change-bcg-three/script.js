
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let color = "hsl(" + Math.floor(Math.random() * 360)+", "+Math.floor(Math.random() * 100)
        +"%, "+Math.floor(Math.random() * 100)+"%)";
        document.body.style.backgroundColor = color;
        console.log(color);
    });
    

})();

