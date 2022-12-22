const { expect } = require('chai');
const { lookupChar } = require('../index.js');

describe('', () => {
    it('Should return undefined if first parameter is not a string', () => {
        // Arrange
        let arg = [43534, 32];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.undefined;
    });
    it('Should return undefined if second parameter is not a number', () => {
        // Arrange
        let arg = ['43534', '32'];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.undefined;
    });
    it('Should return incorrect index if second parameter is not valid 1', () => {
        // Arrange
        let arg = ['43534', -1];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.equal('Incorrect index');
    });
    it('Should return incorrect index if second parameter is not valid 2', () => {
        // Arrange
        let arg = ['43534', 5];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.equal('Incorrect index');
    });
    it('Should return incorrect index if second parameter is not valid 3', () => {
        // Arrange
        let arg = ['43534', 3.2];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.undefined;
    });
    it('Should return correct char', () => {
        // Arrange
        let arg = ['43534', 0];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.equal('4');
    });
    it('Should return correct char', () => {
        // Arrange
        let arg = ['43537', 4];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.equal('7');
    });
    it('Should return correct char', () => {
        // Arrange
        let arg = ['tralala', 3];
        //Act
        let result = lookupChar(...arg);
        //Assert
        expect(result).to.be.equal('l');
    });
});