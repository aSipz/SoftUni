function printCards(input) {
    let result = [];
    let isDone = true;
    for (const card of input) {
        let f = card.slice(0, card.length - 1);
        let s = card.slice(card.length - 1);
        try {
            let currentCard = cards(f,s).toString()
            result.push(currentCard);
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            isDone = false;
            break;
        }
    }
    if (isDone) {
        console.log(result.join(' '));
    }
       
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
}
printCards(['5S', '3D', 'QD', '1C'])