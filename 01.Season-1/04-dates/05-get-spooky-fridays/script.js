
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("year").value;
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        let message = "";
            for (let index = 0; index < months.length; index++) {
                let d = new Date(year, index, 13);
                if (d.getDay() == 5) {
                    message += months[d.getMonth()]+"\n";
                }
            }

        alert(message);

    });

})();
