var contador = 0;

function carrousel() {
    var i;
    var fotos = document.getElementsByClassName("fondo");
    for (i = 0; i < fotos.length; i++) {
       fotos[i].style.display = "none";
    }
    contador++;
    if (contador > fotos.length) {contador = 1}
    fotos[contador-1].style.display = "block";
    setTimeout(carrousel, 2500);
}
carrousel();
