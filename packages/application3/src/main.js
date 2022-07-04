const { sum, substract } = require('@bcd-monorepo/app2');

const calculatePrice = (amountToDiscount, ...itemsPrice) => {
    const total = sum(...itemsPrice);
    return substract(total, amountToDiscount);
}

module.exports = { calculatePrice };