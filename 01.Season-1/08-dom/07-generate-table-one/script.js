// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here        
    let target = document.getElementById("target");
    let table = document.createElement("table");
    table.id = "tableId";
    target.appendChild(table);
    function create1row(){
        let element = document.getElementById("tableId");
        let row = document.createElement("tr");
        row.id = "myTr";
        let col = document.createElement("td");
        row.appendChild(col);
        element.appendChild(row);
    }   
    for (let index = 1; index < 11; index++) {
        create1row();
        
    }
})();
