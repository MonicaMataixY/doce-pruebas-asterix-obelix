

//capturo los elementos
let objetoBrillante = document.getElementById("objetoBrillante");
let imagen = document.getElementById("bocadillo");
let boton = document.getElementById("boton")

//función
boton.addEventListener("click", function() {

    objetoBrillante.classList.toggle("brillar"); // Agrega o quita la clase "brillar"
    
    imagen.classList.toggle("block"); 
   

  });

