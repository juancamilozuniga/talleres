function contieneNumero(arreglo, numero) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            return true
        }
    }
    return false 
}




let numeros = [4, 10, 8, 1, 20,6,9]
let numeroABuscar = 20;

if (contieneNumero(numeros, numeroABuscar)) {
   
   
    console.log("Si está");
} else {
  
  
    console.log("no está");
}
