
//Capturo lo necesario
    document.addEventListener("DOMContentLoaded", function() {
    let replicado = document.getElementById("replicado");
    let contenedor = document.getElementById("contenedor");
  
    // Función para replicar el elemento cuando se hace scroll
    function replicarElemento() {
      let nuevoReplicado = replicado.cloneNode(true); // Clonar el elemento replicado
      contenedor.appendChild(nuevoReplicado); // Agregar el clon al contenedor
    }
  
    // Replicar el elemento inicialmente
    replicarElemento();
  
    // Evento de scroll para replicar el elemento
    window.addEventListener("scroll", function() {
      let distanciaAlFinal = document.documentElement.offsetHeight - (window.innerHeight + window.scrollY);
  
      // Si el usuario ha llegado al final de la página, replicar el elemento
      if (distanciaAlFinal < 100) { // Puedes ajustar este valor según tus necesidades
        replicarElemento();
      }
    });
  });


  // Grabar Cookie
document.cookie = "nombre= Cookie para Obelix; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"