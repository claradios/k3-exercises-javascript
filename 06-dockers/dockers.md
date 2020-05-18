# DOCKERS

## SERVIDORES

Un servidor es algo que reibe peticiones y envía respuestas.

Tu rooter es un servidor , que tiene un hardward y un firmward(el programa que tenga instalaod)

En internet hay varios protocolos y muchos puertos.

Cada protocolo suele estar asociado a un puerto PROTOCOLO 

-HTTP -> puerto 80
-HTTPS ->puerto 443 (seguro)
-ssh -> protocolo para comunicación

ejemplo:

si yo escribo ssh guest@172.43.81.106 me conecto al ordenador de manu
con password 12345678 


### CREAR UN SERVIDOR

con la libreria express puedo crear un servidor con node en 4 lineas. Si yo pongo http lalala 
hay otro tipo de servidores que son Apache y Njinx que son securizadas, lo que haces tu con node es por defecto inseguro. Njinx no ejecuta código. Si tu quieres que ejecute código necesitas otro programa que lo asocias a este y le dices que  cada vez que le llegue tal petición la ejecute en node por ejemplo. Si necesito un servidor estático tengo el Njinx y luego para node tengo mi express. Cada vez que venga una petición a barra api ejecuta esto: localhost blablalba y te hace de PROXY para que te vaya al node. Así el Njinx te hace de capa intermedia qque te protege node y así node no está tan expuesto.

Se comienza haciendo un monolito (una misma máquina, un mismo servidor...) de ahí ya vas viendo. Si por ejemplo algo va a tener muchas peticiones puedes hacer un microservicio de eso en concreto. Vas ampliando microservicios en función de las necesidades, no de golpe .Luego con una API GET WAY recibe todas las peticiones y las redirige a las direcciones que corresponda.


## DOCKER

Docker es una forma de virtualizar aplicaciones con un mini sistema operativo. 
(virtualizador de sistemas operativos --> maquina virtual)

máquina virtual: por ejemplo *virtual box* es una máquina virtual . Con ella tu reservas un espacio en tu disco que puede ser dinámico o estático . (si le dices 8 gigas y es dinámimco ocupará lo que encesite hasta 8, pero si tiene 2 dentro ocupa 2). Le puedes configurar el sistema operativo que quieras, tipo Windows en Ubunto.

Se dieron cuenta de que cuando tu instalas un Njinx o Node, la parte que necesitas del sistema operativo es MINIMA. Entonces docker es una vuelta más. Virtualizar pero a la mínima expresión. Optimiza al máximo todoso los recursos. No tiene TODO el sistema operativo, sólo lo que necesitan estos. Otra ventaja:SEGURIDAD -> al no tener el sistema operativo hay herramientas que no se pueden usar. 

Docker no tiene el home. Con docker siempre tienes que asociar una parte de tu disco duro como volumen al docker. Está pensado para que yo en la configuración del docker le digo bajate este repo en mi disco duro y te asocias esta ruta para acceder a él. Además en la configuración de docker le puedo decir, como tengo esta ruta aquí vas a hacer npm install y aqui npm run start balblabla . Lo que yo haría en local a maneta se lo meto de golpe en la configuracipon.

https://www.github.com/manufosela/introduccion-docker

-CONTENEDOR 1: node con un servidor para las apis dinámicas?.

-CONENEDOR 2: mongodb es la base de datos (es tener un fichero json pero que mediante un lenguaje sql tu le dices pásame tal cosa y te lo devuelve)

-CONTENEDOR 3: Njinx que me servirá ficheros etsáticos para el cliente.


Me pillaré una imagen del sistema operativo y con esa puedo hacer contendeores más especificos que parten de ella.
Al modo de las clases que instancias para tener objetos concretos. 