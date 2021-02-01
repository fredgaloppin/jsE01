// 08-dom/02-select-two/script.js - 8.2: select by css selector


(() => {
    // p[1].textContent='owned';
    let x = document.querySelector('section > p');
    console.log(x);
    x.textContent = "owned";

})();
