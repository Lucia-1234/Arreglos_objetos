//se crea la lista
let frutas = ["Manzana", "Pera", "Banano"]

//agrega un elemento al final de la lista
frutas.push("Mango");

console.log(frutas);

//se elimina el ultimo elemento de la lista
frutas.pop();

console.log(frutas);

//se agrega un elemento al inicio de la lista
frutas.unshift("uva");

console.log(frutas);

//se elimina un elemento al inicio de la lista
frutas.shift();

console.log(frutas);

//se cuentan los elementos de la lsita
console.log(frutas.length);


//se recorre la lista mostrando uno a uno cada elemento 
for (let i=0; i < frutas.length;i++){
    console.log(frutas[i])
}



