## HOISTING Y POR QUÉ NO LE AFECTA A LET.

artículos de referencia:
http://www.etnassoft.com/2010/12/26/hoisting-en-javascript/
https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted/

### HOISTING = LEVANTAMIENTO

Es un bug? feature?

En Javascript, cuando se define una variable en el interior de una función, el intérprete interno pasa a ubicarla al comienzo de su contexto (la eleva). Podemos imaginarnos así a nuestras funciones como recipientes de agua hirviendo donde las partículas más pequeñas (las variables) buyen hacia la superficie; el resto de elementos, incluidos los valores de esas variables, son más pesados y se quedan donde están.


IMPMORTANTE: declarar las variables locales al principio de su actual ámbito para evitar errores. 


Vamos a ver un ejemplo donde la función da undefined por este mismo mal manejo:

```js
var x = 'Hello World'; // variable global
 
function foo(){
    alert( x ); // esperamos el valor global
    var x = 'New Value'; // redefinimos la variable en contexto local
    alert( x );  // esperamos el nuevo valor local
}
 
foo();
```

### ¿ POR QUÉ EL HOISTING NO AFECTA A LET ?

### HOISTING EN VARIABLES VAR

HOISTING -> es la declaración y la inicialización acopladas de la variable en la parte superior del alcance y sus consecuencias. 



COMO FUNCIONA EL ENGINE (PASOS) CUANDO USAMOS UNA VARIABLE

- FASE DECLARACIÓN , registra una variable en el (scope).
- FASE INICIALIZACIÓN , asigna memoria y crear un enlace para la variable scope (ambito). En este paso, la variable se inicializa automáticamente con undefinded.
- FASE ASIGNACIÓN ,asigna un valor a la variable inicializada.

La posición de una variable var en el scope de la función no influye en las fases de declaración e inicialización (que se hacen al principio de todo el scope).

Después de DECLARACIÓN e INICIALIZACIÓN y previo a ASIGNACIÓN la variable tiene valor UNDEFINED.

### HOISTING EN FUNCIONES

En el caso de las funciones suceden los tres pasos seguidos al principo del ámbito en el que han sido declaradas, por lo que es aún más sencillo de ver, como en este ejemplo:

```js
function sumArray(array) {
  return array.reduce(sum);
  function sum(a, b) {
    return a + b;
  }
}
sumArray([5, 10, 8]); // => 23
```

### CICLO DE VIDA DE LET

LET -> 

- Su ciclo de vida desacopla las fases de declaración e inicialización. El desacoplamiento desvanece el término de HOISTING para let.

- La brecha entre las dos fases crea la ZONA MUERTA TEMPORAL (DEAD ZONE), donde no se puede acceder a la variable.


```js
let condition = true;
if (condition) {
  // console.log(number); // => Throws ReferenceError
  let number;
  console.log(number); // => undefined
  number = 5;
  console.log(number); // => 5
}
```

RECOMENDACIONES FINALES

- Declara, inicializa y luego usa variables. Este flujo es correcto y fácil de seguir.
- Mantén las variables lo más ocultas posible. Cuantas menos variables estén expuestas, más modular será su código.


