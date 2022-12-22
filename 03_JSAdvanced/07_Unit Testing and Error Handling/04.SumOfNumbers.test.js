const { expect } = require('chai');
const { sum } = require('../index.js');

describe('sum', () => {
    it('Should return correct result', () => {
        // Arrange
        let arr = [1, 2, 3];
        //Act
        let result = sum(arr)
        //Assert
        expect(result).to.equal(6);
    });
    it('Should return Nan if input is not an array', () => {
        // Arrange
        let invalidArr = 's';
        //Act
        let result = sum(invalidArr)
        //Assert
        expect(result).to.be.NaN;
    });
    it('Should return string if input contains different type of number', () => {
        // Arrange
        let mixedArray = ['1', true, 2];
        //Act
        let result = sum(mixedArray);
        //Assert
       expect(result).to.be.equal(4);
    });
});