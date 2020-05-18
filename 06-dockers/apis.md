# API REST

verbos
    get -> obtener/pedir
    post -> instertar (machaca)
    patch -> actualizar
    delete -> borrar
    put -> actualizar

cada vez que ponemos una url en el navegador estamos haciendo una petición de tipo get.

Utilizamos herramientas como POSTMAN o con curl. Lo instalamos.
sudo apt install curl

Si pongo 
```
curl https://www.google.es>google.html
```
me guarda en un fichero html lo que recojo de esa web


si pongo 
```
curl hhttps://www.google.es 
```
me carga en consola el html de la pag de google



si decimos:
```
curl -X POST http://localhost:3000/misdatos
```

(si tuvieramos dentro del index el verbo post esto funcionaría como no tenemos no funciona pero)

```
curl localhost/api/misdatos
curl http://localhost/api/misdatos
```


Tu al *IP*  mandas una combinacion de PUERTO PROTOCOLO VERBO
                                        3000   HTTP     REST


En el NGINX vamos a hacer una pequeña aplicación con un html css js
En MONGO guardamos la info de la base de datos

queremos hacer una aplicación que queramos añadir tareas, borrar tareas , marcar tareas como hechas. 

en cada evento tenemos que hacer un fetch al API , get o post o delete. dentro del index.js programo: que con el get me trae toda la lista, que con el post me inserta un nuevo elemento, que con delete me borre el elemento de la lista.
Mirar la sintaxis en mongodb de como se hace el insert y el noseque.

No haré el insert y tal sino que primero llamo a la API.

cómo solucionar el error de cors:

https://expressjs.com/en/resources/middleware/cors.html