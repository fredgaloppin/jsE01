// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

	let image = document.getElementById("source");
	let img = document.createElement('img'); 
    img.src = image.dataset.image;
	document.getElementById('source').appendChild(img);
	let v = document.getElementById('source');  
	delete v.dataset.image;

	
})();
