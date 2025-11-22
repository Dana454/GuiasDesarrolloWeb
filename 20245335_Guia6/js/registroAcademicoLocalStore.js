const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante")
const btnViewEstudiante = document.querySelector("#idBtnMostrarEstudiante")

const inputCarnet = document.querySelector("#inputCarnet");
const inputNombre = document.querySelector("#inputNombre");
const inputApellidos = document.querySelector("#inputApellidos");

function guardarEstudiante(){
    const nombre = inputNombre.value.trim();
    const carnet = inputCarnet.value.trim();
    const apellidos = inputApellidos.value.trim();
    const errores = validarDatos(carnet, nombre, apellidos);
    if(errores.lenght>0){
        alert("Errores: \n" + errores.join("\n"));
        return;
    }
    else{
        alert("Ok");
    }

    const alumnos = [];
    alumnos.push(carnet, nombre, apellidos)
}

function guardarEstudiantes(estudiantes){
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))
}

function validarDatos(carnet, nombre, apellidos){
    const errores = [];
    if (carnet.trim().lenght==0){
        errores.push("El carnet es requerido");
    }
    if (nombre.trim().lenght==0){
        errores.push("El nombre es requerido");
    }
    if (apellidos.trim().lenght==0){
        errores.push("Los apellidos son requerido");
    }
    return errores;
}