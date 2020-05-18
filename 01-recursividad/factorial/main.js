'use strict';

//haz una función que calcule el factorial

console.log('working :)');

function giveFactorial (n) {

}

// resuelto por Manu en https://repl.it/@ManuelFosela/Factorial:

function fact1(n) {
    let result = 1;
    for (let i=n; i>=1; i--) {
      result = result * i;
    }
    return result;
  }
  
  console.time('fact1');
  console.log(fact1(50));
  console.timeEnd('fact1');
  
  
  function fact2(n) {
    if (n==1) { return 1; }
    return n * fact2(n-1);
  }
  
  console.time('fact2');
  console.log(fact2(50));
  console.timeEnd('fact2');

  // en ocasiones (al contrario que en fibonacci) es más eficiente usar recurrencia como podemos ver con los console.time