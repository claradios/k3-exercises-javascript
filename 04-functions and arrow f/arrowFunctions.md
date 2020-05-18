
# FUNCIONES
articulos de referencia:

https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/

- Estudiar las diferencias entre function y Arrow function.
- Cuándo usar functio y Arrow function.
- Cómo convertir una function en Arrow function.
- Maneras de declarar funciones.



## DIFERENCIAS ENTRE FUNCTION Y ARROW FUNCTION
ojo es muy importante saber que en function el this es el padre y en arrow el this es lo que hay dentro de la arrow. 

## CUÁNDO USAR FUNCTION / CUANDO *NO* USAR ARROW

NO puedes usar arrow cuando se requiere un *contexto dinḿico*: 
-definiendo métodos, 
-creando objetos con constructores, 
-acceder al target con this en los handling events.

-A  para definir *métodos* de *objetos* literales. --> FUNCTION
    

```js 
    const calculate = {  
        array: [1, 2, 3],
         sum() {
            console.log(this === calculate); // => true
            return this.array.reduce((result, item) => result + item);
        }
    };
    
    calculate.sum(); // => 6
```

-B definir *métodos* de *objetos* prototype.  -->FUNCTION


```js 
function MyCat(name) {
  this.catName = name;
}

MyCat.prototype.sayCatName = function() {
  console.log(this === cat); // => true
  return this.catName;
};

const cat = new MyCat('Mew');
cat.sayCatName(); // => 'Mew'
```


-C definir función *callback* con *contexto dinámico*.  -->FUNCTION

```js 
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});
```


-D invocar un *constructor*.  -->FUNCTION

```js
const Message = function(text) {
  this.text = text;
};
const helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // => 'Hello World!'
```
-E hacer legible para los demás algo. A veces arrow acorta DEMASIADO el código en términos de comprensión.



## CÓMO CONVERTIR FUNCTION EN ARROW F



## MANERA DE DECLARAR FUNCIONES

Una función es un bloque paramétrico de código que definido una vez y llamado múltiples veces después.

Está compuesta o influenciada por:

-JavaScript code that forms the function body
-The list of parameters
-The variables accessible from the lexical scope
-The returned value
-The context this when the function is invoked
-Named or an anonymous function
-The variable that holds the function object
-arguments object (or missing in an arrow function)


Cuando declaras una función suceden lo siguiente.

-se crea una *variable* en el scope/contexto actual cuyo identificador es su nombre y contiene dentro el objeto función.

-esta variable se eleva al inicio del contexto -> puede ser invocada antes de haber sido declarada.

-la función tiene asociado un nombre accesible mediante la propiedad nombre del objeto función.


```js
// Hoisted variable
console.log(hello('Aliens')); // => 'Hello Aliens!'
// Named function
console.log(hello.name)       // => 'hello'
// Variable holds the function object
console.log(typeof hello);    // => 'function'
function hello(name) {
  return `Hello ${name}!`;
}
```

es útil para recursividad:
```js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(4); // => 24
```

## Diferencias entre FUNCTION DECLARATION y FUNCTION EXPRESSION:

### definiciones:
FUNCTION DECLARATION:
_A function declaration is made of function keyword, followed by an obligatory function name, a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces {...} that delimits the body code._

FUNCTION EXPRESSION:
_A function expression is determined by a function keyword, followed by an optional function name, a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces { ... } that delimits the body code._

the *function declaration* in a statement *always starts with the keyword function*. Otherwise it’s a function expression.

Cuando declaramos y llamamos al mismo tiempo una función se denomina IIFE (Immediately invoked function expression).

Ejemplos:

```js
// Function declaration: starts with "function" -> una función corriente y moliente.
function isNil(value) {
  return value == null;
}

// Function expression: starts with "const"
const isTruthy = function(value) {
  return !!value;
};
// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function(item) {
  return typeof item === 'number';
});
// Function expression (IIFE): starts with "("
(function messageFunction(message) {
  return message + ' World!';
})('Hello');
```

## no declarar funciones dentro de CONDICIONALES

En modo no estricto te deja pero no lo hagas. 
Se guardan en una constante, es decir usando una *function expression*

```js
(function() {
  'use strict';
  let ok;
  if (true) {
    ok = function() {
      return 'true ok';
    };
  } else {
    ok = function() {
      return 'false ok';
    };
  }
  console.log(typeof ok === 'function'); // => true
  console.log(ok()); // => 'true ok'
})();
```

## FUNCTION EXPRESSION

Utilidad:
-Assigned to a variable as an object count = function(...) {...}
-Create a method on an object sum: function() {...}
-Use the function as a callback .reduce(function(...) {...})


*anonymous function expression*
Son anónimas, si utilizas .name te devolverá cadena vacía. 
```js
(
  function(variable) {return typeof variable; }
).name; // => ''
```
Si han sido guardadas en una const, te devolverá el nombre de la constante puesto que se puede inferir como nombre:

Ejemplo:

```js
const myFunctionVar = function(variable) { 
  return typeof variable; 
};
myFunctionVar.name; // => 'myFunctionVar'

```

*named function expression*
Aquellas function expression que tienen asignado un nombre.
Tiene algunas propiedades adicionales comparada con las function expression simples:

La variable funName es accesible en el scope de la función,pero no fuera de él. Sin embargo, la propiedad name del objeto función lleva el nombre funName.

```js
const getType = function funName(variable) {
  console.log(typeof funName === 'function'); // => true
  return typeof variable;
}

console.log(getType(3));     // => 'number'
console.log(getType.name);   // => 'funName'

console.log(typeof funName); // => 'undefined'
```

### VENTAJAS DE LAS FUNCTION EXPRESSIONS con NOMBRE

-Los mensajes de error y el call stacks muestran info más detallada cuando usan los nombres de la función.
-Facilita el debugging reduciendo el número de nombres anónimos apilados en el stack.
-El nombre de la función es explicativo de lo que la función hace.
-Puedes acceder al a propia función dentro de su scope para hacer recursive calls o separar event listeners.

## SHORTLAND METHOD

Definición:

_Shorthand method definition can be used in a method declaration on object literals and ES2015 classes. You can define them using a function name, followed by a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces { ... } that delimits the body statements._

Ventajas: 

-Una sintaxis más corta -> más fácil de entender porque te ahorras poner clave : function(){...}.
-Shorthand method definition crea una named function, contrariamenta a la function expression. Útil para debugging.

ejemplo:

```js
const collection = {
  items: [],
  add(...items) {
    this.items.push(...items);
  },
  get(index) {
    return this.items[index];
  }
};
collection.add('C', 'Java', 'PHP');
collection.get(1) // => 'Java'
```

Cuando se trata de una Class tienes que ponerlo de esta forma sí o sí:

```js
class Star {
  constructor(name) {
    this.name = name;
  }
  getMessage(message) {
    return this.name + message;
  }
}
const sun = new Star('Sun');
sun.getMessage(' is shining') // => 'Sun is shining'
```

## COMPUTED PROPERTIES

usa la sintaxis -> [methodName]() {...}

```js
const addMethod = 'add',
  getMethod = 'get';
const collection = {
  items: [],
  [addMethod](...items) {
    this.items.push(...items);
  },
  [getMethod](index) {
    return this.items[index];
  }
};
collection[addMethod]('C', 'Java', 'PHP');
collection[getMethod](1) // => 'Java'
```

## ARROW FUNCTIONS

Definición:

_An arrow function is defined using a pair of parenthesis that contains the list of parameters (param1, param2, ..., paramN), followed by a fat arrow => and a pair of curly braces {...} that delimits the body statements._

-Puedes no poner paréntesis cuando hay sólo un parámetro. Puedes no poner las llaves si sólo hay un statement.

Propiedades:

-La arrow function no crea su contexto de ejecución, lo toma léxicamente. (al contrario que las function expression y las function declaration, que crea su propio this dependiendo de la invocación). Esto significa que toma como _this_ el de su contexto inmediato exterior. Esto está genial porque *no tienes que usar .bind(this)* o guardar el contexto en una variable *var self = this* cuando una función necesita un contexto adjunto.

-La arrow function es anónimo. De todas formas, el engine puede deducirlo de la variable en la que se guarda.

-El objeto arguments no está disponible en las funciones flecha, pero puedes usar rest parameters (...params).


### Context transparency

Veamos este ejemplo, donde addNumber() es un método de numbersObject que contiene una función flecha. Esta función tomará el contexto de numbersObject. 
```js
class Numbers {
  constructor(array) {
    this.array = array;
  }
  addNumber(number) {
    if (number !== undefined) {
       this.array.push(number);
    } 
    return (number) => { 
      console.log(this === numbersObject); // => true
      this.array.push(number);
    };
  }
}
const numbersObject = new Numbers([]);
const addMethod = numbersObject.addNumber();

addMethod(1);
addMethod(5);
console.log(numbersObject.array); // => [1, 5]
```

Si no hubieramos usado flecha necesiariamos especificar cuál es el contexto mediante bind

```js
//...
    return function(number) { 
      console.log(this === numbersObject); // => true
      this.array.push(number);
    }.bind(this);
//...
```

### Short callbacks

Te puedes ahorrar los paréntesis si solo hay 1 parámetro y las llaves si sólo hay un statement.
```js
const numbers = [1, 5, 10, 0];
numbers.some(item => item === 0); // => true
```

## GENERATOR FUNCTION

devuelve un generator object que luce así:
```js
function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
```

y tiene los siguientes métodos:
```js
Generator.prototype.next()
//Returns a value yielded by the yield expression.
Generator.prototype.return()
//Returns the given value and finishes the generator.
Generator.prototype.throw()
//Throws an error to a generator (also finishes the generator, unless caught from within that generator).
```
Su sintaxis es similar a una function expression, function declaration o method declaration, simplemente con un asterisco tras la palabra function

-Function declaration form function* < name >():
```js
function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
```

-Function expression form function* ():
```js
const indexGenerator = function* () {
  let index = 0;
  while(true) {
    yield index++;
  }
};
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
```
-Shorthand method definition form * < name >()
```js
const obj = {
  *indexGenerator() {
    var index = 0;
    while(true) {
      yield index++;
    }
  }
}
const g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
```


## NEW FUNCTION
Las funciones en javaScript son objetos de primera clase. Son objetos regulares de tipo función.
Aquí vemos varias maneras de declarar una función:
```js
function sum1(a, b) {
  return a + b;
}
const sum2 = function(a, b) {
  return a + b;
}
const sum3 = (a, b) => a + b;
console.log(typeof sum1 === 'function'); // => true
console.log(typeof sum2 === 'function'); // => true
console.log(typeof sum3 === 'function'); // => true
```
El objeto función tiene un constructor llamado Function. Cuando Function es invocado como constructor, 
*New Function(arg1, arg2, ..., argN, bodyString)*  , una nueva función se crea. Estas funciones no tienen acceso al contexto, siempre están referidas al global scope. 

```js
const numberA = 'numberA', numberB = 'numberB';
const sumFunction = new Function(numberA, numberB, 
   'return numberA + numberB'
);
sumFunction(10, 15) // => 25
```
