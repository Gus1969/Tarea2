$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
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
	   if (registro.edades.value < 18 &&  registro.edades.value  > 60)  {
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

	
		
	
	