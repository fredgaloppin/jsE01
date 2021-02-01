// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        
        constructor(name, sayHello) {
            super(sayHello);
            this.name = name;
        }
        static greeting = "Miaoouuh";
    }
    class Dog extends Animal {
        constructor(name, sayHello) {
            super(sayHello);
            this.name = name;
        }
        static greeting = "WoufWouf";
    }
    document.getElementById("run").addEventListener("click", () => {

        let neo = new Cat("Arturus");
        let nuevo = new Dog("Dubalai");
     
        console.log(neo.sayHello()+"\n"+nuevo.sayHello());
     
    });

})();
