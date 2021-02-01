
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {
    const performOperation = operation => {

        switch (operation) {
            case "green":
                document.body.style.backgroundColor = "green";
                break;
            case "yellow":
                document.body.style.backgroundColor = "yellow";
                break;
            case "blue":
                document.body.style.backgroundColor = "blue";
                break;  
            case "red":
                document.body.style.backgroundColor = "red";
                break;      
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

