const containerEstudiantes = document.querySelector("#idContainerEstudiantes");
const btnPromedio = document.querySelector("#idBtnPromedio");
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    let arrayEstudiante = new Array();

    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let contador = 1;

    let estudiante,
        calificacion,
        convertir = 0;
    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}:`);

        do {
            calificacion = prompt(`Ingrese la calificación del estudiante ${contador}`);
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);
        arrayEstudiante[contador - 1] = new Array(estudiante, parseFloat(calificacion).toFixed(2));
        contador++;
    }

    let calificacionAlta = 0,
        promedio = 0,
        posicion = "";
    
    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += "<ol>";
    for (let indice of arrayEstudiante) {
        let nombre = indice[0];
        let nota = indice[1];
        let notaNumero = parseFloat(nota);
        listado += `<li> <b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota} </li>`;

        if (notaNumero > calificacionAlta) {
            calificacionAlta = notaNumero;
            posicion = nombre;
        }
        
        promedio += notaNumero;

    }
    listado += "</ol>";
    promedio = parseFloat(promedio / arrayEstudiante.length).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`;
    listado += `<br><b>Estudiante con mejor calificación:</b> ${posicion}</p>`;

    containerEstudiantes.innerHTML = listado;

}