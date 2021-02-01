
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    do {
        let age = parseInt(prompt("age please?: "));
        let gender = prompt("gender please: F for female, M for male and x for anyelse");
        let town = prompt("Town please? ");
        var confirm = prompt("Hello! Those are you infos: "+ "\n"+"age:"+age
        +"\n"+"gender: "+gender+"\n"+"town: "+town+"\n"+
        "Do you confirm?"+"\n"+ "y for yes"+"\n" +"and n for no: ");
    } while (confirm == "n") 
    alert("thanks")
})();

