// lanza la llamada a la api con 2 segundos de retraso (para que se vea el loader un poco más);

function waitForCalling(func) {
    setTimeout(func, 2000);
  }



export {waitForCalling};