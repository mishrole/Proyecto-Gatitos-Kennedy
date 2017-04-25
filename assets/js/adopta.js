var text = ["Charada y Lila", "Ben", "Lila", "Charada", "Lucas", "Mateo", "Rayo", "Mimi", "Thor"];

function imageGallery(param){
	return "assets/img/gallery/"+(param+1)+".jpg";
}

function insert(element){
	var div = document.createElement("div");
	var figure = document.createElement("figure");
		figure.setAttribute("class", "figure-gallery");

	var img = document.createElement("img");
	var indice = text.indexOf(element);
		img.setAttribute("src", imageGallery(indice));
		img.setAttribute("alt", element);
		img.setAttribute("class", "cats");


	var a = document.createElement("a");
		a.setAttribute("class", "adopt-me");
		a.setAttribute("href", "adoptme.html")
		a.innerText = "Adóptame";

	var textImg = document.createElement("figcaption");
	var span = document.createElement("span");
		span.innerText = text[indice]

		textImg.appendChild(span);
		figure.appendChild(img);
		figure.appendChild(textImg);
		div.appendChild(figure);
		figure.appendChild(a);

	img.addEventListener("click", function(){
		location.href = "adoptme.html"
	})

	return div;

}

window.addEventListener("load", function(e){

	var gallery = text.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});

});