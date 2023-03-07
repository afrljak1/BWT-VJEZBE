function ucitaj1(){

    var ajax = new XMLHttpRequest(); //iskoristeno iz postavke vjezbe
ajax.onreadystatechange = function() {// Anonimna funkcija
	if (ajax.readyState == 4 && ajax.status == 200)
		document.getElementById("polje").innerHTML = ajax.responseText;
	if (ajax.readyState == 4 && ajax.status == 404)
		document.getElementById("sadrzaj").innerHTML = "Greska: nepoznat URL";
}
ajax.open("GET", "stranica1.html", true);
ajax.send();

}


function ucitaj2(){

    var ajax = new XMLHttpRequest(); 
ajax.onreadystatechange = function() {// Anonimna funkcija
	if (ajax.readyState == 4 && ajax.status == 200)
		document.getElementById("polje").innerHTML = ajax.responseText;
	if (ajax.readyState == 4 && ajax.status == 404)
		document.getElementById("sadrzaj").innerHTML = "Greska: nepoznat URL";
}
ajax.open("GET", "stranica2.html", true);
ajax.send();

}


function ucitaj1(){

    var ajax = new XMLHttpRequest(); 
ajax.onreadystatechange = function() {// Anonimna funkcija
	if (ajax.readyState == 4 && ajax.status == 200)
		document.getElementById("polje").innerHTML = ajax.responseText;
	if (ajax.readyState == 4 && ajax.status == 404)
		document.getElementById("sadrzaj").innerHTML = "Greska: nepoznat URL";
}
ajax.open("GET", "stranica3.html", true);
ajax.send();

}