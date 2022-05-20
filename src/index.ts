// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 4 - Nombres Deseados

/* 
• Construya un algoritmo que tenga un arreglo de dimensión 
deseada por el usuario y llénelo con los nombres que el usuario desee.
• Crear un arreglo de las posiciones que desee el usuario 
y llenarlo con nombres de personas.
*/

//EJERCICIO DE NOMBRES INGRESADOS

let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de nombres ")
);

let arregloNombres: string[] = new Array(dimensionArreglo);
let indice: number;
for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNombres[indice] = prompt("Ingrese nombre para la posición ", indice);
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "El nombre en la posición " + indice + " es " + arregloNombres[indice]
  );
}
