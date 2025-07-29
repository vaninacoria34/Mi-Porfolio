// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón con la clase 'btn' (ajusta la clase si usas otra)
    const botonContacto = document.querySelector("a.btn");

    // Verifica que el botón exista antes de agregar el evento
    if (botonContacto) {
        // Agrega un evento de click al botón
        botonContacto.addEventListener("click", function(event) {
            // Previene el comportamiento por defecto (por ejemplo, abrir enlace)
            event.preventDefault();
            // Muestra un mensaje de alerta al usuario
            alert("Gracias por contactarte con Alfha. Te responderé pronto.");
        });
    }
});
