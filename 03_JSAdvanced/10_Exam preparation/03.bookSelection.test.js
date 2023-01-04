const { expect } = require('chai');
const bookSelection = require(`../index`);

describe('Test bookSelection object', () => {
    describe('Test if the variable is object', () => {
        it('Should be an object', () => {
            expect(typeof bookSelection).to.be.equal('object');
        });
    })

    describe('Test isGenreSuitable method', () => {
        it('Should have method with this name', () => {
            expect(bookSelection.isGenreSuitable).to.not.be.undefined;
        });
        it('Should be method', () => {
            expect(typeof bookSelection.isGenreSuitable).to.be.equal('function');
        });
        it('Should return not suitable with horror and age below 12', () => {
            let result = bookSelection.isGenreSuitable('Horror', 11);
            expect(result).to.be.equal('Books with Horror genre are not suitable for kids at 11 age')
        });
        it('Should return not suitable with thriller and age below 12', () => {
            let result = bookSelection.isGenreSuitable('Thriller', 12);
            expect(result).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age')
        });
        it('Should return not suitable with horror and age below 12', () => {
            let result = bookSelection.isGenreSuitable('Horror', 12);
            expect(result).to.be.equal('Books with Horror genre are not suitable for kids at 12 age')
        });
        it('Should return not suitable with thriller and age below 12', () => {
            let result = bookSelection.isGenreSuitable('Thriller', 11);
            expect(result).to.be.equal('Books with Thriller genre are not suitable for kids at 11 age')
        });
        it('Should return suitable with age above 12', () => {
            let result = bookSelection.isGenreSuitable('Thriller', 13);
            expect(result).to.be.equal('Those books are suitable');
        });
        it('Should return suitable with age above 12', () => {
            let result = bookSelection.isGenreSuitable('Horror', 14);
            expect(result).to.be.equal('Those books are suitable');
        });
        it('Should return suitable with age below 12 and different genre', () => {
            let result = bookSelection.isGenreSuitable('Comedy', 12);
            expect(result).to.be.equal('Those books are suitable');
        });
        it('Should return suitable with age below 12 and different genre', () => {
            let result = bookSelection.isGenreSuitable('Comedy', 20);
            expect(result).to.be.equal('Those books are suitable');
        });
    });

    describe('Test isItAffordable method', () => {
        it('Should have method with this name', () => {
            expect(bookSelection.isItAffordable).to.not.be.undefined;
        });
        it('Should be method', () => {
            expect(typeof bookSelection.isItAffordable).to.be.equal('function');
        });
        it('Should have numbers for input', () => {
            expect(() => { bookSelection.isItAffordable('4', 4) }).to.throw(Error, 'Invalid input');
        });
        it('Should have numbers for input', () => {
            expect(() => { bookSelection.isItAffordable(2, []) }).to.throw(Error, 'Invalid input');
        });
        it('Should have numbers for input', () => {
            expect(() => { bookSelection.isItAffordable('4', {}) }).to.throw(Error, 'Invalid input');
        });
        it('Should have numbers for input', () => {
            expect(() => { bookSelection.isItAffordable() }).to.throw(Error, 'Invalid input');
        });
        it ('Should correctly calculate if you can afford book', () => {
            expect(bookSelection.isItAffordable(5, 4)).to.be.equal("You don\'t have enough money");
        });
        it ('Should correctly calculate if you can afford book', () => {
            expect(bookSelection.isItAffordable(20, 15)).to.be.equal("You don\'t have enough money");
        });
        it ('Should correctly calculate if you can afford book', () => {
            expect(bookSelection.isItAffordable(4, 4)).to.be.equal('Book bought. You have 0$ left');
        });
        it ('Should correctly calculate if you can afford book', () => {
            expect(bookSelection.isItAffordable(10, 11)).to.be.equal('Book bought. You have 1$ left');
        });
        it ('Should correctly calculate if you can afford book', () => {
            expect(bookSelection.isItAffordable(5, 20)).to.be.equal('Book bought. You have 15$ left');
        });
    });

    describe('Test suitableTitles method', () => {
        it('Should have method with this name', () => {
            expect(bookSelection.suitableTitles).to.not.be.undefined;
        });
        it('Should be method', () => {
            expect(typeof bookSelection.suitableTitles).to.be.equal('function');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles(2, 'g') }).to.throw(Error, 'Invalid input');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles() }).to.throw(Error, 'Invalid input');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles('2', 'g') }).to.throw(Error, 'Invalid input');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles([], []) }).to.throw(Error, 'Invalid input');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles([], 5) }).to.throw(Error, 'Invalid input');
        });
        it('Should have array for books input', () => {
            expect(() => { bookSelection.suitableTitles({}, '5') }).to.throw(Error, 'Invalid input');
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "G", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code', 'G']);
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Da Vinci Code1", genre: "Thriller" }, { title: "The Da Vinci Code2", genre: "Horror" }], 'Thriller')).to.deep.equal(['The Da Vinci Code', 'The Da Vinci Code1']);
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Da Vinci Code1", genre: "Thriller" }, { title: "The Da Vinci Code2", genre: "Horror" }], 'Horror')).to.deep.equal(['The Da Vinci Code2']);
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Comedy" }, { title: "G", genre: "Thriller" }], 'Thriller')).to.deep.equal(["G"]);
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(["The Da Vinci Code"]);
        });
        it('Should add book if genre is equal', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Horror')).to.deep.equal([]);
        });
    });
});