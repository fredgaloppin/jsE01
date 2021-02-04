// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


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
//----------html-------------//
/* <div class="field">
<label for="pass-one">Password:</label>
<input type="text" name="pass-one" id="pass-one" />
</div>
<div class="field">
<label for="pass-two">Re-enter password:</label>
<input type="text" name="pass-two" id="pass-two" />
</div> */