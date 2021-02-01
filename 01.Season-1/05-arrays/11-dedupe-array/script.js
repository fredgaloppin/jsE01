// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
        function remove_duplicate_in_array(arr) {
            for (let index = 0; index < arr.length; index++) {
                for (let current = index+1; current < arr.length; current++) {		
                    if (arr[index]==arr[current]) {
                        arr.splice(current, 1);
                    }  
                }
            }  
        return (fruits);
        }
        console.log(remove_duplicate_in_array(fruits));
     
    });

})();
