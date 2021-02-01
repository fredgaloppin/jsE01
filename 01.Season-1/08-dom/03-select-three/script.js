// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {
    x=document.getElementsByClassName("target");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Owned!";    // Change the content
    }
    

})();
