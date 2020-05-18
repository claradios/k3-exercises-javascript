// en este ejercicio estamos redefiniendo el metodo toUpperCase de las clase String de javascript para que haga otra cosa, OJO,  se puede acceder a todo el javascript.

String.prototype.toUpperCase = function() {
    let s = this.split('');
    s[0] = s[0].toUpperCase();
    return s.join('');
  }
  
  console.log("hola".capitalize());