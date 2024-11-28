//Importamos la función sum//
const {sum} = require('./app.js');

test('mensaje: add 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test ('segundo test ******', () => {
    let total = sum(4,5);
    expect(total).toBe(9);
});

test ('texto', () => {
    let total = sum(7,3);
    expect(total).toBe(10);
});

//Importamos las funciones//
const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test ('mensaje: 1 dollar to yen', () => {
    let total = fromDollarToYen(1);
    expect(total).toBe(109.68);
})

test ('mensaje: 1 euro to dollar', () => {
    let total= fromEuroToDollar(1);
    expect(total).toBe(1.2);
})

test ('mensaje: 1 yen to pound', () => {
    let total = fromYenToPound(1);
    expect(total).toBe(0.0067);
})
