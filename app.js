

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Función para convertir de dólares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars /oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

//Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

//Función para convertir de yenes a libras
const fromYenToPound = (yenes) => {
    let euros = yenes / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

//Ejemplos de uso 
console.log(fromDollarToYen(10)); //Convertir 10 USD a JPY
console.log(fromEuroToDollar(10)); //Convertir 10 EUR a USD
console.log(fromYenToPound(10)); //Convertir 10 JPY a GBP

//Exportar las funciones

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};