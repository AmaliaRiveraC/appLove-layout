/*
 * Archivo principal de funcionalidad de JS
 */
var imagenModal = document.getElementsByClassName("imagenes");
var modal = document.getElementsByClassName("modal")[0];
var imagen = document.getElementById("image");
var atrasarModal = document.getElementById("atrasarModal");
var adelantarModal = document.getElementById("adelantarModal");
var n = 1;

for(var i=0; i < imagenModal.length; i++) {
    imagenModal[i].addEventListener("click", function() {
    	imagen.src = "assets/" + "images/" + "img-" + i + ".jpg";
    	modal.style.display = "block";
    });
}



	
		/* for(var j=0; j < imagenModal) {
			atrasarModal.addEventListener("click", function() {
			imagen.src = "assets/" + "images/" + "img-" + [j -1] + ".jpg";
			modal.style.display = "block";
	});

}*/



/*function aparecerModal () {
    modal.style.display = "block";
    imagen.src = this.src;
}*/



