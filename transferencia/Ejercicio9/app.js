// Definimos el arreglo que contiene 3 objetos distintos
const productos = [
    { nombre: "Mouse", precio: 25, disponible: true }, // Objeto 1
    { nombre: "Teclado", precio: 45, disponible: false }, // Objeto 2
    { nombre: "Monitor", precio: 150, disponible: true } // Objeto 3
];

// Recorremos el arreglo de productos
for (const producto of productos) {
    // Accedemos solo a la propiedad 'nombre' de cada objeto en el ciclo
    console.log(`Producto disponible: ${producto.nombre}`);
}