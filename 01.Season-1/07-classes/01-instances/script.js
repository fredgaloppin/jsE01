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
        function findObject(array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    return array[i];
                }
            }
            return null;
        }
        console.log(findObject(cats, "name", "Skitty"));
        console.log(findObject(cats, "name", "Pixel"));

    });
})();
