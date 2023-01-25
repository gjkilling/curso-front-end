
// tomado de : https://desarrolloweb.com/articulos/1214.php//
var banZoom = null 
function creceLetra() 
{ 
var obj = banZoom 
var tma 
tma = parseInt(obj.style.fontSize) 
window.status = obj.style.fontSize 
if (tma<obj.maxTam) 
{ 
obj.style.fontSize = tma + 1 
setTimeout("creceLetra("+obj.maxTam+")",100) 
} 
//else //se comenta para que haga fade out solo una vez
//setTimeout("resetear()",500) //

} 
function resetear(mn, mx, rapidez, idBan) 
{ 
if (banZoom == null) 
{ 
banZoom = document.getElementById(idBan) 
banZoom.maxTam = mx 
banZoom.minTam = mn 
banZoom.rapidez = rapidez 
} 
banZoom.style.fontSize = banZoom.minTam 
setTimeout("creceLetra()",rapidez) 
} 


const mostrar = (elemento) => {
    elemento.style.display = 'block';
}

const mostrarOcultar = (id) => {
    let div = document.getElementById(id);
    Datos_personales.style.display = 'none';
	Estudios.style.display = 'none';
	Experiencia_laboral.style.display = 'none';
	Hobbyes.style.display = 'none';
	Musica.style.display = 'none';
    mostrar(div);
	resetear(10, 48, 100, 'letras')
}

var x = 0.2;
var speed = 500;
function titulo_fx() {
	while (x< 5) {
		document.querySelector(".titulo").style.
		x=x+0,1
		setTimeout(titulo_fx, speed)
	  }
	
  }



  