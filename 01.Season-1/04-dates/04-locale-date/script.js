
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    let d = new Date();
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let w = week[d.getDay()];
    let months = ["January","February","March",
    "April","May","June","July","August","September","October","November","December"];
    let m = months[d.getMonth()];
    document.getElementById("target").innerHTML =  w+" "+d.getDate()+ " "+m+" "+d.getFullYear()
    +", "+ d.getHours() + "h" + d.getMinutes();

})();
