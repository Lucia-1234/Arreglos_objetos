//lista predeterminada 
let frutas = ["Manzana", "Pera", "Uva"];

//se agrega un nuevo elemento a la lista 
frutas.unshift("Banano");

console.log(frutas);

//se elimina el ultimo elemento 
frutas.pop();

//se recorre usando for of
for (let fruta of frutas){
    console.log(fruta);
}