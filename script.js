/*Pedir dos números y mostrar el resultado*/
function ejercicio1(){
    var numero1 = parseFloat(prompt('Escribe el primer número'));
    var numero2 = parseFloat(prompt('Escribe el segundo número'));
    console.log(numero1+numero2);
}

/*Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
function ejercicio2(){
    while (true) {
        var numero = parseInt(prompt('Escribe un número'));
        if (numero < 0) {
            console.log('Has introducido un número negativo. Saliendo del programa.');
            break; // Salir del bucle
        } else if (!isNaN(numero)) {
            console.log('El cuadrado de ' + numero + ' es ' + (numero * numero));
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
        }
    }
}

/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/
function ejercicio3(){
    var contador = 0;
    while (true) {
        var numero = parseInt(prompt('Escribe un número'));
        if (numero < 0) {
            console.log('Has introducido un número negativo.');
            console.log('Se han introducido un total de ' + contador + ' números.');
            break; // Salir del bucle
        } else if (!isNaN(numero)) {
            contador++;
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
        }
    }
}

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
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
            break; // Salir del bucle
        } else if (!isNaN(numero)) {
            suma += numero;
            contador++;
        } else {
            console.log('Entrada no válida. Por favor, ingresa un número válido.');
        }
    }
}

/*Pedir un número N, y mostrar todos los números del 1 al N. */
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


