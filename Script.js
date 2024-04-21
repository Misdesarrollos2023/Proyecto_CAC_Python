document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento al botón "Enviar"
    document.querySelector('button[name="enviar"]').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Validar el formulario antes de enviarlo
        if (validarFormulario()) {
            // Resetear el formulario
            document.querySelector('form').reset();

            // Mostrar mensaje de agradecimiento en un cuadro de diálogo informativo
            alert('¡Muchas gracias por tu tiempo! En breve nos contactaremos contigo.');
        }
    });

    // Agregar evento al botón "Borrar"
    document.querySelector('button[name="reset"]').addEventListener('click', function() {
        // Resetear el formulario
        document.querySelector('form').reset();
    });
});

// Función para validar el formulario
function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();

    // Expresiones regulares para validación
    var nombreRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^[0-9]+$/;

    // Validar nombre
    if (!nombreRegex.test(nombre)) {
        alert('Por favor, introduzca un nombre válido (solo texto).');
        return false;
    }

    // Validar apellido
    if (apellido === '' || !nombreRegex.test(apellido)) {
        alert('Por favor, introduzca un apellido válido (solo texto).');
        return false;
    }

    // Validar email
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un email válido.');
        return false;
    }

    // Validar teléfono
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, introduzca un número de teléfono válido (solo números).');
        return false;
    }

    // Si todos los campos necesarios son válidos, retorna true
    return true;
}
