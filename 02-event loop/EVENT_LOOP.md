## EVENT LOOP

artículo de referencia:
https://medium.com/@ubykuo/event-loop-la-naturaleza-asincr%C3%B3nica-de-javascript-78d0a9a3e03d


-> Chrome usa un runtime cuyo engine consta de dos elementos:
        -Memory Heap : donde se realiza la alocación de memoria
        -Call Stack : donde el runtime mantiene un track de las llamadas a las funciones



### CALL STACK

    stack = pila
 
    en esta pila solo se pueden agregar elementos al final (PUSH) o eliminar el último (POP)

    proceso -> 
        -1.función a punto de ejecutar -> es añadida al stack. 
        -2.Si la función A llama a su vez, a otra función B -> B es agregada sobre A.
        -3.Si Si en algún momento de la ejecución hay un error ->se imprime en consola mensaje 
                                                                y el estado del call stack al momento en que ocurrió

    javaScript -> lenguaje SINGLE THREADED -> solo cuenta con 1 stack


```js
    function foo() {    
        foo(); 
    } 

    foo();
~~~

    En este ejemplo la función se llama a sí misma recurrentemente por lo que el stack llega a su tope de capacidad.

    1 thread -> 1 stack -> una ejecución por vez-> ¿BLOQUEO???? -> NO.

    ¿Por qué? -> JAVASCRIPT ASINCRÓNICO Y NO BLOQUEANTE -> gracias a.....EVENT LOOP!!!

### EVENT LOOP

    Los runtimes de javascript no cuentan nativamente con :
                               
                                * Web Apis

                                    -setTimeout, 
                                    -DOM, 
                                    -HTTP request (AJAX)

                                * Call back queue


SOLUCIÓN PARA NO CARGARTE TODO

### callbacks asincronicas. -> funciones que pasamos por parámetros a otras funciones con el uso de web apis

Existe otra estructura donde se guardan las funciones que deben ser ejecutadas luego de cierto evento (timeout, click, mouse move) == CALLBACK QUEUE

EVENT LOOP -->
         se fija en el call stack, y si está vacío (es decir no hay nada ejecutandose) envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.



### qué pasa cuando bloqueamos el stack:

    El proceso de renderizado es similar a una callback asincrónica , ya que debe esperar a que el stack está vacío, es como una función más en la Callback Queue (aunque con cierta prioridad). Por lo que sí hay codigo bloqueante , el proceso de renderizado tardará más en realizarse y el usuario no podrá hacer nada