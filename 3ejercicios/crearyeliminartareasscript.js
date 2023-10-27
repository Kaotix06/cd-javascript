// Obtener referencias a elementos HTML
const tareaInput = document.getElementById("tarea");
const listaPendientes = document.getElementById("lista-pendientes");
const listaCompletadas = document.getElementById("lista-completadas");

// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTarea = tareaInput.value.trim();
  if (nuevaTarea) {
    const nuevaTareaLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
      completarTarea(nuevaTareaLi, checkbox);
    };

    const tareaTexto = document.createTextNode(nuevaTarea);

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.className = "eliminar";
    eliminarBtn.onclick = function() {
      eliminarTarea(nuevaTareaLi);
    };

    nuevaTareaLi.appendChild(checkbox);
    nuevaTareaLi.appendChild(tareaTexto);
    nuevaTareaLi.appendChild(eliminarBtn);

    listaPendientes.appendChild(nuevaTareaLi);

    tareaInput.value = ""; // Limpiar el campo de entrada

    actualizarCantidadTareas();
  }
}

// Función para completar una tarea
function completarTarea(tareaLi, checkbox) {
  if (checkbox.checked) {
    listaCompletadas.appendChild(tareaLi);
    tareaLi.classList.add("tarea-completada");
  } else {
    listaPendientes.appendChild(tareaLi);
    tareaLi.classList.remove("tarea-completada");
  }
  actualizarCantidadTareas();
}

// Función para eliminar una tarea
function eliminarTarea(tareaLi) {
  tareaLi.remove();
  actualizarCantidadTareas();
}

// Función para actualizar la cantidad de tareas
function actualizarCantidadTareas() {
  const pendientes = listaPendientes.children.length;
  const completadas = listaCompletadas.children.length;
  document.title = `Tareas Pendientes: ${pendientes}, Tareas Completadas: ${completadas}`;
}