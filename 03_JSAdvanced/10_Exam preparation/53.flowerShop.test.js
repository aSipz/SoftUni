const { expect } = require('chai');
const flowerShop = require(`../index`);

describe('Test flowerShop object', () => {
    describe('Test if the variable is object', () => {
        it('Should be an object', () => {
            expect(typeof flowerShop).to.be.equal('object');
        });
    });

    describe('Test calcPriceOfFlowers method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('', 'sf', 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('sdfs', 2, '3') }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(3, 5, 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('Rose', 5.2, 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should return correct message', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 2)).to.be.equal('You need $10.00 to buy Rose!');
        });
    });

    describe('Test checkFlowersAvailable method', () => {
        it('Should return correct message', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal('The Rose are available!');
        });
        it('Should return correct message', () => {
            expect(flowerShop.checkFlowersAvailable('Test', ["Rose", "Lily", "Orchid"])).to.be.equal('The Test are sold! You need to purchase more!');
        });
    });

    describe('Test sellFlowers method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.sellFlowers([], '5') }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.sellFlowers({}, 2) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.sellFlowers([], 4.5) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.sellFlowers(['sdf', 'sdf'], -2) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { flowerShop.sellFlowers(['sdf', 'sdf'], 2) }).to.throw(Error, 'Invalid input!');
        });
        it('Should return correct message', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.be.equal('Rose / Orchid');
        });
        it('Should return correct message', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.be.equal('Lily / Orchid');
        });
        it('Should return correct message', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.be.equal('Rose / Lily');
        });
    });

});