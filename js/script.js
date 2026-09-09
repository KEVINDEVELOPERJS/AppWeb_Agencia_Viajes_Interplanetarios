const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const identificacion = document.getElementById("identificacion").value;
    const correo = document.getElementById("correo").value;
    const destino = document.getElementById("destino").value;
    const viajeros = document.getElementById("viajeros").value;
    const fecha = document.getElementById("fecha").value;

    const mensaje = document.getElementById("mensaje");

    if (nombre === "" ||
        identificacion === "" ||
        correo === "" ||
        destino === "" ||
        viajeros === "" ||
        fecha === "") {

        mensaje.textContent = "Por favor complete todos los campos.";

    } else {

        mensaje.textContent =
            "Reserva realizada correctamente. ¡Buen viaje!";

    }

});