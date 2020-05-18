# TEST DRIVEN DEVELOPMENT 

Recursos:

Tutorial:
https://github.com/dwyl/learn-tdd

Introducción a TDD con Javascript:
https://www.youtube.com/watch?v=SbKPgaRZsxA

TDD en una aplicación real:
https://www.youtube.com/watch?v=G2KV3YlvDFQ

TDD en 3 pasos:

- *❌ Escribe un Test FALLIDO(RED)* que refleje bien lo que esperas de los requisitos de la historia de usuario. Verlo fallar asegura que no da un falso positivo y que cuando de positivo será por la implementación del código.

- ✅ *Haz que el Test PASE (GREEN)* (sin que falle nada anterior, no regressions).

- *♻️ REFACTORIZA* para que el código además de pasar el test sea legible y coherente.


Recordamos las partes de un test:

- *Description* - describir el contexto que necesitas para tu test
- *Computation* - ejecuta la función/método necesario
- *Assertion* - verifica que tu código da la respuesta esperada a la pregunta de tu test.

## TDD the RITE Way

- Readable
- Isolated OR Integrated
- Thorough
- Explicit

## READABLE

Todo test debería responder a estas preguntas:

1 - Qué componente está siendo testeado?
2 - Qué comportamiento del componente está siendo testeado(test setup / givens)?
3 - Cuáles son los *actual* results?
4 - Cuáles son los *expected* results?
5 - Cómo pueden ser reproducidos los actual results?


*Consejo*: favorece las aserciones con comparaciones de igualdad entre input y output, frente a otras más fancy ya que responden las preguntas anteriores mejor.

*Consejo*: Llama explícitamente a *actual* y *expected* a tus variables. 

## ISOLATED

Los test unitarios deben presentar casos aislados e independientes de otros test, como si fueran miniprogramas. No deben compartir estados con otros tests.

Deben testear compoentes aislados y no combinadamente.

Los test unitarios tienen que ser *rápidos* (para recibir feedback pronto) y *determinantes* (ofrecer siempre el mismo output para el mismo input y sin side effects). Por esto mismo no deberían depender de la network, acceso al storage etc ...


#### En lugar de hacer Mocking: 

*Consejo*: Mockea lo menos posible. Si tienes que mockear mucho estás haciendo algo mal.


- Estoy haciendo mocks de cosas con side-effects que sería mejor testear usando test funcionales o de integración en lugar de unitarios?

- Este componente hace algo más que performar side-effects? Hay reglas de negocio o procesamiento de datos que podrían ser puros, y podría ser mucho más facil de testear unitariamente si las extraemos y aislamos de los side-effects?

## THOROUGH (completo, minucioso):

Además de hacer *happy paths* coherentes, hay que tener encuenta los posibles fallos:

- Network failures
- Wrong / incorrect user inputs
- Out of range values
- Disk errors

*Ejemplo*: Una función que recibe un número debería ser testeada con:

- 0
- negative number inputs
- positive number inputs en el rango esperado
- números muuuuy grandes o fuera de ranto

## EXPLICIT

- Asegúrate de que tu test contiene todo lo que necesitas para que se ejecute dentro del propio test.
- No uses número mágicos
- Utiliza *beforeEach()* y *afterEach()* en los sets para reproducir los contextos comunes sin que se afecten entre ellos.