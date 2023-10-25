/*1. Pedir dos números y mostrar el resultado.*/
function ejercicio1() {
  var numero1 = parseFloat(prompt("Escribe el primer número"));
  var numero2 = parseFloat(prompt("Escribe el segundo número"));
  console.log(numero1 + numero2);
}

/*2. Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
function ejercicio2() {
  while ((numero = parseInt(prompt("Introduce un numero:"))) > 0) {
    var cuadrado = numero * numero;
    document.write("El cuadrado de " + numero + " es " + cuadrado + "</br>");
  }
  /* while (true) {
    var numero = parseInt(prompt('Escribe un número'));
    if (numero < 0) {
      console.log('Has introducido un número negativo. Saliendo del programa.');
      break;
    } else if (!isNaN(numero)) {
      console.log('El cuadrado de ' + numero + ' es ' + (numero * numero));
    } else {
      console.log('Entrada no válida. Por favor, ingresa un número válido.');
    }
}*/
}

/*3. Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/
function ejercicio3() {
  var contador = 0;
  while (true) {
    var numero = parseInt(prompt("Escribe un número"));
    if (numero < 0) {
      console.log("Has introducido un número negativo.");
      console.log("Se han introducido un total de " + contador + " números.");
      break;
    } else if (!isNaN(numero)) {
      contador++;
    } else {
      console.log("Entrada no válida. Por favor, ingresa un número válido.");
    }
  }
}

/*4. Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4() {
  var suma = 0;
  var contador = 0;
  while (true) {
    var numero = parseInt(prompt("Escribe un número"));
    if (numero < 0) {
      if (contador > 0) {
        var media = suma / contador;
        console.log("Has introducido un número negativo.");
        console.log("La media de los números es: " + media);
      } else {
        console.log(
          "Has introducido un número negativo, pero no se han introducido números positivos."
        );
      }
      break;
    } else if (!isNaN(numero)) {
      suma += numero;
      contador++;
    } else {
      console.log("Entrada no válida. Por favor, ingresa un número válido.");
    }
  }
}

/*5. Pedir un número N, y mostrar todos los números del 1 al N.*/
function ejercicio5() {
  var N = parseInt(prompt("Escribe un número N"));
  if (!isNaN(N)) {
    for (var i = 1; i <= N; i++) {
      console.log(i);
    }
  } else {
    console.log("Entrada no válida. Por favor, ingresa un número válido.");
  }
}

/*6. Escribir todos los números del 100 al 0 de 7 en 7.*/
function ejercicio6() {
  for (var i = 100; i >= 0; i -= 7) {
    console.log(i);
  }
}

/*7. Diseñar un programa que muestre el producto de los 10 primeros números impares.*/
function ejercicio7() {
  var producto = 1;
  for (var i = 1; i <= 19; i += 2) {
    producto *= i;
  }
  console.log("El producto de los 10 primeros números impares es: " + producto);
}

/*8. Pedir un número y calcular su factorial.*/
function ejercicio8() {
  function calcularFactorial(numero) {
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  var numero = parseInt(
    prompt("Escribe un número para calcular su factorial:")
  );
  if (!isNaN(numero)) {
    var resultado = calcularFactorial(numero);
    console.log("El factorial de " + numero + " es " + resultado);
  } else {
    console.log("Entrada no válida. Por favor, ingresa un número válido.");
  }
}

/*9. Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.*/
function ejercicio9() {
  var sumaPositivos = 0;
  var sumaNegativos = 0;
  var cantidadCeros = 0;

  for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Escribe un número:"));
    if (!isNaN(numero)) {
      if (numero > 0) {
        sumaPositivos += numero;
      } else if (numero < 0) {
        sumaNegativos += numero;
      } else {
        cantidadCeros++;
      }
    } else {
      console.log("Entrada no válida. Por favor, ingresa un número válido.");
      i--; // Para permitir que el usuario vuelva a ingresar un número válido.
    }
  }
  var mediaPositivos = sumaPositivos / 10;
  var mediaNegativos = sumaNegativos / 10;
  console.log("Media de números positivos: " + mediaPositivos);
  console.log("Media de números negativos: " + mediaNegativos);
  console.log("Cantidad de ceros: " + cantidadCeros);
}

/*10. Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.*/
function ejercicio10() {
  var sumaSueldos = 0;
  var mayoresDe1000 = 0;

  for (var i = 0; i < 10; i++) {
    var sueldo = parseFloat(prompt("Escribe un sueldo:"));
    if (!isNaN(sueldo)) {
      sumaSueldos += sueldo;
      if (sueldo > 1000) {
        mayoresDe1000++;
      }
    } else {
      console.log("Entrada no válida. Por favor, ingresa un sueldo válido.");
      i--; // Para permitir que el usuario vuelva a ingresar un sueldo válido.
    }
  }
  console.log("La suma de sueldos es: " + sumaSueldos + "€");
  console.log("Cantidad de sueldos mayores de 1000€: " + mayoresDe1000);
}

/*11. Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años y la cantidad de alumnos que miden más de 1.75.*/
function ejercicio11() {
  var edades = [];
  var alturas = [];
  var mayoresDe18 = 0;
  var alturasMayoresDe175 = 0;
  for (var i = 0; i < 5; i++) {
    var edad = parseInt(prompt("Escribe la edad del alumno " + (i + 1) + ":"));
    var altura = parseFloat(
      prompt("Escribe la estatura del alumno " + (i + 1) + ":")
    );
    edades.push(edad);
    alturas.push(altura);
    if (edad > 18) {
      mayoresDe18++;
    }
    if (altura > 1.75) {
      alturasMayoresDe175++;
    }
  }
  var sumaEdades = edades.reduce(function (a, b) {
    return a + b;
  });
  var mediaEdades = sumaEdades / 5;
  var sumaAlturas = alturas.reduce(function (a, b) {
    return a + b;
  });
  var mediaAlturas = sumaAlturas / 5;
  console.log("Edad media de los alumnos: " + mediaEdades);
  console.log("Estatura media de los alumnos: " + mediaAlturas);
  console.log("Cantidad de alumnos mayores de 18 años: " + mayoresDe18);
  console.log(
    "Cantidad de alumnos con estatura mayor a 1.75: " + alturasMayoresDe175
  );
}

/*12. Pedir un número y mostrar si es primo o no.*/
function ejercicio12() {
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    for (var i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  var numero = parseInt(
    prompt("Escribe un número para verificar si es primo:")
  );
  if (!isNaN(numero)) {
    if (esPrimo(numero)) {
      console.log(numero + " es un número primo.");
    } else {
      console.log(numero + " no es un número primo.");
    }
  } else {
    console.log("Entrada no válida. Por favor, ingresa un número válido.");
  }
}

/*13. Pedir un número y mostrar todos los números pares desde 1 hasta ese número.*/
function ejercicio13() {
  var numero = parseInt(prompt("Escribe un número:"));
  if (!isNaN(numero)) {
    for (var i = 2; i <= numero; i += 2) {
      console.log(i);
    }
  } else {
    console.log("Entrada no válida. Por favor, ingresa un número válido.");
  }
}

/*14. Pedir un número y mostrar su tabla de multiplicar del 1 al 10.*/
function ejercicio14() {
  var numero = parseInt(
    prompt(
      "Escribe un número para mostrar su tabla de multiplicar del 1 al 10:"
    )
  );
  if (!isNaN(numero)) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  } else {
    console.log("Entrada no válida. Por favor, ingresa un número válido.");
  }
}

/*15. Calcular la suma de los dígitos de un número entero.*/
function ejercicio15() {
  var numero = parseInt(
    prompt("Escribe un número entero para calcular la suma de sus dígitos:")
  );
  if (!isNaN(numero)) {
    var sumaDigitos = 0;
    var numeroAbsoluto = Math.abs(numero);
    while (numeroAbsoluto > 0) {
      var digito = numeroAbsoluto % 10;
      sumaDigitos += digito;
      numeroAbsoluto = Math.floor(numeroAbsoluto / 10);
    }
    console.log("La suma de los dígitos es: " + sumaDigitos);
  } else {
    console.log(
      "Entrada no válida. Por favor, ingresa un número entero válido."
    );
  }
}

/*16. Calcular letra del DNI.*/
function ejercicio16() {
  var input = prompt(
    "Escribe los primeros 8 dígitos de tu DNI (sin la letra):"
  );
  if (input.length === 8) {
    var numeroDNI = parseInt(input);
    if (!isNaN(numeroDNI)) {
      var letraDNI = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(numeroDNI % 23);
      console.log("La letra de control de tu DNI es: " + letraDNI);
      console.log("Tu DNI es: " + numeroDNI + letraDNI);
    } else {
      console.log(
        "Número de DNI no válido. Por favor, ingresa un número válido."
      );
    }
  } else {
    console.log(
      "Debes ingresar exactamente 8 dígitos. Por favor, inténtalo de nuevo."
    );
  }
}

/*17. Solicitar al usuario el total de la cuenta y el porcentaje de propina deseado, despues mostrar por pantalla la propina en euros y el total (propina incluida)*/
function ejercicio17() {
  var totalCuenta = parseFloat(prompt('Escribe el total de la cuenta en euros:'));
  var porcentajePropina = parseFloat(prompt('Escribe el porcentaje de propina deseado:'));
  if (!isNaN(totalCuenta) && !isNaN(porcentajePropina)) {
      var propina = (totalCuenta * porcentajePropina) / 100;
      var totalConPropina = totalCuenta + propina;
      console.log('Propina en euros: ' + propina.toFixed(2) + '€');
      console.log('Total (con propina): ' + totalConPropina.toFixed(2) + '€');
  } else {
      console.log('Entrada no válida. Por favor, ingresa números válidos.');
  }
}

/*18. Hacer un juego de adivinanza. Generar un numero entre 0 y 100 y pedir al usuario que intente adivinarlo. Si lo acierta mostrar un mensaje de felicidades y sino indicar si el numero es mayor o menor comparándolo con el introducido por el usuario.*/
function ejercicio18() {
  var numeroAleatorio = Math.floor(Math.random() * 101);
  var intentos = 0;
  function adivinarNumero() {
    var numeroUsuario = parseInt(prompt('Adivina el número (entre 0 y 100):'));
    intentos++;
    if (!isNaN(numeroUsuario)) {
      if (numeroUsuario === numeroAleatorio) {
        console.log('¡Felicidades! Has adivinado el número ' + numeroAleatorio + ' en ' + intentos + ' intentos.');
      } else if (numeroUsuario < numeroAleatorio) {
        console.log('El número es mayor. Sigue intentando.');
        adivinarNumero();
      } else {
        console.log('El número es menor. Sigue intentando.');
        adivinarNumero();
      }
    } else {
      console.log('Entrada no válida. Por favor, ingresa un número válido.');
      adivinarNumero();
    }
  }
  adivinarNumero();
}

/*19. Eliminar una palabra:
Pedir al usuario que ingrese una frase y una palabra a eliminar.
Eliminar todas las apariciones de la palabra en la frase utilizando el método split, join y indexOf.
Mostrar la frase resultante sin la palabra eliminada.*/
function ejercicio19() {
  var frase = prompt('Ingresa una frase:');
  var palabraAEliminar = prompt('Ingresa la palabra que deseas eliminar:');
  if (frase && palabraAEliminar) {
    var palabras = frase.split(' '); // Divide la frase en un array de palabras.
    var nuevaFrase = palabras.filter(function(palabra) {
      return palabra !== palabraAEliminar;
    });
    var fraseResultante = nuevaFrase.join(' '); // Une las palabras en una nueva frase.
    console.log('Frase resultante sin la palabra eliminada: ' + fraseResultante);
  } else {
    console.log('Por favor, ingresa una frase y una palabra para eliminar.');
  }
}

/*20. Pedir al usuario que ingrese una lista de elementos separados por comas. Devolver una lista sin elementos duplicados.*/
function ejercicio20() {
  var input = prompt('Ingresa una lista de elementos separados por comas:');
  if (input) {
    var elementos = input.split(',').map(item => item.trim());
    var elementosUnicos = [...new Set(elementos)];    
    console.log('Lista sin elementos duplicados: ' + elementosUnicos.join(', '));
  } else {
     console.log('Por favor, ingresa una lista de elementos separados por comas.');
  }
}

/*21. Ejercicio multiple de extracciones.*/
function ejercicio21() {
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var palabras = ['Hola', 'Mundo', 'JavaScript', 'Introducción', 'Programación'];
  var frase = 'Este es un ejemplo de una frase larga.';
  var estudiantes = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];
  // Ejercicio 1: Extraer los primeros 3 números del array 'numeros'
  var primerosTresNumeros = numeros.slice(0, 3);
  // Ejercicio 2: Extraer las palabras en las posiciones 2 y 3 del array 'palabras'
  var palabrasPosiciones2y3 = palabras.slice(2, 4);
  // Ejercicio 3: Extraer una parte de la frase desde el índice 5 hasta el 15
  var parteDeFrase = frase.slice(5, 15);
  // Ejercicio 4: Extraer los dos últimos elementos del array 'estudiantes'
  var ultimosDosEstudiantes = estudiantes.slice(-2);
  // Ejercicio 5: Extraer una porción del array 'numeros' desde el índice 3 hasta el final
  var numerosDesdeElIndice3 = numeros.slice(3);
  console.log("Ejercicio 1:", primerosTresNumeros);
  console.log("Ejercicio 2:", palabrasPosiciones2y3);
  console.log("Ejercicio 3:", parteDeFrase);
  console.log("Ejercicio 4:", ultimosDosEstudiantes);
  console.log("Ejercicio 5:", numerosDesdeElIndice3);
}

/*22. Pedirle una frase al usuario y devolver mitad en minuscula y mitad en mayuscula.*/
function ejercicio22() {
  var frase = prompt('Ingresa una frase:');
  if (frase) {
    var longitud = frase.length;
    var mitad = Math.floor(longitud / 2);
    var parteMinuscula = frase.slice(0, mitad).toLowerCase();
    var parteMayuscula = frase.slice(mitad).toUpperCase();
    var fraseResultado = parteMinuscula + parteMayuscula;
    console.log('Frase con la mitad en minúscula y la mitad en mayúscula: ' + fraseResultado);
  } else {
    console.log('Por favor, ingresa una frase.');
  }
}

/*23. Escribe un programa en JavaScript que solicite al usuario ingresar una oración. A partir de la oración ingresada, el programa deberá realizar los siguientes pasos:
      1. Contar la cantidad de palabras en la oración.
      2. Solicitar al usuario ingresar una palabra específica para buscar en la oración.
      3. Contar la cantidad de ocurrencias de la palabra ingresada en la oración.
      4. Solicitar al usuario ingresar una nueva palabra para reemplazar todas las ocurrencias de la palabra ingresada en la oración.
      5. Reemplazar todas las ocurrencias de la palabra ingresada por la nueva palabra.
      6. Mostrar la oración resultante después de realizar el reemplazo.*/
function ejercicio23() {
  var oracion = prompt('Ingresa una oración:');  
  if (oracion) {
// 1. Contar la cantidad de palabras en la oración.
    var palabras = oracion.split(' ');
    var cantidadPalabras = palabras.length;    
    console.log('Cantidad de palabras en la oración: ' + cantidadPalabras);
// 2. Solicitar al usuario ingresar una palabra específica para buscar en la oración.
    var palabraBuscar = prompt('Ingresa una palabra para buscar en la oración:');
    if (palabraBuscar) {
// 3. Contar la cantidad de ocurrencias de la palabra ingresada en la oración.
      var regex = new RegExp('\\b' + palabraBuscar + '\\b', 'gi');
      var ocurrencias = (oracion.match(regex) || []).length;
      console.log('Cantidad de ocurrencias de la palabra: ' + ocurrencias);
// 4. Solicitar al usuario ingresar una nueva palabra para reemplazar todas las ocurrencias.
      var nuevaPalabra = prompt('Ingresa una nueva palabra para reemplazar todas las ocurrencias:');    
      if (nuevaPalabra) {
// 5. Reemplazar todas las ocurrencias de la palabra ingresada por la nueva palabra.
        var oracionModificada = oracion.replace(regex, nuevaPalabra);
// 6. Mostrar la oración resultante después del reemplazo.
        console.log('Oración resultante: ' + oracionModificada);
      } else {
        console.log('Debes ingresar una nueva palabra para el reemplazo.');
      }
    } else {
      console.log('Debes ingresar una palabra para buscar en la oración.');
    }
  } else {
    console.log('Debes ingresar una oración.');
  }
}

/*24. Dado el siguiente array de números: [10, 20, 30, 40, 50], elimina los elementos en las posiciones 1 y 3.*/
function ejercicio24() {
  var numeros = [10, 20, 30, 40, 50];
  numeros.splice(1, 1);
  numeros.splice(2, 1);
  console.log(numeros);
}

/*25. Dado el siguiente array de letras: ['a', 'b', 'c', 'd', 'e'], reemplaza los elementos en las posiciones 0 y 4 por los valores 'x' y 'y' respectivamente.*/
function ejercicio25() {
  var letras = ['a', 'b', 'c', 'd', 'e'];
  letras[0] = 'x';
  letras[4] = 'y';
  console.log(letras); 
}

/*26. Dado el siguiente array de palabras: ['hello', 'world', 'JavaScript'], inserta los elementos 'goodbye' y 'code' en la posición 2 sin eliminar ningún elemento existente.*/
function ejercicio26() {
  var palabras = ['hello', 'world', 'JavaScript'];
  palabras.splice(2, 0, 'goodbye', 'code');
  console.log(palabras);
}

/*27. Dado el siguiente array de números: [5, 10, 15, 20, 25], extrae los elementos desde la posición 2 hasta la posición 4 y muestra tanto el array resultante como los elementos extraídos.*/
function ejercicio27() {
  var numeros = [5, 10, 15, 20, 25];
  var elementosExtraidos = numeros.splice(2, 3);
  console.log('Array resultante:', numeros);
  console.log('Elementos extraídos:', elementosExtraidos);
}

/*28. Dado el siguiente array de frutas: ['manzana', 'banana', 'pera', 'uva', 'kiwi'], divide el array en dos partes en la posición 3 y muestra tanto la primera parte como la segunda parte resultantes.*/
function ejercicio28() {
  var frutas = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
  var primeraParte = frutas.splice(0, 3);
  var segundaParte = frutas;
  console.log('Primera parte:', primeraParte);
  console.log('Segunda parte:', segundaParte);
}

/*29. Filtrar los números pares del array numeros y mostrarlos en el documento.*/
function ejercicio29() {
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
  });
  document.write('Números pares: ' + numerosPares.join(', '));
}

/*30. Filtrar las palabras del array palabras que empiezan con la letra "b" y mostrarlas en el documento.*/
function ejercicio30() {
  var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
  var palabrasConB = palabras.filter(function(palabra) {
    return palabra.charAt(0).toLowerCase() === 'b';
  });
  document.write('Palabras que empiezan con "b": ' + palabrasConB.join(', '));
}

/*31. Filtrar los números del array numeros que son mayores que 50 y mostrarlos en el documento.*/
function ejercicio31() {
  var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var numerosMayores50 = numeros.filter(function(numero) {
    return numero > 50;
  });
  document.write('Números mayores que 50: ' + numerosMayores50.join(', '));
}

/*32. Filtrar las personas en el array de objetos personas cuya edad sea mayor o igual a 30 y mostrarlas en el documento.*/
function ejercicio32() {
  var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 }
  ];
  var personasMayores30 = personas.filter(function(persona) {
    return persona.edad >= 30;
  });
  document.write('Personas mayores de 30 años: ');
  for (var i = 0; i < personasMayores30.length; i++) {
    document.write(personasMayores30[i].nombre + ' ');
  }
}

/*33. Filtrar las palabras del array palabras que contienen la subcadena "an" y mostrarlas en el documento.*/
function ejercicio33() {
  var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
  var palabrasConSubcadena = palabras.filter(function(palabra) {
    return palabra.toLowerCase().includes("an");
  });
  document.write('Palabras que contienen "an": ' + palabrasConSubcadena.join(', '));
}

/*34. Dado un array de objetos personas, debes filtrar y obtener los objetos cuya propiedad nombre coincida exactamente con un valor específico. Almacena los objetos filtrados en la variable personasFiltradas.*/
function ejercicio34() {
  var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 },
  ];
  var nombreBuscado = "María";
  var personasFiltradas = personas.filter(function(persona) {
    return persona.nombre === nombreBuscado;
  });
  console.log(personasFiltradas);
}

/*35. Dado un array de objetos productos, debes filtrar y obtener los objetos cuya propiedad precio sea menor o igual a un valor máximo dado. Almacena los objetos filtrados en la variable productosFiltrados.*/
function ejercicio35() {
  var productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 15 },
  ];
  var precioMaximo = 40;
  var productosFiltrados = productos.filter(function(producto) {
    return producto.precio <= precioMaximo;
  });
  console.log(productosFiltrados);
}

/*36. Dado un array de objetos tareas, debes filtrar y obtener los objetos cuya propiedad completada sea true. Almacena los objetos filtrados en la variable tareasCompletadas.*/
function ejercicio36() {
  var tareas = [
    { nombre: "Comprar leche", completada: true },
    { nombre: "Pagar facturas", completada: false },
    { nombre: "Hacer ejercicio", completada: true },
    { nombre: "Llamar al médico", completada: false },
  ];
  var tareasCompletadas = tareas.filter(function(tarea) {
    return tarea.completada;
  });
  console.log(tareasCompletadas);
}

/*37. Dado un array de objetos empleados, debes filtrar y obtener los objetos que cumplan con dos condiciones: que la propiedad departamento sea igual a un valor específico y que la propiedad edad sea mayor o igual a un valor mínimo dado. Almacena los objetos filtrados en la variable empleadosFiltrados..*/
function ejercicio37() {
  var empleados = [
    { nombre: "Juan", edad: 25, departamento: "Ventas" },
    { nombre: "María", edad: 30, departamento: "Marketing" },
    { nombre: "Pedro", edad: 35, departamento: "Ventas" },
    { nombre: "Ana", edad: 40, departamento: "Recursos Humanos" },
  ];
  var departamentoBuscado = "Ventas";
  var edadMinima = 30;
  var empleadosFiltrados = empleados.filter(function(empleado) {
    return empleado.departamento === departamentoBuscado && empleado.edad >= edadMinima;
  });
  console.log(empleadosFiltrados);
}

/*38. Dado un array de objetos libros, debes filtrar y obtener los objetos cuya propiedad titulo contenga una subcadena específica, sin importar mayúsculas o minúsculas. Almacena los objetos filtrados en la variable librosFiltrados.*/
function ejercicio38() {
  var libros = [
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
  ];
  var subcadenaBuscada = "soledad";
  var librosFiltrados = libros.filter(function(libro) {
    return libro.titulo.toLowerCase().includes(subcadenaBuscada.toLowerCase());
  });

  console.log(librosFiltrados);
}

/*39. Recorre el array words = ['hello', 'world', 'javascript'] de strings e imprime cada palabra en mayúsculas.*/
function ejercicio39() {
  var words = ['hello', 'world', 'javascript'];
  for (var i = 0; i < words.length; i++) {
    var palabraMayusculas = words[i].toUpperCase();
    console.log(palabraMayusculas);
  }
}

/*40. Dado el array numbers = [2, 4, 6, 8, 10] de números, crea un nuevo array que contenga el cuadrado de cada número.*/
function ejercicio40() {
  var numbers = [2, 4, 6, 8, 10];
  var cuadrados = numbers.map(function(numero) {
    return numero * numero;
  });
  console.log(cuadrados);
}

/*41. Verifica si todos los elementos del array names = ['John', 'Jane', 'Mark', 'Emily'] de strings tienen una longitud mayor a 3 caracteres.*/
function ejercicio41() {
  var names = ['John', 'Jane', 'Mark', 'Emily'];
  var todosConMasDe3Caracteres = names.every(function(nombre) {
    return nombre.length > 3;
  });
  console.log(todosConMasDe3Caracteres);
}

/*42. Verifica si al menos un elemento del array numbers = [8, 12, 7, 25, 16] de números es divisible por 5.*/
function ejercicio42() {
  var numbers = [8, 12, 7, 25, 16];
  var algunDivisiblePor5 = numbers.some(function(numero) {
    return numero % 5 === 0;
  });
  console.log(algunDivisiblePor5);
}

/*43. Ordena de forma ascendente el array numbers = [5, 1, 3, 2, 4] de objetos numéricos.*/
function ejercicio43() {
  var numbers = [5, 1, 3, 2, 4];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
}

/*44. Recorre el array names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'] de nombres e imprime solo aquellos que contengan la letra 'a'.*/
function ejercicio44() {
  var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'];
  for (var i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes('a')) {
      console.log(names[i]);
    }
  }
}

/*45. Dado el array celsiusTemperatures = [25, 30, 15, 20, 10] de temperaturas en grados Celsius, conviértelo a grados Fahrenheit.*/
function ejercicio45() {
  var celsiusTemperatures = [25, 30, 15, 20, 10];
  var fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
    return (celsius * 9/5) + 32;
  });
  console.log(fahrenheitTemperatures);
}

/*46. Verifica si todos los elementos del array numbers = [2, -4, 6, -8, 10] de números son positivos.*/
function ejercicio46() {
  var numbers = [2, -4, 6, -8, 10];
  var todosPositivos = numbers.every(function(numero) {
    return numero > 0;
  });
  console.log(todosPositivos);
}

/*47. Verifica si al menos un elemento del array phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'] de strings contiene la palabra "JavaScript".*/
function ejercicio47() {
  var phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'];
  var contieneJavaScript = phrases.some(function(frase) {
    return frase.toLowerCase().includes('javascript');
  });
  console.log(contieneJavaScript);
}

/*48. Ordena alfabéticamente por el nombre el array users = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'David', age: 28 }] de objetos.*/
function ejercicio48() {
  var users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'David', age: 28 }
  ];
  users.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(users);
}

/*49. Crea un juego de piedra, papel o tijera donde el jugador pueda competir contra el ordenador. El juego debe tener las siguientes características:

    • El jugador podrá ingresar su jugada (piedra, papel o tijera) utilizando el método prompt.

    • El ordenador elegirá su jugada de forma aleatoria.

    • Se compararán las jugadas del jugador y el ordenador para determinar el resultado:

        ◦ Si ambos jugadores eligen la misma opción, se mostrará un mensaje de empate.

        ◦ Si el jugador elige piedra y el ordenador elige papel, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.

        ◦ Si el jugador elige piedra y el ordenador elige tijera, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.

        ◦ Si el jugador elige papel y el ordenador elige piedra, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.

        ◦ Si el jugador elige papel y el ordenador elige tijera, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.

        ◦ Si el jugador elige tijera y el ordenador elige piedra, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.

        ◦ Si el jugador elige tijera y el ordenador elige papel, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.

    • Después de cada partida, se mostrará un mensaje preguntando al jugador si desea jugar de nuevo. Si el jugador responde afirmativamente, se repetirá el proceso. De lo contrario, se mostrará un resumen de las partidas jugadas, partidas ganadas, partidas perdidas y partidas empatadas utilizando el método document.write.

¡Disfruta del juego de piedra, papel o tijera contra el ordenador!*/
function ejercicio49() {
  var partidasGanadas = 0;
  var partidasPerdidas = 0;
  var partidasEmpatadas = 0;
  var partidasJugadas = 0;

  function jugarPiedraPapelTijera() {
    var opciones = ["piedra", "papel", "tijera"];

    do {
      var eleccionJugador = prompt("Elige piedra, papel o tijera:").toLowerCase();
      var eleccionOrdenador = opciones[Math.floor(Math.random() * 3)];

      if (opciones.includes(eleccionJugador)) {
        if (eleccionJugador === eleccionOrdenador) {
          alert("Empate");
          partidasEmpatadas++;
        } else if (
          (eleccionJugador === "piedra" && eleccionOrdenador === "tijera") ||
          (eleccionJugador === "papel" && eleccionOrdenador === "piedra") ||
          (eleccionJugador === "tijera" && eleccionOrdenador === "papel")
        ) {
          alert("¡Jugador gana!");
          partidasGanadas++;
        } else {
          alert("Ordenador gana");
          partidasPerdidas++;
        }

        partidasJugadas++;
      } else {
        alert("Elección no válida. Elige piedra, papel o tijera.");
      }
    } while (confirm("¿Deseas jugar de nuevo?"));

    mostrarResumen();
  }

  function mostrarResumen() {
    var resumen =
      "Partidas jugadas: " + partidasJugadas + "\n" +
      "Partidas ganadas: " + partidasGanadas + "\n" +
      "Partidas perdidas: " + partidasPerdidas + "\n" +
      "Partidas empatadas: " + partidasEmpatadas;
    alert(resumen);
  }

  jugarPiedraPapelTijera();
}