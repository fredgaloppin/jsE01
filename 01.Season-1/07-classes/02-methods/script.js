//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayhello() {
            return ("Hello "+this.firstname+" "+ this.lastname)
        }
    }
    
    document.getElementById("run").addEventListener("click", () => {

        let neo = new Person("Arturus", "Whitekop");

        console.log(neo.sayhello());
     
    });

})();
