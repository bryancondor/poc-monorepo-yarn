const MathOperator = {
    sum: (...n1) => n1.reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0),
    substract: (...n1) => n1.reduce((previousNumber, currentNumber) => previousNumber - currentNumber),
}


module.exports = MathOperator