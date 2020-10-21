//almaceno en variable mediante su id
const boton = document.querySelector("#login"); 
const form = document.querySelector("#form");

//cuando deja de hacer focus en el label llama a la función de validación
form.addEventListener("focusout", validarCampo);

function validarCampo(ev){
  const input = ev.target;
  let mensaje = "";
  input.classList.remove("is-valid", "is-invalid");
  input.nextElementSibling.classList.add("d-none");
  switch (input.type) {
    case "email":
      if (!input.value.includes("@")) {
        mensaje = "El correo ingresado no contiene @";
	  }else if (!input.value.includes(".com")) {
        mensaje = "El correo ingresado no contiene .com";
	  }
	  //Si hubo errores en el mail, cambiar a clase = "is-invalid"
      if (mensaje.length != 0) {
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = mensaje;
        input.nextElementSibling.classList.remove("d-none");
        return;
	  } 
	  // Si no hubo error en el correo
	  	else { 
        	input.classList.add("is-valid");
      	}
      break;
    case "password":
		if (input.value.length < 6) {
			mensaje ="La contraseña debe tener más de 6 caracteres"
			input.classList.add("is-invalid");
        	input.nextElementSibling.innerText = mensaje;
        	input.nextElementSibling.classList.remove("d-none");
        	return;
		} 
		// Si no hubo error en la contraseña
		else {
			input.classList.add("is-valid");
		}			  
    }

}

// habilita o desabilita el botón de Ingresar, depende si todos sus elementos tienen la clase is-valid
boton.addEventListener("mouseover", () =>{
	const camposrequeridos = Array.from( document.querySelectorAll("#form input[required]"));
	if (camposrequeridos.every((e) => e.classList.contains("is-valid"))) {
		boton.removeAttribute("disabled");
	  }
});