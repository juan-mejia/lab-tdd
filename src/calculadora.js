
// Prube funcion suma

const prueba_suma = ()=> {
    // 2 + 5 =7
    let a = 2;
    let b = 5;
    let esperado = 7;
    // act
    let resultado = suma(a, b);
    // assert
    console.assert(resultado === esperado, "Fallo funcion suma");
}

prueba_suma();