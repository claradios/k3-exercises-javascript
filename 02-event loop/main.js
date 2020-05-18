'use strict';
console.log('working :)');
// Codificar una función llamada secNumeros que recibe un número entero N.
// La función devuelve la secuencia de N a 1 en intervalos de 1 a N segundos.

// Es decir. Si llamamos a la funcion: secNumeros(5);

// Por consola mostrará pasado 1 segundo el número 5.
// Por consola mostrará pasados 2 segundos el número 4.
// Por consola mostrará pasados 3 segundos el número 3.
// Por consola mostrará pasados 4 segundos el número 2.
// Por consola mostrará pasados 5 segundos el número 1.

let counter;

function secretNumber(n) {

    counter=n;

    const showCount = function() { 
        if( counter=== 0 ) {
            clearInterval(secretCalled);        
        } else {
            console.log(counter); 
            counter--;         
        }
    }

    const secretCalled = setInterval(showCount, 1000);

}

secretNumber(7);


// otras soluciones vistas con Mánu:
// https://repl.it/@ManuelFosela/ejer1-setimeout

function secNumeros(n) {
    for (let i=1; i <= n ; i++) {
      setTimeout( function() {
        console.log(i);
      }, i * 1000);
    }
  }
  secNumeros(5);

//si hicieras el bucle sin poner "let i = 1" sino simplemente "i=1" el setTimeout recoge la i sin contexto por lo que te tira el mismo numero ya acabado.
//si no hay let y hay var --> se le bindea el contexto a setTimeout

 /*
     setTimeout( function() {
        console.log(i);
    }, i * 1000).bind(); 
    
    */
  





