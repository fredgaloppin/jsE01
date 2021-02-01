// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById("run").addEventListener("click", () => {
  
        const arr = [];
        for (let index = 0; index < 10; index++) {
            arr.push(Math.floor(Math.random() * 100) + 1);
            document.getElementById(`n-${index+1}`).innerHTML = arr[index];
        };
     
        document.getElementById("min").innerHTML = Math.min(...arr);
        document.getElementById("max").innerHTML = Math.max(...arr);
        document.getElementById("sum").innerHTML = arr.reduce((a,b) => a +b, 0);
        document.getElementById("average").innerHTML = (arr.reduce((a,b) => a +b, 0))/arr.length;
    });

})();
