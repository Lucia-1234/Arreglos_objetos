// Definimos el objeto con 4 propiedades descriptivas
const miTermo = {
    marca: "Stanley", // Propiedad marca
    capacidad: "1 Litro", // Propiedad capacidad
    material: "Acero inoxidable", // Propiedad material
    mantieneCalor: true // Propiedad booleana
};

// Usamos for of junto con Object.entries para obtener cada par propiedad-valor
for (const [clave, valor] of Object.entries(miTermo)) {
    // Imprimimos en consola la propiedad y su valor
    console.log(`Propiedad: ${clave} -> Valor: ${valor}`);
}