// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get fullName() {
            return this.firstname + " " + this.lastname;
          }
        set changeName(newName){
            let arr = newName.split(" ");
            this.firstname = arr[0];
            this.lastname = arr[1];
            // return fullName;
        }
    }
    
    document.getElementById("run").addEventListener("click", () => {

        let neo = new Person("Arturus", "Whitekop");
        console.log(neo.fullName);
        neo.changeName = 'Sarah Connor';
        console.log(neo.fullName);
     
    });

})();

    
