const expect = require('chai').expect;
const createCalculator = require('../index').createCalculator;

describe('calculator', () => {
    it('Should return object', () => {
        // Arrange

        //Act
        let result = createCalculator();
        //Assert
        expect(typeof result).to.be.equal('object');
    });
    it('Should have method add', () => {
        // Arrange

        //Act
        let result = createCalculator();
        //Assert
        expect(result.hasOwnProperty('add')).to.be.true;
    });
    it('Should have method subtract', () => {
        // Arrange

        //Act
        let result = createCalculator();
        //Assert
        expect(result.hasOwnProperty('subtract')).to.be.true;
    });
    it('Should have method get', () => {
        // Arrange

        //Act
        let result = createCalculator();
        //Assert
        expect(result.hasOwnProperty('get')).to.be.true;
    });
    it('Should return 0', () => {
        // Arrange

        //Act
        let result = createCalculator().get();
        //Assert
        expect(result).to.be.equal(0);
    });
    it('Should return 5', () => {
        // Arrange
        let obj = createCalculator();
        obj.add(5);
        //Act
        let result = obj.get();
        //Assert
        expect(result).to.be.equal(5);
    });
    it('Should return -5', () => {
        let obj = createCalculator();
        obj.subtract(5)
        //Act
        let result = obj.get();
        //Assert
        expect(result).to.be.equal(-5);
    });
    it('Should return 10 with string', () => {
        // Arrange
        let obj = createCalculator();
        obj.add('10');
        //Act
        let result = obj.get();
        //Assert
        expect(result).to.be.equal(10);
    });
    it('Should return -10, with string', () => {
        // Arrange
        let obj = createCalculator();
        obj.subtract(10);
        //Act
        let result = obj.get();
        //Assert
        expect(result).to.be.equal(-10);
    });
    it('Should return -10, with string', () => {
        // Arrange
        let obj1 = createCalculator();
        let obj2 = createCalculator();
        obj1.add(5);
        //Act
        let result1 = obj1.get();
        let result2 = obj2.get();
        //Assert
        expect(result1).not.to.be.equal(result2)
    });
});