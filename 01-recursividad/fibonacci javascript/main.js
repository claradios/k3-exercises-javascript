'use strict';
console.log('APUNTES FIBONACCI');
//dada una posición n determinar mediante una func() a qué numero de la serie fibonacci corresponde

// la serie es tal que así : 1, 1, 2, 3, 5, 8, 13, 21,  -->  n = (n-1) + (n-1)

function fibonacci(n) {
    if (n === 1) { return 1 };
    if (n === 2) { return 1 };
    let arr = [1, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

//veamos otra manera de solucionarlo sin necesidad de guardar todos los números en un array

function fibo(n) {
    if (n === 1) { return 1 };
    if (n === 2) { return 1 };

    let p1 = 1;
    let p2 = 2;
    let result;

    for (let i = 2; i < n + 1; i++) {
        result = p1 + p2;
        p1 = p2;
        p2 = result;
    }
    return result;
}

// la siguiente manera es más sencilla en líneas de código pero más complea de entender. 
// Utiliza la RECURSIVIDAD. Puedes leer sobre esto en el siguiente artículo: 
// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e


function fib(num) {
    if (num <= 1) return 1;  
    return fib(num - 1) + fib(num - 2);
  }

//el ERROR -> stack overflow -> nos avisa de que hemos llenado la pila de memoria. 

// console time (mirar mejor como se escribe) nos dice en consola cuanto tardó en procesarse la info , podemos comparar cuanto tarda cada una.

console.log(fib(6));
console.log(fibo(6));
console.log(fibonacci(6));

//REVISAR CÓDIGO, LA POSICIÓN ESTÁ UN PUESTO CORRIDA EN ALGUN CASO