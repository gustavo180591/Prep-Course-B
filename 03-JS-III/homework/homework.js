// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var num = 1;
  var suma = 0;
  for(var i = 0; i <= 8; i++){
    suma = suma + num ++      
    console.log(suma);
  }
  return suma + 10;
}

function encuentraPares(array){
// Devuelve un arreglo con los pares encontrados
// en el arreglo de enteros pasado como parámetro
// Tu código:
var arregloPar = [];
for(var i = 0; i <= array.length; i++){    
  var resto = array[i] % 2;
  if(resto == 0){
    arregloPar.push(array[i]);
  }
}
return arregloPar;
}

function elevaAlCuadrado(array){
// Devuelve un arreglo con cada número del array
// elevado al cuadrado
// Tu código:
var arregloElevado = [];  
for(var i = 0;i <= array.length - 1; i++){
  arregloElevado.push(Math.pow(array[i],2));
}
return arregloElevado;
}

function sumaArray(array){
// Devuelve el resultado de sumar todos los elementos
// de un arreglo de enteros dado
// Tu código:
var suma = 0;
for(var i = 0;i <= array.length - 1; i++){
  suma = suma + array[i];
}
return suma;
}

function numeroDigitos(num){
// Devuelve el número de dígitos de un número dado
// Tu código:
let contador = 0;
while(num >= 1){
  contador = contador + 1;
    num = num / 10;
}
return contador;
} 
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
