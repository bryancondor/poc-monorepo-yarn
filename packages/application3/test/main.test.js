const { calculatePrice } = require('../src/main');

describe('main', () => {
    it('should calculate the price', () => {
        const price = calculatePrice(50, 200, 300, 500);

        expect(price).toBe(950);
    })
})