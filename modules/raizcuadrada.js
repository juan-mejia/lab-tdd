const division = require('./division')
const suma = require('./suma')

const raizcuadrada = (a)=> {
    var x, x1 = division(a, 2);
        
    do {
        x = x1;
        x1 = division((suma(x, division(a, x))), 2);
    } while (x !== x1);
    
    return x;
}

module.exports = raizcuadrada;