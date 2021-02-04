// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let passw = document.getElementById("pass-one").value;
        let repassw = document.getElementById("pass-two").value;
        if (passw === repassw) {
            alert("Well done!");
        } else {
            Array.from(document.querySelectorAll("input")).forEach($input =>
                $input.style.border = "thick solid red"
            );
            
        }
    });
})();

