let array = [1, 2, 3, 4, 5]; // Array inicial con algunos valores

function mostrarArray() {
    const contenedorArray = document.getElementById('array'); // Obtener el contenedor del array
    contenedorArray.innerHTML = ''; // Limpiar el contenido anterior del contenedor
    array.forEach(elemento => { // Recorrer cada elemento del array
        const div = document.createElement('div'); // Crear un div para cada elemento
        div.className = 'array-element'; // Asignar clase CSS al div
        div.innerText = elemento; // Establecer el texto del div al valor del elemento
        contenedorArray.appendChild(div); // Añadir el div al contenedor del array
    });
}

function mostrarMensaje(mensaje) {
    document.getElementById('mensaje').innerText = mensaje; // Mostrar mensaje en el contenedor de mensajes
}

function acceder() {
    const indice = parseInt(document.getElementById('index').value); // Obtener el índice del campo de entrada
    if (indice >= 0 && indice < array.length) { // Verificar si el índice está dentro del rango del array
        mostrarMensaje(`Valor en índice ${indice}: ${array[indice]}`); // Mostrar el valor en el índice especificado
    } else {
        mostrarMensaje('Índice fuera de rango'); // Mostrar mensaje de error si el índice está fuera de rango
    }
}

function buscar() {
    const valor = parseInt(document.getElementById('value').value); // Obtener el valor del campo de entrada
    const indice = array.indexOf(valor); // Buscar el índice del valor en el array
    if (indice !== -1) { // Verificar si el valor se encuentra en el array
        mostrarMensaje(`Valor ${valor} en índice ${indice}`); // Mostrar el índice del valor encontrado
    } else {
        mostrarMensaje('Valor no encontrado'); // Mostrar mensaje de error si el valor no se encuentra
    }
}

function insertar() {
    const indice = parseInt(document.getElementById('index').value); // Obtener el índice del campo de entrada
    const valor = parseInt(document.getElementById('value').value); // Obtener el valor del campo de entrada
    if (indice >= 0 && indice <= array.length) { // Verificar si el índice está dentro del rango válido para insertar
        array.splice(indice, 0, valor); // Insertar el valor en el índice especificado
        mostrarArray(); // Mostrar el array actualizado
        mostrarMensaje(`Insertado ${valor} en índice ${indice}`); // Mostrar mensaje indicando que el valor fue insertado
    } else {
        mostrarMensaje('Índice fuera de rango'); // Mostrar mensaje de error si el índice está fuera de rango
    }
}

function eliminar() {
    const indice = parseInt(document.getElementById('index').value); // Obtener el índice del campo de entrada
    if (indice >= 0 && indice < array.length) { // Verificar si el índice está dentro del rango del array
        array.splice(indice, 1); // Eliminar el valor en el índice especificado
        mostrarArray(); // Mostrar el array actualizado
        mostrarMensaje(`Eliminado valor en índice ${indice}`); // Mostrar mensaje indicando que el valor fue eliminado
    } else {
        mostrarMensaje('Índice fuera de rango'); // Mostrar mensaje de error si el índice está fuera de rango
    }
}

document.addEventListener('DOMContentLoaded', mostrarArray); // Mostrar el array inicial cuando se cargue la página
