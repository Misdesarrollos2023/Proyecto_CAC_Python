function validarFormulario(event) {
    event.preventDefault(); 

 
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const localidad = document.getElementById("localidad").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

  
    const soloTextoRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const numerosYTextoRegex = /^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const soloNumerosRegex = /^\d+$/;

 
    if (
        nombre === "" ||
        apellido === "" ||
        localidad === "" ||
        email === "" ||
        telefono === ""
    ) {
       /* alerta personalizada de la librería SweetAlert2 */
       swal.fire({
        title: 'Error!',
        text: 'Por favor complete todos los campos obligatorios',
        icon: "error",
        width: '330px'
    });
    } else if (!soloTextoRegex.test(nombre)) {
        /* alerta personalizada de la librería SweetAlert2 */
        swal.fire({
            title: 'Error!',
            text: 'El campo nombre solo puede contener letras y espacios',
            icon: "error",
            width: '330px'
        });
    } else if (!soloTextoRegex.test(apellido)) {
         /* alerta personalizada de la librería SweetAlert2 */
         swal.fire({
            title: 'Error!',
            text: 'El campo apellido solo puede contener letras y espacios',
            icon: "error",
            width: '330px'
        });
    } else if (!numerosYTextoRegex.test(localidad)) {
          /* alerta personalizada de la librería SweetAlert2 */
          swal.fire({
            title: 'Error!',
            text: 'El campo localidad solo puede contener letras, números y espacios',
            icon: "error",
            width: '330px'
        });
    } else if (!emailRegex.test(email)) {
          /* alerta personalizada de la librería SweetAlert2 */
          swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese una dirección de correo electrónico válida',
            icon: "error",
            width: '330px'
        });
    } else if (!soloNumerosRegex.test(telefono)) {
         /* alerta personalizada de la librería SweetAlert2 */
         swal.fire({
            title: 'Error!',
            text: 'El campo teléfono solo puede contener números',
            icon: "error",
            width: '330px'
        });
    } else {

         /* alerta personalizada de la librería SweetAlert2 */
         swal.fire({
            title: '',
            text: 'Formulario enviado correctamente',
            icon: "success",
            width: '330px'
        });
    }
}

function borrarFormulario() {
    document.getElementById("contactoForm").reset();
}


document.querySelector("button[type='button'][onclick='validarFormulario()']").addEventListener("click", validarFormulario);


document.querySelector("button[type='button'][onclick='borrarFormulario()']").addEventListener("click", borrarFormulario);
