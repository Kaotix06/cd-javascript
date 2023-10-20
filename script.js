/*1. Pedir dos números y mostrar el resultado.*/
function ejercicio1(){
    var numero1 = parseFloat(prompt('Escribe el primer número'));
    var numero2 = parseFloat(prompt('Escribe el segundo número'));
    console.log(numero1+numero2);
}

/*2. Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
function ejercicio2(){
    while ((numero = parseInt(prompt('Introduce un numero:'))) > 0) {
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
function ejercicio3(){
    var contador = 0;
    while (true) {
        var numero = parseInt(prompt('Escribe un número'));
        if (numero < 0) {
            console.log('Has introducido un número negativo.');
            console.log('Se han introducido un total de ' + contador + ' números.');
            break;
        } else if (!isNaN(numero)) {
            contador++;
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
        }
    }
}

/*4. Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4(){
    var suma = 0;
    var contador = 0;
    while (true) {
        var numero = parseInt(prompt('Escribe un número'));
        if (numero < 0) {
            if (contador > 0) {
                var media = suma / contador;
                console.log('Has introducido un número negativo.');
                console.log('La media de los números es: ' + media);
            } else {
                console.log('Has introducido un número negativo, pero no se han introducido números positivos.');
            }
            break;
        } else if (!isNaN(numero)) {
            suma += numero;
            contador++;
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
        }
    }
}

/*5. Pedir un número N, y mostrar todos los números del 1 al N.*/
function ejercicio5(){
    var N = parseInt(prompt('Escribe un número N'));
    if (!isNaN(N)) {
        for (var i = 1; i <= N; i++) {
            console.log(i);
        }
    } else {
        console.log('Entrada no válida. Por favor, ingresa un número válido.');
    }
}

/*6. Escribir todos los números del 100 al 0 de 7 en 7.*/
function ejercicio6(){
    for (var i = 100; i >= 0; i -= 7) {
        console.log(i);
    }
}

/*7. Diseñar un programa que muestre el producto de los 10 primeros números impares.*/
function ejercicio7(){
    var producto = 1;
    for (var i = 1; i <= 19; i += 2) {
        producto *= i;
    }
    console.log('El producto de los 10 primeros números impares es: ' + producto);
}

/*8. Pedir un número y calcular su factorial.*/
function ejercicio8(){
    function calcularFactorial(numero) {
        var factorial = 1;
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
    var numero = parseInt(prompt('Escribe un número para calcular su factorial:'));
    if (!isNaN(numero)) {
        var resultado = calcularFactorial(numero);
        console.log('El factorial de ' + numero + ' es ' + resultado);
    } else {
        console.log('Entrada no válida. Por favor, ingresa un número válido.');
    }
}

/*9. Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.*/
function ejercicio9(){
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var cantidadCeros = 0;
    
    for (var i = 0; i < 10; i++) {
        var numero = parseInt(prompt('Escribe un número:'));
        if (!isNaN(numero)) {
            if (numero > 0) {
                sumaPositivos += numero;
            } else if (numero < 0) {
                sumaNegativos += numero;
            } else {
                cantidadCeros++;
            }
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
            i--; // Para permitir que el usuario vuelva a ingresar un número válido.
        }
    }
    
    var mediaPositivos = sumaPositivos / 10;
    var mediaNegativos = sumaNegativos / 10;
    
    console.log('Media de números positivos: ' + mediaPositivos);
    console.log('Media de números negativos: ' + mediaNegativos);
    console.log('Cantidad de ceros: ' + cantidadCeros);
}

/*10. Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.*/
function ejercicio10(){
    var sumaSueldos = 0;
    var mayoresDe1000 = 0;
    
    for (var i = 0; i < 10; i++) {
        var sueldo = parseFloat(prompt('Escribe un sueldo:'));
        if (!isNaN(sueldo)) {
            sumaSueldos += sueldo;
            if (sueldo > 1000) {
                mayoresDe1000++;
            }
        } else {
            console.log('Entrada no válida. Por favor, ingresa un sueldo válido.');
            i--; // Para permitir que el usuario vuelva a ingresar un sueldo válido.
        }
    }
    console.log('La suma de sueldos es: ' + sumaSueldos + '€');
    console.log('Cantidad de sueldos mayores de 1000€: ' + mayoresDe1000);
}
