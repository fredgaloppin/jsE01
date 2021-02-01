// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    console.log(fruits);
    document.getElementById("run").addEventListener("click", () => {
        fruits.pop();
        fruits.shift();
        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);
    });

})();
