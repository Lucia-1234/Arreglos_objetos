const prompt = require("prompt-sync")({sigint: true});
//a
//crear un arreglo llamado verduas con 4 elementos 
let verduras = ["Lechuga", "Tomate", "Cebolla", "Zanahoria"];
console.log(verduras);

//b
// Agrega un elemento al final del arreglo
verduras.push("Pepino"); 
console.log(verduras);

// Elimina el último elemento del arreglo
verduras.pop(); 
console.log(verduras);

// Agrega un elemento al inicio del arreglo
verduras.unshift("Habichuela"); 
console.log(verduras);

// Elimina el primer elemento del arreglo
verduras.shift(); 
console.log(verduras);

//c 
// Imprime la longitud del arreglo
console.log(verduras.length); 


//b_a
// Imprime cada elemento del arreglo utilizando un bucle for
for (let i = 0; i < verduras.length; i++) {
  console.log(`Posición: ${i}, valor: ${verduras[i]}`);
}

//b_b
// Imprime cada elemento del arreglo utilizando un bucle for...of
for (let valor of verduras) {
  console.log(valor);
}



//C
// se elige el objeto cartuchera
// let cartuchera = {
//   color: "",
//   material: "",
//   capacidad: "",
//   marca: ""
// };

// // Imprime cada propiedad del objeto utilizando un bucle for...in
// for (let i in cartuchera) {
//   console.log(i);
//   cartuchera[i]=prompt(`Ingrese el valor de la clave ${i}: `);
// }

// console.log(cartuchera);

//d
//se crea una función llamada llenar que reciba un parametro i y lo imprima en consola
function llenar(i) {
  prompt(`Ingrese el valor del objeto en la posición ${i}: `);
  for (let i in inventario) {
    inventario[i]=prompt(`Ingrese el valor del objeto en la posición ${i}: `);

  }
  console.log(inventario);
}

//se crean 3 objetos vacios llamados cuaderno, teclado y audifonos
let cuaderno= {
  hoja: 0,
  color: "",
  valor: 0
}
let teclado = {
  color: "",
  marca: "",
  valor: 0
}
let audifonos = {
  marca: "",
  color: "",
  valor: 0,
  estado: ""
}

//se crea un arreglo llamado inventario que contenga los 3 objetos vacios
let inventario = [audifonos, teclado, cuaderno];

//se llama a la función llenar para cada elemento del arreglo inventario utilizando un bucle for
for (let i =0; i < inventario.length; i++) {
  llenar(inventario[i]);
}

console.log(inventario);
