//Array(Arreglo) para las imagenes, aquí van a poner las imagenes//
// de cada uno ( ES INDIVIDUAL) //

//fotos de Unsplash (ajustadas con w=400&h=300&fit=crop)//

const imagenes = [
  "https://plus.unsplash.com/premium_photo-1682144827510-bbe3cd636253?w=200&h=200&fit=crop",
  
  "https://images.unsplash.com/photo-1682464708085-95b4486e2c32?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1680608979589-e9349ed066d5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1698755473432-4a8e954685e0?w=400&h=300&fit=crop"
];

// Selección de elementos
const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

// Contador de imágenes
let indice = 0;

// Evento click
boton.addEventListener("click", () => {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0; // volver al inicio
  }

  // Cambiar imagen y texto
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});