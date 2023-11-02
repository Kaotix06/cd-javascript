function calcularEdad(fechaNacimiento) {
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const hoy = new Date();
  const edadMilisegundos = hoy - fechaNacimientoDate;
  const edad = new Date(edadMilisegundos);
  return Math.abs(edad.getUTCFullYear() - 1970);
}
function agregarFila() {
  // Obtener valores ingresados
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  // Calcular la edad
  const edad = calcularEdad(fechaNacimiento);
  // Validar que todos los campos estén completos
  if (!nombre || !apellido || !fechaNacimiento) {
    alert("Por favor, complete todos los campos, incluyendo la fecha de nacimiento.");
    return;
  }
  // Verificar si es mayor o igual a 18 años
  if (edad >= 18) {
    // Crear una nueva fila y celdas
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.querySelector("tbody");
    const fila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    const celdaApellido = document.createElement("td");
    const celdaEdad = document.createElement("td");
    const celdaAcciones = document.createElement("td");
    // Asignar valores a las celdas
    celdaNombre.textContent = nombre;
    celdaApellido.textContent = apellido;
    celdaEdad.textContent = edad;
    celdaAcciones.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';
    // Agregar las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaAcciones);
    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);
    // Limpiar los campos de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechaNacimiento").value = "";
  } else {
    alert("El participante debe ser mayor de 18 años.");
  }
}
function eliminarFila(botonEliminar) {
  const fila = botonEliminar.parentNode.parentNode;
  fila.remove();
}

function colorNombreIgual() {
  const nombres = new Map(); // Usamos un Map para almacenar nombres únicos
  const filas = document.querySelectorAll("tr");

  filas.forEach((fila, index) => {
    if (index === 0) {
      return; // Saltar la fila de encabezado
    }
    const nombre = fila.cells[0].textContent;
    if (nombres.has(nombre)) {
      // Obtenemos el índice de la primera fila con el mismo nombre
      const primeraFila = nombres.get(nombre);
      fila.style.backgroundColor = "green";
      primeraFila.style.backgroundColor = "green";
    } else {
      nombres.set(nombre, fila);
    }
  });
}

function colorEdadIgual() {
  const edades = new Map(); // Usamos un Map para almacenar edades únicas
  const filas = document.querySelectorAll("tr");

  filas.forEach((fila, index) => {
    if (index === 0) {
      return; // Saltar la fila de encabezado
    }
    const edad = parseInt(fila.cells[2].textContent); // Convertir la edad a número
    if (edades.has(edad)) {
      // Obtenemos el índice de la primera fila con la misma edad
      const primeraFila = edades.get(edad);
      fila.style.backgroundColor = "blue";
      primeraFila.style.backgroundColor = "blue";
    } else {
      edades.set(edad, fila);
    }
  });
}