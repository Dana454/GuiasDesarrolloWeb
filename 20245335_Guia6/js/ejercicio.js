function validar() {
    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const nit = document.getElementById("nit").value;
    const fecha = document.getElementById("fecha").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    const msg = document.getElementById("mensaje");

    const regExCarnet = /^[A-Za-z]{2}\d{3}$/;
    const regExNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    const regExDUI = /^\d{8}-\d$/;
    const regExNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
    const regExFecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const regExCorreo = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
    const regExEdad = /^\d+$/;

    if (!regExCarnet.test(carnet)) {
        msg.innerHTML = "Carnet inválido. Debe tener el formato: AA999";
        return;
    }

    if (!regExNombre.test(nombre)) {
        msg.innerHTML = "El nombre solo puede contener letras y espacios.";
        return;
    }

    if (!regExDUI.test(dui)) {
        msg.innerHTML = "DUI inválido. Debe tener el formato: ########-#";
        return;
    }

    if (!regExNIT.test(nit)) {
        msg.innerHTML = "NIT inválido. Debe tener el formato: ####-######-###-#";
        return;
    }

    if (!regExFecha.test(fecha)) {
        msg.innerHTML = "Fecha inválida. Debe tener el formato: dd/mm/yyyy";
        return;
    }

    if (!regExCorreo.test(correo)) {
        msg.innerHTML = "Correo electrónico inválido.";
        return;
    }

    if (!regExEdad.test(edad)) {
        msg.innerHTML = "La edad debe contener solo números.";
        return;
    }

    msg.innerHTML = "Formulario válido. Datos correctos.";
}
