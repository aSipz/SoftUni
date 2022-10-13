function weddingSeats(input) {
    let lastSector = input[0];
    let rowsInFirstSector = Number(input[1]);
    let seatsNumOddRow = Number(input[2]);
    let totalSeats = 0;
    let seatsNumEvenRow = seatsNumOddRow + 2;
    let seats = 0;
    let place = '';
    for (let i = 'A'.charCodeAt(); i<= lastSector.charCodeAt(); i++) {
        let firstSymbol = String.fromCharCode(i);
        let secondSymbol = '';
        let thirdSymbol = '';
        for (let j = 1; j <= rowsInFirstSector; j++) {
            secondSymbol = j;
            if (j % 2 == 0) {
                seats = seatsNumEvenRow;
            } else {
                seats = seatsNumOddRow;
            }
            for (let k = 'a'.charCodeAt(); k < 'a'.charCodeAt() + seats; k++) {
                thirdSymbol = String.fromCharCode(k);
                place = `${firstSymbol}${secondSymbol}${thirdSymbol}`
                console.log(place);
                totalSeats++;
            }
        }
        rowsInFirstSector++;
    }
    console.log(totalSeats);
}
weddingSeats(['B',3,2]);