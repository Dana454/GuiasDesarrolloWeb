//Accedemos al contenedor donde se mostrara los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector(
  "#idContainerArregloOrdenado"
);

//Accedemos a cada boton por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

//Agregamos el evento click a los botones, adicionalmente
//se le asigna la funcion que realizará la operación
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento() {
  const numero = parseInt(document.querySelector("#inputNumero").value);
  //verificando que sea un numero
  if (isNaN(numero)) {
    alert("Debe ingresar un numero válido");
  } else {
    //Agregamos un nuevo elemento al arreglo
    arreglo.push(numero);

    let caja = document.createElement("div");
    caja.className = "col-md-1 colum";
    let valor = document.createElement("h3");
    valor.textContent = numero;
    caja.appendChild(valor);
    containerArreglo.insertAdjacentElement("beforeend", caja);
  }
}

function ordenarElementos() {
    for (let i of arreglo.sort()){
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}