const { expect } = require('chai');
const mathEnforcer = require('../index.js');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Object should have addFive method', () => {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true &&
            expect(typeof mathEnforcer.addFive).to.be.equal('function');
        });
        it('Test add', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.addFive(-7);
            //Assert
            expect(result).to.be.equal(-2)
        });
        it('Test add', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.addFive('7');
            //Assert
            expect(result).to.be.undefined;
        });
        it('Test add', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.addFive(5.1);
            //Assert
            expect(result).to.be.closeTo(10.1, 0.01);
        });
    });
    describe('subtractTen', () => {
        it('Object should have subtractTen method', () => {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true &&
            expect(typeof mathEnforcer.subtractTen).to.be.equal('function');
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.subtractTen(-5);
            //Assert
            expect(result).to.be.equal(-15)
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.subtractTen('0');
            //Assert
            expect(result).to.be.undefined;
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.subtractTen(10.1);
            //Assert
            expect(result).to.be.closeTo(0.1, 0.01);
        });
    });
    describe('sum', () => {
        it('Object should have sum method', () => {
            expect(mathEnforcer.hasOwnProperty('sum')).to.be.true &&
            expect(typeof mathEnforcer.sum).to.be.equal('function');
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.sum(-5, 10);
            //Assert
            expect(result).to.be.equal(5)
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.sum('0',5);
            //Assert
            expect(result).to.be.undefined;
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.sum(56, 'sd');
            //Assert
            expect(result).to.be.undefined;
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.sum(56);
            //Assert
            expect(result).to.be.undefined;
        });
        it('Test subtract', () => {
            // Arrange
            
            //Act
          let result = mathEnforcer.sum(0.1, 0.3);
            //Assert
            expect(result).to.be.closeTo(0.4, 0.01);
        });
    });
});