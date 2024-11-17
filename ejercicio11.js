let reemplazarElemento = (arreglo, valorActual, nuevoValor) => {
    let indice = arreglo.indexOf(valorActual);

    if (indice !== -1) {
        arreglo[indice] = nuevoValor;
    } else {
        console.log(arreglo)
    }

    return arreglo
}

let frutas = ['manzana', 'banana', 'naranja', 'pera'];
let resultado = reemplazarElemento(frutas, 'naranja', 'kiwi');

console.log(resultado)
