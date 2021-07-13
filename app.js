const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};


const fromDollarToYen = (dollar)=>{
    let euros= dollar/ oneEuroIs.USD
    let yenes= euros*oneEuroIs.JPY
    return parseInt(yenes)

}

const fromEuroToDollar = (euro) => {

    return euro * oneEuroIs.USD
}

const fromYenToPounds= (yen) =>{
   let euros= yen / oneEuroIs.JPY
   let pounds= euros * oneEuroIs.GBP
   return  pounds.toFixed(4)

};




module.exports = { sum, fromDollarToYen,fromEuroToDollar, fromYenToPounds };