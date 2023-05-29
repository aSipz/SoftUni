const { expect } = require('chai');
const rentCar = require(`../index`);

describe('Test rentCar object', () => {
    describe('Test if the variable is object', () => {
        it('Should be an object', () => {
            expect(typeof rentCar).to.be.equal('object');
        });
    });

    describe('Test searchCar method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.searchCar('', []) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.searchCar([], 5) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.searchCar({}, '5') }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error when no match', () => {
            expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Merc') }).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('Should return correct message', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW")).to.be.equal('There is 1 car of model BMW in the catalog!');
        });
        it('Should return correct message', () => {
            expect(rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], "Audi")).to.be.equal('There is 2 car of model Audi in the catalog!');
        });
    });

    describe('Test calculatePriceOfCar method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.calculatePriceOfCar('', []) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.calculatePriceOfCar(5, 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error when no march in catalog', () => {
            expect(() => { rentCar.calculatePriceOfCar('Merc', 3) }).to.throw(Error, 'No such model in the catalog!');
        });
        it('Should return correct message', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 4)).to.be.equal('You choose Mercedes and it will cost $200!');
        });
    });

    describe('Test checkBudget method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.checkBudget('', [], 'sdf') }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.checkBudget(5, 2, 3.1) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.checkBudget(5.24, 2, 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { rentCar.checkBudget(354, 643.3, 3) }).to.throw(Error, 'Invalid input!');
        });
        it('Should return correct message', () => {
            expect(rentCar.checkBudget(50, 4, 199)).to.be.equal('You need a bigger budget!');
        });
        it('Should return correct message', () => {
            expect(rentCar.checkBudget(50, 2, 100)).to.be.equal('You rent a car!');
        });
    });

});