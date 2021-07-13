const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});





test("One dollar should be 106.58 yenes", function(){

const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(5)).toBe(532,91); 
})

test("One euro should be 1.20 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One yen should be 0.00625 pounds", function(){
    
    const { fromYenToPounds } = require('./app.js')
    
    
    expect(fromYenToPounds(2)).toBe("0.0125"); 
});
