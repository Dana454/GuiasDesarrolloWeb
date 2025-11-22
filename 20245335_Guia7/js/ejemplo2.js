
const formulario = document.forms["frmRegistro"];
const button = formulario.elements["btnRegistro"];
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");


const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totSelect = 0;
    let totFile = 0;
    let totSubmit = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }

        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPassword++;
        }

        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }

        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }

        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }

        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }

        // Contabilizando el total de INPUT TYPE = DATE
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }

        // Contabilizando el total de elementos SELECT
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }
    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPassword}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    //Funcion que permite mostrar el modal de Bootstrap
    //Esta funcion es definida por Bootstrap
    modal.show();
};
button.onclick = () => {
    recorrerFormulario();
};


function validarFormulario() {
    let errores = [];
    const nombres = document.getElementById("idNombre").value.trim();
    const apellidos = document.getElementById("idApellidos").value.trim();
    const fecha = document.getElementById("idFechaNac").value;
    const correo = document.getElementById("idCorreo").value.trim();
    const pass1 = document.getElementById("idPassword").value;
    const pass2 = document.getElementById("idPasswordRepetir").value;

    const pais = document.getElementById("idCmPais");
    const carrera = formulario.querySelector("input[name='idRdCarrera']:checked");

    const intereses = [
        document.getElementById("idCkProgramacion"),
        document.getElementById("idCkBD"),
        document.getElementById("idCkRedes"),
        document.getElementById("idCkSeguridad")
    ].filter(x => x.checked);

    if (!nombres) errores.push("El nombre es obligatorio.");
    if (!apellidos) errores.push("El apellido es obligatorio.");
    if (!fecha) errores.push("La fecha de nacimiento es obligatoria.");
    if (!correo) errores.push("El correo es obligatorio.");

if (fecha) {
    const hoy = new Date();
    hoy.setHours(0,0,0,0);  
    const f = new Date(fecha + "T00:00:00");  

    if (f > hoy) {
        errores.push("La fecha de nacimiento no puede superar la fecha actual.");
    }
}

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !regex.test(correo)) errores.push("Correo inválido.");

    if (!pass1) errores.push("Debe escribir una contraseña.");
    if (!pass2) errores.push("Debe repetir la contraseña.");
    if (pass1 && pass2 && pass1 !== pass2) errores.push("Las contraseñas no coinciden.");
    if (intereses.length === 0) errores.push("Debe elegir al menos un interés.");
    if (!carrera) errores.push("Debe seleccionar una carrera.");
    if (pais.selectedIndex === 0) errores.push("Debe seleccionar un país.");

    if (errores.length > 0) {
        alert(errores.join("\n"));
        return false;
    }

    return true;
}

function mostrarDatosEnModal() {

    while (bodyModal.firstChild) {
        bodyModal.removeChild(bodyModal.firstChild);
    }

    const tabla = document.createElement("table");
    tabla.className = "table table-bordered";

    const tbody = document.createElement("tbody");

    function addRow(label, value) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.appendChild(document.createTextNode(label));
        td2.appendChild(document.createTextNode(value));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }

    addRow("Nombres", document.getElementById("idNombre").value);
    addRow("Apellidos", document.getElementById("idApellidos").value);
    addRow("Fecha nacimiento", document.getElementById("idFechaNac").value);
    addRow("Correo", document.getElementById("idCorreo").value);

    const carrera = formulario.querySelector("input[name='idRdCarrera']:checked");
    if (carrera) {
        const textoCarrera = carrera.nextElementSibling.innerText;
        addRow("Carrera", textoCarrera);
    }

    const pais = document.getElementById("idCmPais");
    addRow("País de origen", pais.options[pais.selectedIndex].text);

    const intereses = [];
    if (idCkProgramacion.checked) intereses.push("Programación");
    if (idCkBD.checked) intereses.push("Base de Datos");
    if (idCkRedes.checked) intereses.push("Inteligencia Artificial");
    if (idCkSeguridad.checked) intereses.push("Seguridad Informática");

    addRow("Intereses", intereses.join(", "));

    tabla.appendChild(tbody);
    bodyModal.appendChild(tabla);

    modal.show();
}
button.onclick = () => {

    if (!validarFormulario()) return;

    mostrarDatosEnModal();
};