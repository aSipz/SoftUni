function bookShelf(input) {
    let shelfArray = [];
    input.forEach(line => {
        if (line.includes(' -> ')) {
            let [shelfId, shelfGenre] = line.split(' -> ');
            let idIsTaken = false;
            for (const shelf of shelfArray) {
                if (Object.keys(shelf).includes(shelfId)) {
                    idIsTaken = true;
                    break;
                }
            }
            if (!idIsTaken) {
                let currentShelf = { [shelfId]: shelfGenre };
                shelfArray.push(currentShelf);
            }
        } else {
            let [bookTitle, bookInfo] = line.split(': ');
            let [bookAuthor, bookGenre] = bookInfo.split(', ');
            for (const shelf of shelfArray) {
                if (Object.values(shelf).includes(bookGenre)) {
                    shelf[bookTitle] = bookAuthor;
                }
            }
        }
    });
    shelfArray.sort((a,b) => Object.keys(b).length - Object.keys(a).length);
    for (const genre of shelfArray) {
        for (const id in genre) {
            if (Number(id) >= 0) {
                console.log(`${id} ${genre[id]}: ${Object.keys(genre). length - 1}`);
                delete genre[id];
                break;
            }
        }
        let bookArray = Object.entries(genre);
        bookArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        for (const [title, author] of bookArray) {
            console.log(`--> ${title}: ${author}`);
        }
    }
}
bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
);