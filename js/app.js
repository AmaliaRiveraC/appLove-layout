/*
 * Archivo principal de funcionalidad de JS
 */
var imagenModal = document.getElementsByClassName("imagenes");
var modal = document.getElementsByClassName("modal")[0];
var imagen = document.getElementById("image");
var atrasarImagen = document.getElementById("atrasarmodal");
var adelantarImagen = document.getElementById("adelantarmodal");

for(var i=0; i < imagenModal.length; i++) {
    imagenModal[i].addEventListener("click", aparecerModal);
}

for(var i=0; i < imagenModal.length) {
    
}

function aparecerModal () {
    modal.style.display = "block";
    imagen.src = this.src;
}

function adelantarModal() {
    for(var i=0)
}

