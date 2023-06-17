const { expect } = require('chai');
const lottery = require(`../index`);

describe('Test lottery object', () => {
    describe('Test if the variable is object', () => {
        it('Should be an object', () => {
            expect(typeof lottery).to.be.equal('object');
        });
    });

    describe('Test buyLotteryTicket method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.buyLotteryTicket('3', 2, true) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.buyLotteryTicket(3, '2', true) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.buyLotteryTicket(0, 2, true) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.buyLotteryTicket(1, 0, true) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.buyLotteryTicket(3, 2, false) }).to.throw(Error, 'Unable to buy lottery ticket!');
        });
        it('Should return correct message', () => {
            expect(lottery.buyLotteryTicket(3, 2, true)).to.be.equal('You bought 2 tickets for 6$.');
        });
    });

    describe('Test checkTicket method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.checkTicket(2, 2) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.checkTicket([], {}) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6]) }).to.throw(Error, 'Invalid input!');
        });
        // it('Should throw error with invalid input', () => {
        //     expect(() => { lottery.checkTicket([1, 2, 3, 4, '5', 6], [1, 2, 3, 4, 5, 6]) }).to.throw(Error, 'Invalid input!');
        // });
        // it('Should throw error with invalid input', () => {
        //     expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, '2', 3, 4, 5, 6]) }).to.throw(Error, 'Invalid input!');
        // });
        it('Should return correct message', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])).to.be.equal('Congratulations you win, check your reward!');
        });
        it('Should return correct message', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.be.equal('Congratulations you win, check your reward!');
        });
        it('Should return correct message', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.be.equal('You win the JACKPOT!!!');
        });
    });

    describe('Test secondChance method', () => {
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.secondChance(2, 2) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.secondChance(2, {}) }).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with invalid input', () => {
            expect(() => { lottery.secondChance('2', []) }).to.throw(Error, 'Invalid input!');
        });
        it('Should return correct message', () => {
            expect(lottery.secondChance(2, [4, 2, 5])).to.be.equal('You win our second chance prize!');
        });
        it('Should return correct message', () => {
            expect(lottery.secondChance(3, [4, 2, 5])).to.be.equal("Sorry, your ticket didn't win!");
        });
    });

});