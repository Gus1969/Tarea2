			///////////////////////PRE LOADER ////////////////
$(window).on('load',function(){
	setTimeout(function(){ 
$('.page-loader').fadeOut('slow');
	},3000);
 });



const main = document.getElementsByTagName("main")[0];

const crearYAgregarProducto = (song)=> {
  const contenedorSong = document.createElement("div");
  const imagenSong = document.createElement("img");
  const nombreArtista = document.createElement("h1");
  const nombreSong = document.createElement("h2");
  const audioSong = document.createElement("audio");
  
  
   audioSong.setAttribute("controls",  "audio.mp3");
  audioSong.setAttribute("src",  song.ruta);
  console.log(audioSong)
  
  imagenSong.setAttribute("src", song.icono);
  nombreSong.textContent = song.nombre;
  nombreArtista.textContent = song.artista;

  contenedorSong.classList.add("producto");
 


  contenedorSong.appendChild(imagenSong);
  contenedorSong.appendChild(nombreArtista);
  contenedorSong.appendChild(nombreSong);
  contenedorSong.appendChild(audioSong);
  
  
  main.appendChild(contenedorSong);
}
console.log(crearYAgregarProducto);

for (let i = 0; i < songs.length; i++) {
  crearYAgregarProducto(songs[i]);
}






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

	////////////////// FORMULARIO CONTACTO //////////////////

	function reach(formulario) { 
		if(formulario.nombre.value.trim().length === 0) {
			document.getElementById('errormsgName').innerHTML = "Ingrese su nombre";
				return false;
		} else {
			let  re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; 
			if(!re.test(formulario.email.value)){
				document.getElementById('errormsgemail'). innerHTML = " ¡Ingrese su correo electrónico!";
		  return false;
		} else  
		
			if(formulario.msj.value === "") {
				document.getElementById('errormessage'). innerHTML = " ¡Ingrese su sugerencia!";
				return false;
		} else 
		alert("Su mensaje ha sido enviado. ¡Muchas gracias!");
				return true;
		}
	}
			
		//////////////////////// filtro canciones //////////////////////////////
		
		$("#search").on("keyup", function() {
			let valor = $(this).val().toLowerCase();
			$("main .producto").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
			});
		  });
		
			
	

	

 
	
	


	
		
	
	