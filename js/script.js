const formulario = document.getElementById("formulario");
const destino = document.getElementById("destino");
const viajeros = document.getElementById("viajeros");
const precioTotal = document.getElementById("precioTotal");

function calcularPrecio() {
    let precioPorPersona = 0;

    if (destino.value === "mercurio") precioPorPersona = 100;
    else if (destino.value === "venus") precioPorPersona = 150;
    else if (destino.value === "marte") precioPorPersona = 200;
    else if (destino.value === "tierra") precioPorPersona = 80;
    else if (destino.value === "jupiter") precioPorPersona = 300;
    else if (destino.value === "saturno") precioPorPersona = 350;
    else if (destino.value === "urano") precioPorPersona = 400;
    else if (destino.value === "neptuno") precioPorPersona = 450;

    const cantidad = parseInt(viajeros.value);
    const total = precioPorPersona * cantidad;

    precioTotal.textContent = " Precio total: $" + total;
    return total;
}


destino.addEventListener("change", calcularPrecio);
viajeros.addEventListener("change", calcularPrecio);


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const identificacion = document.getElementById("identificacion").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" ||
        identificacion === "" ||
        correo === "" ||
        destino.value === "" ||
        viajeros.value === "" ||
        fecha === "") {
        
        mensaje.style.display = "block";
        mensaje.textContent = "Por favor complete todos los campos.";

    } else {

        const totalPrecio = calcularPrecio();
        mensaje.style.display = "block";
        mensaje.textContent = "Reserva realizada. Total a pagar: $" + totalPrecio + ". ¡Buen viaje! ";
        formulario.reset();
        precioTotal.textContent = " Precio total: $0";
    }
});