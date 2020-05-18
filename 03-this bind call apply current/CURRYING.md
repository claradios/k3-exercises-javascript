
# CURRYING

artículos de referencia:

http://www.etnassoft.com/2011/01/21/el-objeto-arguments-en-javascript/

## EL OBJETO ARGUMENTS

En Javascript, el objeto arguments es un tipo especial de datos que se genera en el interior de cada función recogiendo todos los parámetros (argumentos) que se han enviado a la misma.

El objeto arguments tiene la propiedad length, que nos dice cuantos argumentos hemos pasado a la función (arguments.lenght). También podemos acceder al valor de los argumentos utilizando el índice
 --> SE COMPORTA COMO UN ARRAY DE ARGUMENTOS pero ES UN OBJETO.

EJEMPLO:

```js
function testLength(){
  return arguments.length;
}
function testAccess(){
  return 'The first arg is: ' + arguments[0] + ', and the last is: ' + arguments[arguments.length - 1];
}
console.log( testLength( 'foo', 'bar', null, [ 1, 2, 3 ] ) ); // 4
console.log( testAccess( 'foo', 'bar', null, [ 1, 2, 3 ] ) );
// The first arg is: foo, and the last is: 1,2,3
```

### PARTICULARIDADES DEL OBJETO ARGUMENTS

-El objeto arguments *no es creado automáticamente* cada vez que invocamos una función. Sólo se genera si es requerido, por lo que su uso, supone una penalización (mínima) de rendimiento.

-El objeto arguments *no se crea si ya exite un parámentro formal con este nombre* o si hemos declarado *una variable homónima en el interior* de la función.

EJEMPLOS:

```js
function test( a, arguments ){
 return arguments;
}
console.log( test( 1 ) ); // undefined
console.log( test( 1, 2 ) ); // 2

 
//en el siguiente caso ya está recogido en una variable por lo que no lo convoca.
function test( a, b ){
 var arguments = 'foo';
 return arguments;
}
console.log( test( 1, 2 ) );  // foo
```


## CASOS PRÁCTICOS


Veamos una función que suma los "argumentos" que le metamos:

```js
function fnSum(){
  for( var i = 0, result = 0, j = arguments.length; i < j; i++){
    result += arguments[i];
  }
  return result;
}
console.log( fnSum( 1, 4, 6, 3, 5, 6, 3 ) ); // 28
```



Ahora veamos una función que calcula la media de esos argumentos:

```js
var fnAverage = function() {
  for ( var i = 0, total = 0, j = arguments.length; i < j; i++ ) {
    total += arguments[ i ];
  }
 return total / arguments.length;
}
console.log( fnAverage( 6, 8, 6, 9, 9, 10 ) ); // 8
```



Ahora una función que envuelve a tu función para hacer de verificador utilizando los argumentos.

```js
var testArgs = function (fn){
  return function(){
    if( arguments.length < fn.length ){
      throw( [ "Expected", fn.length, " arguments, got ", arguments.length ] );
    }
    return fn.apply( this, arguments );
  }
}
 
var areaTriangle = testArgs( function( tBase, tHeight ){
  return ( tBase * tHeight ) / 2;
} );
 
console.log( areaTriangle( 10 ) ); // ["Expected", 2, " arguments, got ", 1]
console.log( areaTriangle( 10, 5 ) ); // 25
```

#### COMO CONVERTIR EN UN ARRAY EL OBJETO ARGUMENTS 
para poder utilizar sus *métodos nativos* (concat, shift, pop, …). Una de las formas de conseguirlo es mediante la *herencia de prototipos* (o prototípica):

```js
function test(){
  var aps = Array.prototype.slice,  // Cacheamos el método nativo.
  args = aps.call( arguments );
  return ( Object.prototype.toString.call( args ) );
}
 
console.log( test( 1, 4, 6, 3, 5, 6, 3 ) ); // [object Array]
```



## CURRYING

consiste en convertir *una función de n argumentos* en *n funciones de un solo argumento* cada una.

curried = arrastrada

OJO-> si omitimos algunos de los argumentos, la función original nunca será ejecutada.



## APLICACIONES PARCIALES

Una aplicación parcial, se define como el proceso de fijar valores a los argumentos de una función antes de que sea invocada. De hecho, la aplicación parcial es en sí misma una función que devuelve otra función nueva con algunos parámetros ya asignados.

La diferencia es que, mientras el currying precisa de todos los argumentos para invocar a la función orginal, la aplicación parcial llamará siempre a la función aún faltando dichos argumentos. En caso omisión, el resultado será el valor undefined.