
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let op1 = (document.getElementById("op-one").value);
        let op2 = (document.getElementById("op-two").value);
        alert(parseInt(op1)+parseInt(op2));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let op1 = (parseInt(document.getElementById("op-one").value));
        let op2 = (parseInt(document.getElementById("op-two").value));
        alert(op1-op2);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let op1 = (parseInt(document.getElementById("op-one").value));
        let op2 = (parseInt(document.getElementById("op-two").value));
        alert(op1*op2);
    });

    document.getElementById("division").addEventListener("click", function() {
        let op1 = (parseInt(document.getElementById("op-one").value));
        let op2 = (parseInt(document.getElementById("op-two").value));
        alert(op1/op2);
    });
})();
