// Arreglo simple con 5 números que representan edades
const edades = [15, 22, 12, 30, 18];

// Iniciamos el ciclo para recorrer cada edad del arreglo
for (const edad of edades) {
    // Verificamos si la edad actual cumple con la mayoría de edad (18)
    if (edad >= 18) {
        // Si se cumple, mostramos la edad en la consola
        console.log(`Edad permitida: ${edad}`);
    }
}