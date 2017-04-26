window.onload = function(){

	var element = document.querySelector(".form");
		element.addEventListener("submit", function(event) {

		event.preventDefault();	

	function opacity(){
		var formContainer = document.getElementById("form-container");
			formContainer.style.opacity = "0.5"
	}

	var nombreGato = document.getElementById("catname").value.length;
	var nombre = document.getElementById("name").value.length;
	var apellido = document.getElementById("lastname").value.length;
	var edad = document.getElementById("age").value;
	var dni = document.getElementById("dni").value.length;
	var telefono = document.getElementById("phone").value.length;
	var direccion = document.getElementById("address").value.length;
	var spanAlert = document.getElementById("alert-message");

	if((nombreGato == 0 || nombre == 0) || (apellido == 0 || edad.length == 0) || (dni == 0 || telefono == 0) || direccion == 0){
		spanAlert.innerText = "Debe llenar todos los campos para continuar.";
		spanAlert.style.display = "block"
	}else{

		spanAlert.style.display = "none"

		if(edad > 17){
			opacity();
			spanAlert.style.display = "block"
			spanAlert.innerText = "Registro exitoso. \n Serás redirigido a la página de inicio.";
			setTimeout(function(){location.href = "index.html"}, 3500);
		}else{
			opacity();
			spanAlert.style.display = "block"
			spanAlert.innerText = "Lo sentimos, necesitas ser mayor de edad para acceder a nuestro registro de pre-adopción. \n Serás redirigido a la página de inicio.";
			setTimeout(function(){location.href = "index.html"}, 5500);
		}
	}

});

	var nombreGato = document.getElementById("catname");
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var edad = document.getElementById("age");
	var dni = document.getElementById("dni");
	var telefono = document.getElementById("phone");
	var direccion = document.getElementById("address");

	var letras = function(e){
		var codigo = e.keyCode;
		if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90) || codigo==39 || codigo==32){
			this.nextElementSibling.innerText = "";
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "Este campo sólo permite letras"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	nombreGato.onkeypress=letras;
	nombre.onkeypress=letras;
	apellido.onkeypress=letras;

	var maxEdad = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 1){
			this.nextElementSibling.innerText = ""
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "Este campo sólo permite edades"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	edad.onkeypress=maxEdad;

	var maxDni = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 7){
			this.nextElementSibling.innerText = ""
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "Este campo sólo permite N° DNI"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	dni.onkeypress=maxDni;

	var numeros = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 8){
			this.nextElementSibling.innerText = ""
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "Ingrese un número válido"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	telefono.onkeypress=numeros;

	var longitudDireccion = function(e){

		if(direccion.value.length > -1){
			direccion.nextElementSibling.innerText = ""
			direccion.nextElementSibling.style.display = "none"
		}
	}

	direccion.onkeypress = longitudDireccion;

	var inputs = document.getElementsByClassName("input-form");
	
	var validate = function(){

		if(this.value.trim().length == 0){
			this.value = "";
			this.nextElementSibling.innerText = "Este campo es obligatorio";
			this.nextElementSibling.style.display = "inline-block"
		}else{
			this.nextElementSibling = "";
			this.nextElementSibling.style.display = "none"
		}
	}

	for(var i = 0; i < inputs.length; i++){
		inputs[i].onblur = validate;
	}

};


