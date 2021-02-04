// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    let target = document.getElementById("target");
    let table = document.createElement("table");
    table.id = "tableId";
    target.appendChild(table);
    function createrow(par){
        let element = document.getElementById("tableId");
        let row = document.createElement("tr");
        row.id = 'tr'+par ;
        element.appendChild(row);
    }
    function createcol(i,j,row){
        let col = document.createElement("td");
        col.id = 'td'+i+j;
        row.appendChild(col);
    }
       
    for (let index = 1; index < 11; index++) {
        createrow(index);
        for (let j = 1; j < 11; j++) {
        createcol(index,j,document.getElementById("tr"+index));
        document.getElementById("td"+index+j).innerHTML = index*j;
        }
    }

})();
