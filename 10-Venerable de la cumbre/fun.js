document.addEventListener("DOMContentLoaded", function() {
  let contenedor = document.getElementById("contenedor");
  let boton = document.getElementById("boton");
  let numClics = 0; // Variable para contar los clics
  let imagenes = ["img/imagen1.png", "img/imagen2.png", "img/imagen3.png", "img/imagen4.png", "img/imagen5.jpg"];
  let gifSrc = "img/nieve.gif";

  boton.addEventListener("click", function() {
    if (numClics < imagenes.length) {
      // Aqui añado las imágenes 
      let imagen = document.createElement("img");
      imagen.src = imagenes[numClics];
      imagen.classList.add("classImage"); //asigno una clase a las imágenes
      if (numClics === 4) { //aqui le digo que si es la quinta imagen
        imagen.classList.add("imgVenerable"); // Agregar clase única a la imagen del venerable
      }
      contenedor.appendChild(imagen);
    } else if (numClics === imagenes.length) {
      // Añadir gif
      let gif = document.createElement("img");
      gif.src = gifSrc;
      gif.classList.add("classGif"); // Agregar clase para estilos CSS - cambiar esta clase 
      contenedor.appendChild(gif);
    }

    numClics++; // Incrementar el contador de clics
  });
});