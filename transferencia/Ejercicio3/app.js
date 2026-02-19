// Crear el arreglo con seis notas
let notas = [3.5, 4.0, 2.8, 5.0, 3.9, 4.2];

// Inicializar una variable para la suma
let suma = 0;

// Recorrer el arreglo con for
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]; // acumular cada nota
}

// Calcular el promedio arreglo
let promedio = suma / notas.length;

// Mostrar el resultado
console.log("El promedio de las notas es:", promedio);