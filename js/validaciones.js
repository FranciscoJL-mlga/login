function resetear(elementId) {
  document.getElementById(elementId + "Help").style.visibility = "hidden";
}

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Obtenemos los valores de los campos de email y contraseña
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  // Expresiones regulares para validar el email y la contraseña
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).{8,}$/;

  // Almacenamos todas las validaciones fallidas en un array
  var errores = [];
 
  // Verificar si el email es válido
  if (!emailRegex.test(email)) {
    document.getElementById("emailHelp").style.visibility = "visible";
    errores.push("Formato de correo incorrecto");
  } else {
    document.getElementById("emailHelp").style.visibility = "hidden";
  }

  // Verificar si la contraseña es válida
  if (!passwordRegex.test(password)) {
    document.getElementById("passHelp").style.visibility = "visible";
    errores.push("La contraseña debe tener al menos 8 y de maximo 15 caracteres y contener al menos una mayúscula, una minúscula y un número ");
  } else {
    document.getElementById("passHelp").style.visibility = "hidden";
  }

  // Si hay errores, mostrar todos los mensajes de ayuda y si no confirma el envio de datos
  if (errores.length == 0) {
 
   window.location.href = "listado.html" ;
    
    return;
  }

});
