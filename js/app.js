/*
 * Archivo principal de funcionalidad de JS
 */
var imagenModal = document.getElementsByClassName("imagenes");
var modal = document.getElementsByClassName("modal")[0];
var imagen = document.getElementById("image");
for(var i= 0; i < imagenModal.length; i++) {
    imagenModal[i].addEventListener("click", function() {
        imagen.src = this.src;
        modal.style.display = "block";
    });
}
/*
var arrayModal = Array.from(imagenModal);

var atrasarModal = document.getElementById("atrasarModal");
var adelantarModal = document.getElementById("adelantarModal");






 function crearModal() {
    var seccion = document.appendChild("section");
    var tituloModal = document.createElement("h3");
    var atrasarModal = document.createElement("a");
    var signoAtrasar = document.createTextNode("&#60;");
    var imagen = document.createElement("img");
    var adelantarModal = document.createElement("a");
    var signoAdelantar = document.createTextNode(">");
    var cerrar = document.createElement("a");
    var tacheCerrar= document.createTextNode("x");

    seccion.appendChild(tituloModal);
    seccion.appendChild(atrasarModal);
    atrasarModal.appendChild(signoAtrasar);
    seccion.appendChild(imagen);
    seccion.appendChild(adelantarModal);
    adelantarModal.appendChild(signoAdelantar);
    seccion.appendChild(cerrar);
    cerrar.appendChild(tacheCerrar);

    seccion.className = "modal";
    cerrar.className = "cerrar";
    imagen.className = "imagen";

    cerrar.addEventListener("click", function() {
            seccion.style.visibility = "hidden";
    });

    document.body.appendChild(seccion);
    return seccion;
 }


for(var i=0; i < imagenModal.length; i++){
    imagenModal[i].addEventListener("click", function() {
        obj.style.visibility = "visible";
    })
}
	
for(var j = 0; j < imagenModal.lenght; j++) {
	atrasarModal[j+1].addEventListener("click", function() {
		imagen.src = this.src;
		modal.style.display = "block";
	});

}*/



/*function aparecerModal () {
    modal.style.display = "block";
    imagen.src = this.src;
}*/



