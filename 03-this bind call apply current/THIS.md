
# THIS

articulos de referencia: 

https://www.w3schools.com/js/js_this.asp

https://medium.com/elblogdejavascript/extendiendo-contextos-this-call-apply-y-bind-e6635ee29fe

https://medium.com/sngular-devs/comprende-js-call-apply-y-bind-2e27db35b8c2

https://books.adalab.es/materiales-front-end-g/modulo-2.-programando-la-web/2_6_objetos

https://books.adalab.es/materiales-front-end-g/modulo-3.-react/3_2_clases_es6



para extender CONTEXTOS de *this* tenemos:

MÉTODOS
    
    call(), apply() , bind()



this es una *variable global*.-->variable accesible en todos los ámbitos de un programa informático.

Se puede acceder al objeto global en sí usando el operador this en el ámbito global (pero solo si no se usa el modo estricto ECMAScript 5, en ese caso devuelve undefined). De hecho, el alcance global consiste en las propiedades del objeto global, incluidas las propiedades heredadas, si las hay.

### VEAMOS UNOS EJEMPLOS

this nos ayuda a referenciar objetos globales a una función/objeto o en su misma función/objeto como sitio de llamada, de esta manera:

```js
var pokemon = {
    nombre: 'charmander',
    tipo: 'fuego',
    color: 'rojo',
    amistad: 70,
    pasos: 5120,
    getPokemon: function() {
      console.log(this.nombre + ' es de tipo:' + ' ' + this.tipo);
    }
};

pokemon.getPokemon() // charmander es de tipo: fuego
```


puede tener el mismo comportamiento si definimos la función fuera del objeto:

```js
function getPokemonFn() {
    console.log(this.nombre + ' es de tipo:' + ' ' + this.tipo);
}

var pokemon = {
    nombre: 'charmander',
    tipo: 'fuego',
    color: 'rojo',
    amistad: 70,
    pasos: 5120,
    getPokemon: getPokemonFn
};

pokemon.getPokemon() // charmander es de tipo: fuego
```

otro uso de *this* es con los métodos:

```js

function func() {
    this.nombre = 'Jose'
}

var getName = new func();
getName.nombre // "Jose"
```

## What is this?

The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, *this* refers to the owner object.
Alone, *this* refers to the global object.
In a *function*, this refers to the global object.
In a function, in *strict mode*, this is undefined.
In an *event*, this refers to the element that received the event.
Methods like *call()*, and *apply()* can refer this to any object.


## CALL

*call* toma dos parámetros.
La función call permite llamar a cualquier función JavaScript indicándole el objeto que actuará como this dentro de la función llamada, así como los parámetros adicionales que sean necesarios.


```js
function unaFuncion (par1, par2, …, parN) {

// código

… }

unaFuncion.call (objetoQueActuaráComoThis, par1, par2, … parN);
```

veamos un ejemplo concreto:

```js
function Profesor (nombre) { 

  this.nombre = nombre || 'Nombre desconocido'; 
  this.salarioBase = 1200; 
  
  }

function saludar(nombrePersona, modoSaludo) {

  alert ('Hola, soy ' + this.nombre + ' y saludo a ' +nombrePersona+ ' con ' + modoSaludo); 

}


function ejemploObjetos() {

  var unProfesor = new Profesor('Carlos');

  saludar.call();

  saludar.call(unProfesor, 'Ernesto', 'afecto'); 

}
```

## APPLY

Toma dos parámetros: el objeto al que hace referencia y un array. (el array se puede meter entero dentro).

```js

function unaFuncion (par1, par2, …, parN) {

// código

… }

unaFuncion.apply (objetoQueActuaráComoThis, arrayDeElementos);
```

veamos un ejemplo más concreto:

```js
function Profesor (nombre) {
     this.nombre = nombre || 'Nombre desconocido'; 
     this.salarioBase = 1200; 
     }

function saludar(nombrePersona, modoSaludo) {

alert ('Hola, soy ' + this.nombre + ' y saludo a ' +nombrePersona+ ' con ' + modoSaludo); 

}

function ejemploObjetos() { 
    
    var unProfesor = new Profesor('Carlos');

    saludar.apply();

    var unArray = ['Christian', 'odio'];

    saludar.apply(unProfesor, ['Ernesto', 'afecto']); 

    saludar.apply(unProfesor, unArray); 

}
```

## BIND

bind() se crea a partir de EcmaScript5, este método crea una nueva función explícitamente cuando es invocada, 

-con el primer parámetro le pasamos el contexto y 
-el segundo los argumentos que se le van a pasar a la función enlazada (opcional)


Veamos un ejemlo donde al estar anidada la función pierde su contexto (para eso es bind)

```js

var pokemon = {
    nombre: 'charmander',
    tipo: 'fuego',
    color: 'rojo',
    amistad: 70,
    pasos: 5120,
    getPokemon: function() {      
      setInterval(function() {
        console.log(this.nombre + ' es de tipo:' + ' ' + this.tipo);
      })      
    }
};

pokemon.getPokemon() // undefined es de tipo: undefined
```

SOLUCIÓN 1 A ESTE PROBLEMA -> recoger en una var this y pasárselo a la anidada.

```js

var pokemon = {
    nombre: 'charmander',
    tipo: 'fuego',
    color: 'rojo',
    amistad: 70,
    pasos: 5120,
    getPokemon: function() {
      var self = this;      
      setInterval(function() {
        console.log(self.nombre + ' es de tipo:' + ' ' + self.tipo);
      })      
    }
};

pokemon.getPokemon() // charmander es de tipo: fuego
```

SOLUCIÓN 2 A ESTE PROBLEMA -> pasarle el contexto a la anidada con bind.

```js

var pokemon = {
    nombre: 'charmander',
    tipo: 'fuego',
    color: 'rojo',
    amistad: 70,
    pasos: 5120,
    getPokemon: function() {            
      setInterval(function() {
        console.log(this.nombre + ' es de tipo:' + ' ' + this.tipo);
      }.bind(this));      
    }
};

pokemon.getPokemon() // charmander es de tipo: fuego
```