function cards(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];
    if (validFaces.includes(face) && validSuits.includes(suit)) {
        switch (suit) {
            case 'S':
                suit = '\u2660';
                break;
            case 'H':
                suit = '\u2665';
                break;
            case 'D':
                suit = '\u2666';
                break;
            case 'C':
                suit = '\u2663';
                break;
        }
        return {
            toString() { return this.face + this.suit },
            face,
            suit
        }
    } else {
        throw new Error('Error');
    }
}
console.log(cards('1', 'C').toString());