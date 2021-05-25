const {test, expect} = require('@jest/globals')
const suma = require('../modules/suma');
const resta = require('../modules/resta');

test('la suma de 2 y 5 devuelve 7', () => {
    // 2 + 5 =7
    let a = 2;
    let b = 5;
    let esperado = 7;
    // act
    let resultado = suma(a,b);
    // assert
    expect(resultado).toBe(esperado);
})

test('la resta de 10 y 6 devuelve 4', ()=> {
    // 10 - 6 = 4
    let a = 10
    let b = 6
    let esperado = 4
    // act
    let resultado = resta(a,b)
    // assert 
    expect(resultado).toBe(esperado)
})

test('la multiplicacion de 4 y 5 devuelve', ()=> {
    // 4 * 5 = 20
    let a = 4;
    let b = 5;
    let esperado = 20;
    // act
    let resultado = multiplicacion(a,b);
    // assert
    expect(resultado).toBe(esperado);
})
