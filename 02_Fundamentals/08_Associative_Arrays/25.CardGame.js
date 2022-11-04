function cardGame(input) {
    let playerList = {};
    for (const player of input) {
        let [name, cards] = player.split(': ');
        let allCards = cards.split(', ');
        if (playerList[name]) {
            allCards.forEach(card => {
                playerList[name].push(card);
                allCards = playerList[name];
            });
        }
        playerList[name] = allCards;
    }
    for (const player in playerList) {
        let allValidCards = new Set();
        let cards = playerList[player];
        cards.forEach(card => {
            allValidCards.add(card);
        });
        let cardValue = 0;
        for (const card of allValidCards) {
            let a;
            let b;
            if (card.length < 3) {
                [a, b] = card.split('');
            } else {
                a = 10;
                b = card[2];
            }
            switch (a) {
                case 'J':
                    a = 11;
                    break;
                case 'Q':
                    a = 12;
                    break;
                case 'K':
                    a = 13;
                    break;
                case 'A':
                    a = 14;
                    break;
            }
            switch (b) {
                case 'S':
                    b = 4;
                    break;
                case 'H':
                    b = 3;
                    break;
                case 'D':
                    b = 2;
                    break;
                case 'C':
                    b = 1;
                    break;
            }
            cardValue += Number(a) * Number(b);
        }
        playerList[player] = cardValue;
    }
    for (const name in playerList) {
        console.log(`${name}: ${playerList[name]}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);