$(document).ready(function () {
    $("#add").click(function () {
        var errors = [];

        var name = $("#bookName").val();
        var race = $("#raceSelect").val();
        var classType = $("#classSelect").val();
        var level = $("#numberPage").val();

        // Limpia errores anteriores
        $("#nameError").html("");
        $("#raceError").html("");
        $("#classError").html("");
        $("#levelError").html("");

        if (name === "") {
            errors.push("Por favor, introduce un nombre.");
            $("#bookName").css("border-color", "red");
            $("#nameError").html("Por favor, introduce un nombre.");
        } else {
            $("#bookName").css("border-color", "");
        }

        if (race === "seleccion") {
            errors.push("Por favor, selecciona una raza.");
            $("#raceSelect").css("border-color", "red");
            $("#raceError").html("Por favor, selecciona una raza.");
        } else {
            $("#raceSelect").css("border-color", "");
        }

        if (classType === "seleccion") {
            errors.push("Por favor, selecciona una clase.");
            $("#classSelect").css("border-color", "red");
            $("#classError").html("Por favor, selecciona una clase.");
        } else {
            $("#classSelect").css("border-color", "");
        }

        if (level === "" || isNaN(level) || level <= 0) {
            errors.push("Por favor, introduce un nivel válido.");
            $("#numberPage").css("border-color", "red");
            $("#levelError").html("Por favor, introduce un nivel válido.");
        } else {
            $("#numberPage").css("border-color", "");
        }

        if (errors.length > 0) {
            // Si hay errores, muestra todos los mensajes juntos
            alert(errors.join("\n"));
            return;
        }else{
            window.location.href = "listado.html" ;
    

        }

        // Si pasa todas las validaciones, puedes enviar el formulario o realizar otra acción aquí
        // Por ejemplo, puedes enviar los datos a un servidor utilizando AJAX
        error-message("Nombre: " + name);
        error-message("Raza: " + race);
        error-message("Clase: " + classType);
        error-message("Nivel: " + level);
    });
});


$(document).ready(function () {
    $("#add").click(function () {
        var name = $("#bookName").val();
        var race = $("#raceSelect").val();
        var classType = $("#classSelect").val();
        var level = $("#numberPage").val();

        // Validación de campos vacíos
        if (name === "" || race === "seleccion" || classType === "seleccion" || level === "") {
            $(".error-message").remove(); // Elimina mensajes de error anteriores
            $("#container").prepend('<div class="error-message">Por favor, completa todos los campos.</div>'); // Agrega mensaje de error
            return;
        }

        // Confirmación de los datos ingresados
        var confirmationMessage = "Nombre: " + name + "\nRaza: " + race + "\nClase: " + classType + "\nNivel: " + level + "\n¿Los datos son correctos?";
        if (confirm(confirmationMessage)) {
            // Aquí puedes ejecutar la lógica para agregar el personaje a la lista o realizar cualquier otra acción
            console.log("Los datos han sido confirmados.");
        } else {
            console.log("Los datos no han sido confirmados.");
        }
    });
});
