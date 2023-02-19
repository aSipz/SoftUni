function library(input) {
    const shelf = input.shift().split('&');

    let isDone = false;

    const options = {
        'Add Book': onAdd,
        'Take Book': onTake,
        'Swap Books': onSwap,
        'Insert Book': onInsert,
        'Check Book': onCheck,
        'Done': onDone
    }

    for (const line of input) {
        const [command, value1, value2] = line.split(' | ');
        options[command](value1, value2);
        if (isDone) {
            console.log(shelf.join(', '));
            break;
        }
    }

    function onDone() {
        isDone = true;
    }

    function onAdd(book) {
        if (!shelf.includes(book)) {
            shelf.unshift(book);
        }
    }

    function onCheck(index) {
        index = Number(index);
        if (index < 0 || index >= shelf.length) {
            return;
        }
        console.log(shelf[index]);
    }

    function onInsert(book) {
        if (!shelf.includes(book)) {
            shelf.push(book);
        }
    }

    function onTake(book) {
        if (shelf.includes(book)) {
            const index = shelf.indexOf(book);
            shelf.splice(index, 1);
        }
    }

    function onSwap(book1, book2) {
        if (shelf.includes(book1) && shelf.includes(book2)) {
            const book1Index = shelf.indexOf(book1);
            const book2Index = shelf.indexOf(book2);
            shelf.splice(book1Index, 1, book2);
            shelf.splice(book2Index, 1, book1);
        }
    }
}

library(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);