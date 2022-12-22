const expect = require('chai').expect;
const isSymmetric = require('../index').isSymmetric;

describe('Symmetric array', () => {
    it('Should return false if input is not an array', () => {
        // Arrange
        let input = 'string';
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    });

    it('Should return true if array is symmetric, with odd elements', () => {
        // Arrange
        let input = [1,2,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    });

    it('Should return true if array is symmetric, with even elements', () => {
        // Arrange
        let input = [1,2,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    });

    it('Should return false if array is asymmetric, with odd elements', () => {
        // Arrange
        let input = [1,4,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    });

    it('Should return false if array is asymmetric, with even elements', () => {
        // Arrange
        let input = [1,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    });

    it('Should return true for array with one element', () => {
        // Arrange
        let input = [1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    });

    it('Should return false for edge case', () => {
        // Arrange
        let input = [1, '1'];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    });
});