// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

	
	var x = document.getElementsByTagName("img")[0];
	x.addEventListener("mouseover", myFunction);
	// let origin = x.src;
	let neo = x.dataset.hover;
	// console.log(x); 
	// console.log(origin);
	// console.log(neo);
	function myFunction() {
		x.src = neo;
	  }
	  
	
})();



