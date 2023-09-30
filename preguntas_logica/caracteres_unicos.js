function caracteresUnicos (cadena) {
    for (var i=0; i < cadena.length; i++) {
        if ( cadena.indexOf(cadena[i]) !== cadena.lastIndexOf(cadena[i]) ) {
          return false; // hay repetecion
        }
      }
    return true; // no hay repeticion
}

console.log(caracteresUnicos("Some String"))