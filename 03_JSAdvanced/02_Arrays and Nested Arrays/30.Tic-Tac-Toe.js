function chess(input) {
    let board =
        [['false', 'false', 'false'],
        ['false', 'false', 'false'],
        ['false', 'false', 'false']];
    let currentPlayer = true;
    let freeSpaceCounter = 9;
    let isFinished = false;
    let winner = '';
    for (const command of input) {
        let [x, y] = command.split(' ').map(Number);
        let currentSymbol = currentPlayer ? 'X' : 'O';
        if (board[x][y] == 'false') {
            board[x][y] = currentSymbol;
            currentPlayer = !currentPlayer;
            freeSpaceCounter--;
        } else {
            console.log('This place is already taken. Please choose another!');
        }
        for (const row of board) {
            let rowResult = row.reduce((acc, current) => acc + current);
            if (rowResult == 'XXX' || rowResult == 'OOO') {
                winner = row[0];
                isFinished = true;
                console.log(`Player ${winner} wins!`);
                break;
            }
        }
        if (isFinished) {
            break;
        }
        for (let i = 0; i < 3; i++) {
            let columnResult = '';
            for (let j = 0; j < 3; j++) {
                columnResult += board[j][i];
            }
            if (columnResult == 'XXX' || columnResult == 'OOO') {
                winner = columnResult[0];
                isFinished = true;
                console.log(`Player ${winner} wins!`);
                break;
            }
        }
        if (isFinished) {
            break;
        }
        let main = '';
        let secondary = '';
        for (let i = 0; i < 3; i++) {
            main += board[i][i];
            secondary += board[i][2 - i];
        }
        if (main == 'XXX' || main == 'OOO') {
            winner = main[0];
            console.log(`Player ${winner} wins!`);
            break;
        } else if (secondary == 'XXX' || secondary == 'OOO') {
            winner = secondary[0];
            console.log(`Player ${winner} wins!`);
            break;
        }

        if (freeSpaceCounter == 0) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }
    for (const row of board) {
        console.log(row.join('\t'));
    }
}
chess(['2 2',
'0 0',
'1 1',]
);