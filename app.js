console.log('Hello World');

const sum = (a,b) => {
    return a+b;
}

console.log(sum(7,3));


function fromDollarToYen(dollar){
    return dollar * (109.68).toFixed(2);
}

function fromEuroToDollar(euro){
    return euro * (1.2).toFixed(2);
}

function fromYenToPound(yen){
    return yen * (0.0067).toFixed(4);
}
console.log(fromYenToPound(20));
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };