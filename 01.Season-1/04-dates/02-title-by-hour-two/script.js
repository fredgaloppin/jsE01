
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    let today = new Date(); 
    let hour = today.getHours();
    let now = today.getMinutes();
    if (hour <= 17) {
        if (now <= 30 ) {
            document.getElementById("target").innerHTML = "Hello!"
        } else {
            document.getElementById("target").innerHTML = "Good evening!"
        }
    }
    else {
    document.getElementById("target").innerHTML = "Good evening!"
    }

})();
