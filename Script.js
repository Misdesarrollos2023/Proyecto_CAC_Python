function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const localidad = document.getElementById("localidad").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Expresiones regulares para validar los campos
    const soloTextoRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const numerosYTextoRegex = /^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const soloNumerosRegex = /^\d+$/;

    // Validar cada campo
    if (
        nombre === "" ||
        apellido === "" ||
        localidad === "" ||
        email === "" ||
        telefono === ""
    ) {
        alert("Por favor complete todos los campos obligatorios.");
    } else if (!soloTextoRegex.test(nombre)) {
        alert("El campo nombre solo puede contener letras y espacios.");
    } else if (!soloTextoRegex.test(apellido)) {
        alert("El campo apellido solo puede contener letras y espacios.");
    } else if (!numerosYTextoRegex.test(localidad)) {
        alert("El campo localidad solo puede contener letras, números y espacios.");
    } else if (!emailRegex.test(email)) {
        alert("Por favor ingrese una dirección de correo electrónico válida.");
    } else if (!soloNumerosRegex.test(telefono)) {
        alert("El campo teléfono solo puede contener números.");
    } else {
        // Aquí podrías enviar el formulario a través de AJAX si lo deseas
        alert("Formulario enviado correctamente.");
    }
}

function borrarFormulario() {
    document.getElementById("contactForm").reset();
}

// Agregar evento click al botón "Enviar"
document.querySelector("button[type='button'][onclick='validarFormulario()']").addEventListener("click", validarFormulario);

// Agregar evento click al botón "Borrar"
document.querySelector("button[type='button'][onclick='borrarFormulario()']").addEventListener("click", borrarFormulario);
