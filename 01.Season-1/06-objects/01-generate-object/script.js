// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let member = {
            lastName: "Galoppin",
            firstName: "Frédéric",
            age: 42,
            city: "DTC",
            country: "Belgium"
        }
        console.log(member);
    });
})();
