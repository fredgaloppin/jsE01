// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    cats = [];
    neocat = new Cat("Skitty", 9);
    cats.push(neocat);
    nuevocat = new Cat("Pixel", 6);
    cats.push(nuevocat);
    document.getElementById("run").addEventListener("click", () => {
        
        console.log(cats.find(element => element == Skitty));
        console.log(cats.find(element => element == Pixel));

    });
})();
