# CURSO G-K URJC

Repo original: https://github.com/codeurjc/curso-javascript-2019
Mi repo clon: https://github.com/claradios/curso-javascript-2019

## Node.js

### Intro

-Node: ejecuta código de javascript sin necesidad de un browser (eligió como motor el del browser de chrome. Nació libre y despues tuvo apoyo de la empresa joyen y ahora es muy apoyada por la industria)

-Basada en V8, la máquina virtual e google chrome https://v8.dev

-Como se programa en Java Script, el omdelo de programación es asíncrono ya que las llamadas de I/O no son bloqueantes, lo que le hace muy escalable para aplicaciones de red.

https://nodejs.org

### Ventajas

- Tiene mucha comunidad de desarrolladores
- Está soportado de forma oficial en los proveedores cloud (como Java, Python...)
- Tiene una gran cantidad de paquetes NPM
- Cada vez mejor a nivel empresarial
- Mejoró mucho con ECMAScript6

### Tipos de aplicaciones

- Aplicaciones web MVC:
    Generación de HTML en servidor
- Backend para SPA
- Protocoloes de comunicación API REST, WebSockets, AMQP, gRPC...
- Acceso a base de datos: Relacionales, NoSQL...
- Serverless(el desarrollador no se preocupa del servidor), Microservicioes ...ompoladores


### Herramientas por línea de comandos
-Herramientas para desarrollo:
    - Linters
    - Compiladores
    - Testing de rendimiento
-Gestión de proyectos: 
    -Ángular Cli
    -Vue Cli

### aplicaciones Web SPA
-Se ejecutan en el browser
-El código Node.js tiene que adaptarse porque no puede ejecutarse directamente en el navegador
-Para ello se usan "bundlers" (webpack / rollup.js)*

### Apliaciones con interfaz gráfico de usuario
Se combina en una aplicación *node.js* para acceso al sistema con un navegador web (*Chromium*) para el interface de usuario. 
        electronjs.org 
        nwjs.io

### Librerías
En node.js no se pueen usar librerías del browser como DOM, BOM etc porque no hay interfaz de usuario

Node.js ofrece por defecto unas mínimas librerías (gestión de procesos, gestión de datos en memoria nativa del sistema, acceso a la línea de comandos, sistema de ficheros, Redes,Flujos de bytes)

El resto las va implementando la gente.

### node.org/api
Aquí puedes buscar toda la info y comandos que necesites.
Ej: https://nodejs.org/api/fs.html#fs_dir_read

### Versiones

Activa LTS  : long term suport -> significa que le van a seguir dando soporte durante tiempo. La 12 está activa y la 10 también.

Actual (current) -> la última que ha salido.

Los números impares son más inestables.

### Rendimiento

El código JavaScript no se puede ejecutar de forma tan eficiente como Java o C# debido a su naturaleza dinámica.

Su modelo *asíncrono*, ofrece una escalabilidad igual o superior a apliacaciones Java equivalentes que no sean asíncronas.

El *modelo de programación es mucho más sencillo* al no existir varios hilos de ejecución.

Se considera una *solución aceptable en servicios de red* que con mucha I/O y poca algoritmia.

En ubuntu poneos: node --version (te está saliendo la 12)
Si pones: `nodejs -v` (te está saliendo la 13)

Para usar la 13 tenemos que poner `nodejs`.

### APLICACIONES DE CONSOLA

Esto es lo que vamos a hacer en la práctica.
Los ejemplos y ejercicios vienene en el repo.

# MÓDULOS DE NODEJS
## Tipos
- CommonsJS
- ES Modules (experimental) (pronto estará soportado completamente).

Los sistemas de modularización surgieron para facilitar la compatibilidad de las aplicaciones grandes. 

- Cuando se desarrolló node, javascript no tnía un sistema estándar para modularizar aplicaciones
- Node diseño su propio sistema de modularizacion llamado CommonsJS
- En ES6(2015) se definió el sistema de módulos estándar llamado ES Modules
- Node soporta ES Modules desde 13.2.0 (Nov 2019)

Merece la pena aprender a usar ES Modules estándar porque ya están muy soportados aunque sean experimentales aún. 

En node un módulo es símplemente un fichero. (en Java se llaman paquetes en vez de módulos, pero vendrían a ser carpetas).

Si un módulo A quiere algo de un módulo B , A tiene que exportar o con 
exports = o con module.exports. El módulo B lo tiene que importar, requerir 
`var x = require('./module.js')`

mirar ejemplo 2 de los apuntes





