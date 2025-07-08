// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 5 + 3 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(5, 5);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(10);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('10 USD should convert correctly to JPY', () => {
    const dollars = 10;
    const expected = (dollars / 1.07) * 156.5;
    const result = fromDollarToYen(dollars);
    expect(result).toBeCloseTo(expected, 2);
});

test('10 JPY should convert correctly to GBP', () => {
    const yenes = 10;
    const expected = (yenes / 156.5) * 0.87;
    const result = fromYenToPound(yenes);
    expect(result).toBeCloseTo(expected, 2);
});