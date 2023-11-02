var imagenActual = 1;

    function cambiarImagen() {
      var imagen = document.getElementById("miImagen");
      if (imagenActual === 1) {
        imagen.src = "img2.jpg";
        imagen.alt = "Imagen cambiada a la segunda imagen";
        imagenActual = 2;
      } else {
        imagen.src = "img1.jpg";
        imagen.alt = "Imagen original";
        imagenActual = 1;
      }
    }