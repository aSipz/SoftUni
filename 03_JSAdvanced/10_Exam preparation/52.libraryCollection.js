class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        if (!this.books.find(b => b.bookName == bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (this.books.find(b => b.bookName == bookName).payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        this.books.find(b => b.bookName == bookName).payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.find(b => b.bookName == bookName)) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!this.books.find(b => b.bookName == bookName).payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(this.books.findIndex(b => b.bookName == bookName), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor && !this.books.find(b => b.bookAuthor == bookAuthor)) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        if (!bookAuthor) {
            const result = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(b => result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n');
        }

        const result = [];
        this.books
            .filter(b => b.bookAuthor == bookAuthor)
            .forEach(b => result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`));
        return result.join('\n');
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());