
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="agendar"]').addEventListener('change', function() {
        var fechaContainer = document.getElementById('fecha_container');
        if (this.value === 'si') {
            fechaContainer.style.display = 'block';
        } else {
            fechaContainer.style.display = 'none';
        }
    });
});
