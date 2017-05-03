/*
 * Archivo principal de funcionalidad de JS
 */
var imagenModal = document.getElementsByClassName("imagenes");
var modal = document.getElementsByClassName("modal")[0];
var imagen = document.getElementById("image");

for(var i=0; i < imagenModal.length; i++) {
    imagenModal[i].addEventListener("click", aparecerModal);
}

function aparecerModal () {
    modal.style.display = "block";
    imagen.src = this.src;
}

