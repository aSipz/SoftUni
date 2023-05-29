const { expect } = require('chai');
const carService = require('../index.js');

describe('Test carService object', () => {
    describe('Test if the variable is object', () => {
        it('Should be an object', () => {
            expect(typeof carService).to.be.equal('object');
        });
    });

    describe('Test isItExpensive method', () => {
        it('Should return correct value', () => {
            let result = carService.isItExpensive('Engine');
            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money');
        });
        it('Should return correct value', () => {
            let result = carService.isItExpensive('Transmission');
            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money');
        });
        it('Should return correct value', () => {
            let result = carService.isItExpensive('');
            expect(result).to.be.equal('The overall price will be a bit cheaper');
        });
    });

    describe('Test discount method', () => {
        it('Should throw error with incorrect input', () => {
            expect(() => { carService.discount('5', 2) }).to.throw(Error, 'Invalid input');
        });
        it('Should throw error with incorrect input', () => {
            expect(() => { carService.discount(5, '2') }).to.throw(Error, 'Invalid input');
        });
        it('Should return correct value', () => {
            let result = carService.discount(1, 100);
            expect(result).to.be.equal('You cannot apply a discount');
        });
        it('Should return correct value', () => {
            let result = carService.discount(2, 200);
            expect(result).to.be.equal('You cannot apply a discount');
        });
        it('Should return correct value', () => {
            let result = carService.discount(7, 200);
            expect(result).to.be.equal('Discount applied! You saved 30$');
        });
        it('Should return correct value', () => {
            let result = carService.discount(8, 100);
            expect(result).to.be.equal('Discount applied! You saved 30$');
        });
    });

    describe('Test partsToBuy method', () => {
        it('Should throw error with incorrect input', () => {
            expect(() => { carService.partsToBuy('5', 2) }).to.throw(Error, 'Invalid input');
        });
        it('Should throw error with incorrect input', () => {
            expect(() => { carService.partsToBuy([], 2) }).to.throw(Error, 'Invalid input');
        });
        it('Should throw error with incorrect input', () => {
            expect(() => { carService.partsToBuy({}, []) }).to.throw(Error, 'Invalid input');
        });
        it('Should return correct value', () => {
            let result = carService.partsToBuy([], []);
            expect(result).to.be.equal(0);
        });
        it('Should return correct value', () => {
            let result = carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]
                , ['coil springs']);
            expect(result).to.be.equal(230);
        });
    });

});