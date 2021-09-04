			
/*
$(document).ready(function() { 
	 let suboCanciones = function(){
	 
	 let temas = null;
	
		let   reproducciones = "";
		let  nombre = "";
	 $.ajax({
		 async: false,
		  url: "datos.json",
		 success: function(resultado) {
			temas = resultado.songs; 
			let top3 = [];
			let tabla;
			let sonido; 
			
			
		
			$("#buscador").on("keyup", function() {
				let valor = $(this).val().toLowerCase();
				$("#hits .col-12").filter(function() {
				 $(this).toggle($(this).text().toLowerCase().indexOf(valor) > 1)
				});
			  });
				  //songs.sort();
					temas.sort(function(a, b){
						return a.reproducciones - b.reproducciones;
					});
					temas.reverse();
					console.log(temas);
					for(let  i = 0; i <= 3; i++){
						sonido = `<audio controls src="./canciones/${songs[i].ruta}"></audio>`
						 tabla += `<tr><td class=".table-row  .cancion">${songs[i].nombre}</td><td>${sonido}</td></tr>`
		 }	
					$("#tablero .table-row body").append(tabla);
							
					}
					
				});
					return temas
				}();
	

				let  html = "";
				
					for( let i = 0; i < suboCanciones.length; i++)  {                     
					
				

			html += `
					<div class="card text-center">
					<div class="col-12">
					<img src='./IMG/imagenes/icono_${suboCanciones[i].icono}.png 'width=65%' alt='cancion'>
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
		
});*/




$(window).on('load',function(){
	setTimeout(function(){ 
$('.page-loader').fadeOut('slow');
	},3000);
 });


/////////////////////VALIDAR FORMULARIO DE REGISTRO ////////////////////
function enviarDatos(registro) {

	let  re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; 
		if(!re.test(registro.email.value)){
			document.getElementById('errormsg'). innerHTML = " ¡Ingrese su correo electrónico!";
	  return false;
	  } else
	
	 if(registro.password.value.trim().length == 0) {
		document.getElementById('errorpwd'). innerHTML = " ¡Ingrese su contraseña!";
		 return false;
	 } else
	 if(registro.password.value != registro.confirmacion.value) {
		document.getElementById('errorpwd1'). innerHTML = "¡La contraseña no coincide!";
		 return false;
	 }  else
	 if(registro.género.value === "") {
		document.getElementById('errorgenero'). innerHTML = "¡Seleccione genero musical!";
		 return false;
	 } else
	   if(registro.edades.value  === "") {
		document.getElementById('erroredad'). innerHTML = "¡Por favor ingrese su rango etáreo!";
		  return false;
	   } else
		  
	   if (registro.edades.value  === "joven")  {
		document.getElementById('erroredad'). style.display = "none";
		document.getElementById('errorjoven'). innerHTML = "Solo apto para mayores de 18 años.";
		return false;
	  
	} else
	  
	  if(!registro.condiciones.checked) {
		document.getElementById('errorterm'). innerHTML = "Debe aceptar los térrminos y condiciones.";
		  return false;
	  } else
	  alert("Se ha registrado correctamente");
	 return true;
	}
 



	
		
	
	