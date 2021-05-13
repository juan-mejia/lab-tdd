const {test, expect} = require('@jest/globals')
const suma = require('../modules/calculadora');

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
