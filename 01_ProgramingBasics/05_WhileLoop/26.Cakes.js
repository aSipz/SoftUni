function cakes(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakeSize = cakeLength * cakeWidth;
    let i = 2;
    let piecesToTake = Number(input[i]);
    let totalPiecesTaken = 0;
    let isDone = false;
    while (true) {
        piecesToTake = input[i];
        if (piecesToTake == 'STOP') {
            break;
        } else {
            piecesToTake = Number(input[i]);
        }
        totalPiecesTaken += piecesToTake;
        if (cakeSize <= totalPiecesTaken) {
            isDone = true;
            break;
        }
        i++;
    }
    if (isDone) {
        console.log(`No more cake left! You need ${totalPiecesTaken - cakeSize} pieces more.`);
    } else {
        console.log(`${cakeSize - totalPiecesTaken} pieces are left.`);
    }
}
cakes(["10",
"2",
"2",
"4",
"6",
"STOP"]);