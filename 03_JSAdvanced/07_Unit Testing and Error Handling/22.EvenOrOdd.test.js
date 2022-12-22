const { expect } = require('chai');
const { isOddOrEven } = require('../index.js');

describe('isOddOrEven', () => {
    it('Should return undefined if not a string is passed', () => {
        // Arrange
        let arg = 567;
        //Act
       let result = isOddOrEven(arg);
        //Assert
        expect(result).to.be.undefined;
    });
    it('Should return even with even length', () => {
        // Arrange
        let arg = 'afsb'
        //Act
        let result = isOddOrEven(arg);
        //Assert
        expect(result).to.be.equal('even');
    });
    it('Should return odd with odd length', () => {
        // Arrange
        let arg = 'Gosho'
        //Act
        let result = isOddOrEven(arg);
        //Assert
        expect(result).to.be.equal('odd');
    });
    it('Should return even with empty string', () => {
        // Arrange
        let arg = ''
        //Act
        let result = isOddOrEven(arg);
        //Assert
        expect(result).to.be.equal('even');
    });
});