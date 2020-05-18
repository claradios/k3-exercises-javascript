https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


## RECURSOS DE ESTILOS APARTE:

https://www.espai.es/blog/2016/07/metodologias-css-oocss-bem-smacss/ (edited) 
http://getbem.com/naming/ (edited) 
https://medium.com/laboratoria-how-to/creando-proyectos-css-mantenibles-con-sass-y-bem-54e013c7b1d9 (edited) 

https://www.elpuas.com/guia-de-estilos-para-sass-con-bem-oocss-y-smacss/ (edited) 

CSS grid: https://css-tricks.com/snippets/css/complete-guide-grid/ (edited) 
CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ (edited) 

# FUNCIÓN ASYNC

Cuando se llama a una *función async*, esta *devuelve un elemento Promise*. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

Una función async puede contener una *expresión await*, la cual *pausa la ejecución* de la función asíncrona y *espera la resolución de la Promise pasada* y, a continuación, *reanuda la ejecución* de la función async y devuelve el valor resuelto.

La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación de generadores y promesas.



```js

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall();

```

Ojo al uso del await en paralelo o en serie:

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});


async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

```



### Reescritura de una cadena de promesas con una función async:

```js
Una API que devuelva una Promise tendrá como resultado una cadena de promesas, y dividirá la función en muchas partes. 

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

Es posible reescribirlo utilizando un solo operador `async` de esta manera:

async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```


# USAR PROMESAS
Una Promise es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.

## Garantías de las promesas:

-Las funciones callback nunca serán llamadas antes de la terminación de la ejecución actual del bucle de eventos de JavaScript.

-Las funciones callback añadidas con then() incluso después del éxito o fracaso de la operación asíncrona serán llamadas como se mostró anteriormente.

-Múltiples funciones callback pueden ser añadidas llamando a then() varias veces. Cada una de ellas es ejecutada una seguida de la otra, en el orden en el que fueron insertadas.

## Encadenamiento:

Ejecutar dos o más operaciones asíncronas seguidas, hasta que una termina no da paso a la siguiente.

Antes se podía expresar así:

```js

hazAlgo(function(resultado) {
  hazAlgoMas(resultado, function(nuevoResultado) {
    hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Obtenido el resultado final: ' + resultadoFinal
    }, falloCallback);
  }, falloCallback);
}, falloCallback);

```

Ahora con el encadenamiento...CHAAAAN:

```js

hazAlgo().then(function(resultado) {
  return hazAlgoMas(resultado);
})
.then(function(nuevoResultado) {
  return hazLaTerceraCosa(nuevoResultado);
})
.then(function(resultadoFinal) {
  console.log('Obtenido el resultado final: ' + resultadoFinal);
})
.catch(falloCallback);

```

Los argumentos a then son opcionales, y `catch(falloCallBack)` es un *atajo* para then(null, falloCallBack). 

Y visto con funciones flecha sería:

```js
hazAlgo()
.then(resultado => hazAlgoMas(resultado))
.then(nuevoResultado => hazLaTerceraCosa(nuevoResultado))
.then(resultadoFinal => {
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
})
.catch(falloCallback);
```

## Encadenar después de un catch (captura):

Es posible encadenar después de un fallo - por ejemplo: un catch- lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena.


```js
new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
.then(() => {
    throw new Error('Algo falló');
        
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz eso');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});
```

A lo loco! en ECMASCRIPT 6 con async sería así:

```js
async function foo() {
  try {
    let resultado = await hazAlgo();
    let nuevoResultado = await hazAlgoMas(resultado);
    let resultadoFinal = await hazLaTerceraCosa(nuevoResultado);
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  } catch(error) {
    falloCallback(error);
  }
}
```

## Eventos de rechazo de promesas

Al momento que una promesa es rechazada, uno de dos eventos se envía al ámbito global (generalmente, éste es el window, o, si se utiliza en un trabajador web, es el  Worker u otra interfaz basada en un trabajador). Los dos eventos son:

rejectionhandled

Se envía cuando se rechaza una promesa, una vez que el rechazo ha sido manejado por la función reject del ejecutor.

unhandledrejection

Se envía cuando se rechaza una promesa pero no hay un controlador de rechazo disponible.

Ejemplo :

```js
window.addEventListener("unhandledrejection", event => {
  /* Podrías comenzar agregando código para examinar 
     la promesa específica analizando event.promise 
     y la razón del rechazo, accediendo a event.reason */

  event.preventDefault();
}, false);
```

## Crear una promesa alrededor de una vieja API de callbacks

Si tienes esto y falla, no tienes manera de manejar el error, por lo que se recomienda envolverlo en una promesa al nivel más bajo:

```js

setTimeout(() => diAlgo("pasaron 10 segundos"), 10000);

// tipo así --->

const espera = ms => new Promise(resuelve => setTimeout(resuelve, ms));

wait(10000).then(() => diAlgo("10 segundos")).catch(falloCallback);


```

## Composición con Promise.all y con Promise.resolve :

Podemos comenzar operaciones en paralelo y esperar por la finalización de todas ellas de la siguiente manera (necesita encadenarle un then que diga qué hacer cuando ya estén listas):

```js
Promise.all([func1(), func2(), func3()])
.then(([resultado1, resultado2, resultado3]) => { /* usa resultado1, resultado2 y resultado3 */ });
```
y también podemos:
La función componerAsync() aceptará cualquier número de funciones como argumentos, y devolverá una nueva función que acepta un valor inicial que es pasado a través del conducto de composición. Esto es beneficioso porque cualquiera o todas las funciones pueden ser o asíncronas o síncronas y se garantiza que serán ejecutadas en el orden correcto:

```js
const aplicarAsync = (acc,val) => acc.then(val);
const componerAsync = (...funcs) => x => funcs.reduce(aplicarAsync, Promise.resolve(x));
```

En ECMAScrpit2017 ... YAIII

```js
let resultado;
for (const f of [func1, func2, func3]) {
  resultado = await f(resultado);
} 
```

```js
const espera = ms => new Promise(resuelve => setTimeout(resuelve, ms));

espera().then(() => console.log(4));
Promise.resuelve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

```

EJERCICIO:
API : https://ghibliapi.herokuapp.com/films
poner un logo
cargar todas las pelis
hacer un filter
hacer un loader hasta que responda la api


ejemplo de fetch con async:

async function callFilms() {
  try {
    let res = await fetch(ENDPOINT);
    let data = await res.json();
    filmArr = data;
    infoContainer.innerHTML = '';
    return createFilteredInfo(filmArr);
  } catch (err) {
      console.log(err);
      return printErrorMsg(apiErrMsg);
  }
};

function callFilms() {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            filmArr = data;
            infoContainer.innerHTML = '';
            return createFilteredInfo(filmArr);
        })
        .catch(err => {
            console.log(err);
            return printErrorMsg(apiErrMsg);
        });
}