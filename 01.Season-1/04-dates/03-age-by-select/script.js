
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    document.getElementById("run").addEventListener("click", () => {
    let today = new Date();
    let day = document.querySelector("#dob-day").value;
    let month = document.querySelector("#dob-month").value;
    let year = document.querySelector("#dob-year").value;
    let age = today.getFullYear() - year;
    if (month>today.getMonth() + 1) {
        age -= 1;
    } 
    else if (month == today.getMonth() + 1  && day > today.getDate() ) {
        age += 1;
    }
    alert(age + " year(s) old");
    });
    //----------------------------other--doesn't wotk--------------------------//
    
//     document.getElementById("run").addEventListener("click", () => {
//     function calculate_age(dob) { 
//         var diff_ms = Date.now() - dob.getTime();
//         var age_dt = new Date(diff_ms); 
      
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }
//     let day = document.querySelector("#dob-day").value;
//     let month = document.querySelector("#dob-month").value;
//     let year = document.querySelector("#dob-year").value;
//     alert(calculate_age(new Date(year, month, day)));
// });
})();
