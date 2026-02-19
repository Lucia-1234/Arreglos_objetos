

let colores= ["Rojo", "Azul", "verde"];

//inserta uno o mas elementos en una posicion especifica del arreglo  
colores.splice(2, 0, "Rosado");

console.log(colores);


for (let i = 0; i < colores.length; i++) {
  if (colores[i] === "Azul") {
    colores.splice(i, 1);
    contunue; // Salta a la siguiente iteración del bucle
  }
    console.log(colores[i]);
}

let persona = {
  
}