
const hbs = require('hbs');

// Helpers 
hbs.registerHelper('getAnio', ( )=>{
    //estonos retorna el año actual tiene mas opciones como el mes la hora entre otros
    return new Date().getFullYear();
  });
  
  hbs.registerHelper('capitalizar', (texto)=>{

    // Metodo de avaScript para capitalizar string
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
      palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });
  
    return palabras.join(' ');
  });
  
  
  