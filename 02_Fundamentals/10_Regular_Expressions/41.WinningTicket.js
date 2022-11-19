function ticket(input) {
    let ticketArray = input.split(/ *, */g);
    ticketArray.forEach(ticket => {
        if (ticket.length != 20) {
            console.log('invalid ticket');
        } else {
            let dividedString = ticket.slice(0, 10) + ',' + ticket.slice(10);
            let winningPattern = /.*([@|#|$|^]{6,9}).*,.*\1.*/g;
            let jackpotPattern = /([@|#|$|^]{10}),\1/g;
            if (jackpotPattern.test(dividedString)) {
                let match = dividedString.match(jackpotPattern);
                console.log(`ticket "${ticket}" - 10${match[0][0]} Jackpot!`);
            } else if (winningPattern.test(dividedString)) {
                let symbolPattern = /@{6,9}|#{6,9}|\${6,9}|\^{6,9}/g;
                let match1 = ticket.slice(0,10).match(symbolPattern);
                let match2 = ticket.slice(10).match(symbolPattern);
                let match = match1[0].length >= match2[0].length ? match2 : match1;
                console.log(`ticket "${ticket}" - ${match[0].length}${match[0][0]}`);
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        }
    });
}
ticket('@@@^^^^^^^^^^^^^^^@@');