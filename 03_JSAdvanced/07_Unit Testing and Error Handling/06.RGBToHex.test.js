const expect = require('chai').expect;
const rgbToHexColor = require('../index').rgbToHexColor;

describe('rgbToHex', () => {
    it('', () => {
        // Arrange
        let input = ['a', 50, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [23, 'a', 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67, 50, 'b'];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [-4, 50, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67, -3, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67, 5, -2];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [256, 50, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67, 400, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67, 5, 256];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = ['56', 50, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [67.5, 40, 30];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.be.undefined;
    });
    it('', () => {
        // Arrange
        let input = [0, 0, 0];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.equal("#000000");
    });
    it('', () => {
        // Arrange
        let input = [255, 255, 255];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.equal("#FFFFFF");
    });
    it('', () => {
        // Arrange
        let input = [65, 43, 156];
        //Act
        let result = rgbToHexColor(...input);
        //Assert
        expect(result).to.equal("#412B9C");
    });
});
