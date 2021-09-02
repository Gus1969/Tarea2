
var top3 = [];
var tabla;
var sonido; 
$(document).ready(function() { 
	var suboCanciones = function(){
	 
	 var temas = null;
	
	//   var reproducciones
	//   var nombre = "";
	 $.ajax({
		 async: false,
		  url: "datos.json",
		 success: function(resultado) {
			temas = resultado.songs; 
			
		
			$("#buscador").on("keyup", function() {
				var valor = $(this).val().toLowerCase();
				$("#hits div .col-12").filter(function() {
				 $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
				});
			  });
				  //songs.sort();
					temas.sort(function(a, b){
						return a.reproducciones - b.reproducciones;
					});
					temas.reverse();
					console.log(temas);
					for(var i = 0; i <= 2; i++){
						sonido = `<audio controls src="./canciones/${songs[i].ruta}"><p>Su navegador no soporta el elemento de audio.</p></audio>`
						 tabla += `<tr><td class=".table-body">${songs[i].nombre}</td><td>${sonido}</td></tr>`
		 }	
		}
		
	 });
		return temas
	}();
	

		var html = ""
		
			  for(var i = 0; i < suboCanciones.length; i++)  {                     
			
				

			html += `
					<div class="card text-center">
					<div class="col-12">
					<img src='./IMG/imagenes/icono_${suboCanciones[i].icono}.png 'width=55%' alt='cancion'>
					<br>
					<h3>${suboCanciones[i].nombre}</h3>
					<p>Reproducciones: ${suboCanciones[i].reproducciones}</p>
					<br>
					<audio controls src="./songs/${suboCanciones[i].ruta}" type="audio/mp3" width='100%'>
					</audio>
					</div>
					</div>
					`
				   
		}
		document.getElementById('hits').innerHTML = html;
		
});



$(window).on('load',function(){
	setTimeout(function(){ 
$('.page-loader').fadeOut('slow');
	},3000);
 });


/////////////////////VALIDAR FORMULARIO DE REGISTRO ////////////////////
function enviarDatos(registro) {

	var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; 
		if(!re.test(registro.email.value)){
	  alert("el email es obligatorio");
	  return false;
	  } else
	
	 if(registro.password.value.trim().length == 0) {
		 alert("Ingrese su palabra clave");
		 return false;
	 } else
	 if(registro.password.value != registro.confirmacion.value) {
		 alert("la confirmacion no coincide");
		 return false;
	 }  else
	 if(registro.género.value == "") {
		alert("Seleccione una de las opciones");
		 return false;
	 } else
	   if(registro.edades.value  == "") {
		   document.getElementById('errormsg'). innerHTML = "Ingrese su edad";
		  return false;
	  }  else
	   if (registro.edades.value  === "joven")  {
		document.getElementById('errormsg'). innerHTML = " Permiso denegado";
		return false;
	}
	  
	  if(!registro.condiciones.checked) {
		  alert('Debe aceptar los terminos y condiciones');
		  return false;
	  } else
	  alert("Se ha registrado correctamente");
	 return true;
	}

	
		
	
	