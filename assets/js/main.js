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


  //VALIDACION FORMULARIO
  window.onload = function(){
    var element = document.querySelector(".form");
    element.addEventListener("submit", function(event) {
      event.preventDefault();
  		});
  var inputs=document.getElementsByClassName("form-control");
  var nombre=document.getElementById("name");
  var apellido=document.getElementById("lastname");
  var mensaje=document.getElementById("commits");
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  var letras = function(e){
    var codigo = e.keyCode;
    if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90) || codigo==39 || codigo==32){
      this.nextElementSibling.innerText = "";
      this.nextElementSibling.style.display = "none";
      return true;
    }else{
      this.nextElementSibling.innerText = "Ingrese sólo letras";
      this.nextElementSibling.style.display = "inline-block";
      return false;
    }
  }
  nombre.onkeypress=letras;
  apellido.onkeypress=letras;

  var correo=document.getElementById("fake");
  var vEmail=function() {
    console.log(this.value);
    if(emailRegex.test(this.value)==true){
      this.nextElementSibling.innerText = "";
      this.nextElementSibling.style.display = "none";
    }else {
      this.nextElementSibling.innerText = "Ingrese E-mail correcto";
      this.nextElementSibling.style.display = "inline-block";
    }
  }
  correo.addEventListener("blur", vEmail);

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
    inputs[i].onblur=validar;}
    }

document.getElementById("boton").addEventListener("click", display);

function display() {
    document.getElementById('modal').style.display='block'
}

document.getElementById("equis").addEventListener("click", equis);
function equis() {
    window.scrollTo(0, 0);
    document.getElementById('modal').style.display='none'
}
