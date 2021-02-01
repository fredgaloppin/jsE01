
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    let today = new Date(); 
    let now = today.getHours()

    if (now <= 18) {
    document.getElementById("target").innerHTML = "Hello!"
    }
    else {
    document.getElementById("target").innerHTML = "Good evening!"
    }

})();
