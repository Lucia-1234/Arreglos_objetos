// Creamos el objeto libro con las especificaciones solicitadas
const libro = {
    titulo: "Cien años de soledad", // Título del libro
    autor: "Gabriel García Márquez", // Nombre del autor
    paginas: 471, // Cantidad numérica
    genero: "Realismo mágico" // Categoría literaria
};

// Construimos el mensaje dinámico usando las propiedades del objeto
console.log(`El libro '${libro.titulo}' del autor ${libro.autor} pertenece al genero ${libro.genero} y cuenta con ${libro.paginas} páginas.`);