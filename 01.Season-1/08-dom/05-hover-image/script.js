// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

	let image = document.getElementById("source");
	let img = document.createElement('img'); 
    img.src = image.dataset.image;
	document.getElementById('source').appendChild(img);
	let v = document.getElementById('source'); 
 
})();

{/* <section class="material">
<figure>
  <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />
</figure>
</section> */}