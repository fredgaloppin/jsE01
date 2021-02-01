// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () => {
        if (fruits.includes("apple") == true) {
            console.log("Yes, there is at last, one apple in the arrayfruits");
        }
        else {
            console.log("No apple in the arrayfruits");
        }
    });

})();
