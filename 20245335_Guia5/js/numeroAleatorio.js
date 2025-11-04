// Generamos un número aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

// Creamos una constante que permita identificar el máximo de intentos
const numeroIntentos = 3;

// Creamos una variable que cuente los intentos que realiza el usuario
let intentos = 0;

function generarNumeroAleatorio() {
    // Definimos una variable para impresión de mensajes
    let mensaje;

    // Utilizamos el DOM para imprimir el mensaje
    const parrafo = document.querySelector("#idParrafo");

    // Verificamos en qué intento está el usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "¿Qué número se ha generado (Intento " + intentos + ")?"
        );


//verificamos el numero aleatorio con el ingresado por el usuario
        if (numero==numeroAleatorio){
            mensaje= `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`;
        } else if (intentos == numeroIntentos){
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        }else {
            if (numero < numeroAleatorio) {
            mensaje = `El número oculto es más alto. Quedan ${numeroIntentos - intentos} intentos.`;
            } else {
            mensaje = `El número oculto es más bajo. Quedan ${numeroIntentos - intentos} intentos.`;
            }

        }

//aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
};