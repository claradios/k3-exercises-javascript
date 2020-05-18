 'use strict';

//Sea la función:

function mayusculas_y_dobles(a, b, c, d, e, f, g) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    c = c.toUpperCase();
    d = d.toUpperCase();
    e = e.toUpperCase();
    f = f.toUpperCase();
    g = g.toUpperCase();
    return `${a}${a}${b}${b}${c}${c}${d}${d}${e}${e}${f}${f}${g}${g}`;
}

console.log('ejemplo =>', mayusculas_y_dobles('hola', 'a', 'b', 'c', 'd', 'e', 'adios'));



//EJERCICIO 1 : CURRYFICAR

const maybe =
    a =>
        b =>
            c =>
                d =>
                    e =>
                        f =>
                            g => {
                                return (a + a + b + b + c + c + d + d + e + e + f + f + g + g).toUpperCase()
                            }



const bb = maybe('hola');
const cc = bb('a');
const dd = cc('b');
const ee = dd('c');
const ff = ee('d');
const gg = ff('e');


console.log('curry=>', maybe('hola')('a')('b')('c')('d')('e')('adios'));
console.log('curry opt b =>', gg('adios'));


//EJERCICIO 2 : LLAMAR CON CALL Y CON APPLY A LA FUNCIÓN

function Words(a) {
    this.a = a;
}

const mayusCalling = mayusculas_y_dobles.call(Words, 'hola', 'b', 'c', 'd', 'e', 'f', 'adios');
const mayusApplying = mayusculas_y_dobles.apply(Words, ['holi', 'b', 'c', 'd', 'e', 'f', 'adiosi']);

console.log('call =>', mayusCalling);
console.log('apply =>', mayusApplying);



//EJERCIIO 3 : OPTIMIZARLO SIN CURRY

function mayus_reduced(arr) {
    let acc = '';
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
        acc += (arr[i] + arr[i]);
    }
    return `${acc}`;
}

console.log('eficiente =>', mayus_reduced(['hola', 'a', 'b', 'c', 'd', 'e', 'f', 'adios']));


//SOLUCIÓN MANU:

function myd(a) {
    a = a.toUpperCase();
    return function (b) {
        b = b.toUpperCase();
        return function (c) {
            c = c.toUpperCase();
            return function (d) {
                d = d.toUpperCase();
                return function (e) {
                    e = e.toUpperCase();
                    return function (f) {
                        f = f.toUpperCase();
                        return function (g) {
                            g = g.toUpperCase();
                            return `${a}${a}${b}${b}${c}${c}${d}${d}${e}${e}${f}${f}${g}${g}`;
                        }
                    }
                }
            }
        }
    }
}

const myd1 = myd('hola');
const myd2 = myd1('a');
const myd3 = myd2('b');
const myd4 = myd3('c');
const myd5 = myd4('d');
const myd6 = myd5('e');
const myd7 = myd6('adios');
console.log(myd7);

// EJEMPLO MANU MOSTRAR DIFERENCIAS ENTRE CALL APPLY Y BIND:

let miContextoEN = { 
    hola: 'hello' 
};

var hola = 'hola';

function saludo(nombre) {
return `${this.hola}, ${nombre}`;
}

console.log(saludo('Luis'));
console.log(saludo.bind(miContextoEN)('Luis'));
console.log(saludo.call(miContextoEN, 'Luis'));
console.log(saludo.apply(miContextoEN, ['Luis']));

console.log(this.hola);

// EJEMPLO MANU CLASE CURRYFICACIÓN

function mulx2sum(a,b) {
    if (a!==undefined && b!==undefined) {
      return 2 * a + 2 * b;
    } else {
      return function(b) {
        return 2 * a + 2 * b;
      }
    }
  }
  
  let res = mulx2sum(2,3);
  console.log(res);
  
  
  let res2 = mulx2sum(2);
  console.log(res2);
  let res3 = res2(3);
  console.log(res3);