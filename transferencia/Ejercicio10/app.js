// a. Lista de colores favoritos (Arreglo): este es una lista ya que es solo una caracteristica de un tema 
// simplemente tengo varios elementos del mismo tipo (colores), no necesito ponerles nombre individual, solo almacenarlos en una lista.

const coloresFavoritos = ["azul", "negro", "verde", "rojo"];

console.log(coloresFavoritos);

// Uso un objeto porque estoy describiendo una entidad específica (un estudiante).
// Cada dato cumple es una caracteristica distinta (nombre, edad, carrera),

const estudiante = {
  nombre: "Valentina",
  edad: 22,
  carrera: "Ingeniería de Software",
  semestre: 5,
  promedio: 4.5
};

console.log(estudiante);
console.log(estudiante.carrera); // Ingeniería de Software

// c. Precios de diferentes camisetas (objeto):
// Uso un objeto porque cada camiseta tiene un tipo distinto

const preciosCamisetas = {
  deportiva: 45000,
  casual: 35000,
  formal: 60000
};

console.log(preciosCamisetas);
console.log(preciosCamisetas.formal); // 60000

// d. Descripción de un computador portátil (Objeto)
// Uso un objeto porque estoy representando un solo computador pero con varias características diferentes.

const portatil = {
  marca: "HP",
  modelo: "Pavilion",
  procesador: "Intel i5",
  ram: "16GB",
  almacenamiento: "512GB SSD",
  precio: 3200000
};

console.log(portatil);
console.log(portatil.ram); // 16GB