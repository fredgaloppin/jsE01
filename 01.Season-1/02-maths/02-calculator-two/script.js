
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let op1 = (parseInt(document.getElementById("op-one").value));
        let op2 = (parseInt(document.getElementById("op-two").value));

        switch (operation) {
            case "addition":
                alert(op1+op2)
                break;
            case "substraction":
                alert(op1-op2)
                break;
            case "multiplication":
                alert(op1*op2)
                break;
            case "division":
                alert(op1/op2)
                break;       
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();


