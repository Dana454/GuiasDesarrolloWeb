function aviso(){
    alert("Bienvendio al mundo JavaScriot");
}

function confirmacion(){
    // los valores que almacena son true o false
    let confirmacion = confirm("¿Desea salir de la sesión?");
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("¿Cuál es su nombre?");
    // Notese que en campo del promt se mostrara 0 por defecto
    let edad = prompt("¿Cuál es su edad?", 0);
    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafos(){
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el parrafo"
    );

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}