//Carrousel

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

window.onload = function(){

	var element = document.querySelector(".form");
		element.addEventListener("submit", function(event) {
			event.preventDefault();
	});

	var inputs = document.getElementsByClassName("form-control");
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("fake");
	var mensaje = document.getElementById("commits");
	var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	var adopta = document.getElementById("boton-adopta");
	var dona = document.getElementById("boton-dona");

	//Botones

	adopta.addEventListener("click", function(){
		location.href = "adoptme.html"
	})

	dona.addEventListener("click", function(){
		location.href = "https://www.paypal.com/"
	})

	// Validación de formulario de contacto

	var letras = function(e){

		var codigo = e.keyCode;

		if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90) || codigo==39 || codigo==32){
			this.nextElementSibling.innerText = "";
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "Ingrese sólo letras"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	nombre.onkeypress=letras;
	apellido.onkeypress=letras;

	var validar = function(){
		if(this.value.trim().length == 0){
			this.value = "";
			this.nextElementSibling.innerText = "Este campo es obligatorio";
			this.nextElementSibling.style.display = "inline-block";
		}else{
			this.nextElementSibling.innerText = "";
			this.nextElementSibling.style.display = "none";
		}
	}

	for(var i=0;i<inputs.length;i++){
		inputs[i].onblur=validar;
	}
}