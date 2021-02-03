// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    
    var choice = prompt("Do you want to play?"+"\n"+"y for yes"+"\n"+"n for no");

    while (choice =="y"){ 
        let answer = Math.floor(Math.random() * 99) +1;
        console.log(answer);
        i=1;
        while (i <=7){
            let guess = prompt ("guess: ");
            if (answer == guess) {
                alert("We got a winner"+" ,"+i+" attempts!");
                break;
            } else {
                left = 7-i
                i += 1;
                if (answer<guess) {
                    alert("too high"+"\n"+left+ " attempts left!");
                } else {
                    alert("too low"+"\n"+left+ " attempts left!");
                } 
            }
        }
        if (i > 7) {
            alert("Serial looser")
        }
        var choice = prompt("again? 'til death tears us apart!"+"\n"+"y for yes"+"\n"+"n for no");
    }

    alert("thanks for your visit")
})();
