el libro de referencia de git -> https://git-scm.com/book/es/v2

post para si la cagas en git -> https://ohshitgit.com/

juego para aprender git -> https://learngitbranching.js.org/

estudiar git rebase 
en gitlab en settings y en github también podemos hacer configuraciones de ramas como por ejemplo PROTEGER MASTER para que nose pueda hacer merge a lo loco.

https://www.gitkraken.com/


# APUNTES DEL LIBRO DE GIT:
## origen

- Velocidad

- Diseño sencillo

- Gran soporte para desarrollo no lineal (miles de ramas paralelas)

- Completamente distribuido

- Capaz de manejar grandes proyectos (como el kernel de Linux) eficientemente (velocidad y tamaño de los datos).

## Diferencias entre git y otros controladores de versiones:

*Copias instantáneas, no diferencias*
La principal diferencia entre Git y cualquier otro VCS (incluyendo Subversion y sus amigos) es la forma en la que manejan sus datos. Conceptualmente, la mayoría de los otros sistemas almacenan la información como una lista de cambios en los archivos. Estos sistemas (CVS, Subversion, Perforce, Bazaar, etc.) manejan la información que almacenan como un conjunto de archivos y las modificaciones hechas a cada uno de ellos a través del tiempo.

Git maneja sus datos como un conjunto de copias instantáneas de un sistema de archivos miniatura. Cada vez que confirmas un cambio, o guardas el estado de tu proyecto en Git, él básicamente toma una foto del aspecto de todos tus archivos en ese momento y guarda una referencia a esa copia instantánea. Para ser eficiente, si los archivos no se han modificado Git no almacena el archivo de nuevo, sino un enlace al archivo anterior idéntico que ya tiene almacenado. Git maneja sus datos como una secuencia de copias instantáneas.


## Características de git.

-*La mayoría de las operaciones en Git sólo necesitan archivos y recursos locales* para funcionar. (te ahorras operaciones con el costo adicional del retardo de la red y ganas la posibilidad de trabajar en local sin conexión sin líos).

-*git tiene integridad* 
Todo en Git es verificado mediante una suma de comprobación (checksum en inglés) antes de ser almacenado, y es identificado a partir de ese momento mediante dicha suma.

Esto significa que es imposible cambiar los contenidos de cualquier archivo o directorio sin que Git lo sepa.

El mecanismo que usa Git para generar esta suma de comprobación se conoce como hash SHA-1. Se trata de una cadena de 40 caracteres hexadecimales (0-9 y a-f), y se calcula con base en los contenidos del archivo o estructura del directorio en Git. Un hash SHA-1 se ve de la siguiente forma:


## Git generalmente solo añade información:

Cuando realizas acciones en Git, casi todas ellas sólo añaden información a la base de datos de Git. Es muy difícil conseguir que el sistema haga algo que no se pueda enmendar, o que de algún modo borre información. 

*deshacer cambios:* 
https://git-scm.com/book/es/v2/Fundamentos-de-Git-Deshacer-Cosas#r_undoing


## Los tres estados

 -*confirmado (committed)*: significa que los datos están almacenados de manera segura en tu base de datos local.(QUE YA HAS HECHO UN COMMIT)
 -*modificado (modified)*: significa que has modificado el archivo pero todavía no lo has confirmado a tu base de datos (CUANDO HACES GIT STATUS Y SALE EN ROJO TODO LO QUE CAMBIASTE).
 -*preparado (staged)*: significa que has marcado un archivo modificado en su versión actual para que vaya en tu próxima confirmación (CUANDO SE PONE VERDE DESPUÉS DEL GIT ADD.).


#### El flujo va:

-Modificas una serie de archivos en tu directorio de trabajo.

-Preparas los archivos, añadiéndolos a tu área de preparación.

-Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación y almacena esa copia instantánea de manera permanente en tu directorio de Git.


## Ayuda con git para cualquier comando:

`$ git help <verb>
`$ git <verb> --help
`$ man git-<verb>

## Algunos comandos:

-Git checkout-b nombreRama (crear y cambiar de rama
-git branch (ramas que tienes en local)
-git branch -r (ver ramas de repositorio) 
-git fetch (actualiza las referencias del repositorio)
-git add nombreArchivo (añadir al stage ese archivo)
-git add . (Añadir al stage todos los archivos)
-git commit -m (empaquetar para subir los archivos que están en el stage)
-git push (coge los commit que tienes en local y los sincroniza con el repositorio)
-git commit --amend(modificar el último commit que tengas en local)
-git stash(cambios sin hacer commit se va a un portapapeles o pila)
-git stash pop(sacas el último stash de la pila)
-git checkout nombreArchivo (deshacer el archivo)
-git checkout . (Deshacer todos los archivos en local por lo que existe en el repositorio)
-git pull (traer los cambios de la rama a tu repositorio local)

## ejercicio

Vamos a crear una historia:
Equipo redactor: vamos a ir creando una historia según nos indiquen.

La historia se crea en capítulos que se indicarán en los commits. 

Tendrá faltas de ortografía.

cada tipo de cambio va en un commit: corregir las b (ejemplo)

cuando hagamos cambios los vamos a ir subiendo. 

Cada x tiempo con los commits se mergean a developer.

Hay una rama de creadores y pushean a developer. 

En el primer sprint solo hay creadores, en el segundo sprint aparecen las correcciones. en el tercer sprint empezamos a hacer cambios sobre palabras. 

ramas: develop creadores correctores censores 

cada 10 minutos se mergea en eeveloper y se hace una review de qué problemas estamos teniendo y hablarlo antes de seguir con el siguiente sprint. 


cambiar adjetivos por antónimos, cambiar verbos por sinónimos, cambiar nombres propios por nombres propios.

.lllili > * + * {
    margin: 20px;
}