
function confirmarBorrado() {
  if (confirm("¿Estás seguro de que deseas borrar este personaje?")) {
    // Aquí podrías ejecutar la lógica para eliminar el personaje
    alert("personaje borrado exitosamente.");
  } else {
    alert("El personaje no ha sido borrado.");
  }
}



function editar() {
  if (confirm("¿Estás seguro de que deseas editar este personaje?")) {
    // Aquí podrías ejecutar la lógica para eliminar el personaje
    window.location.href = "edicion.html" ;

  } else {
    
  }
}

