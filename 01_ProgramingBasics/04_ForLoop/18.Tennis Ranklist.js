function tennisRanklist(input) {
    let numTournaments = parseInt(input[0]);
    let startingPoints = parseInt(input[1]);
    let tournamentStage = "";
    let finalPoints = startingPoints;
    let numWins = 0
    for (i = 2; i < numTournaments + 2; i++) {
        tournamentStage = input[i];
        switch (tournamentStage) {
            case "W":
                finalPoints += 2000;
                numWins++;
                break;
            case "F":
                finalPoints += 1200;
                break;
            case "SF":
                finalPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor((finalPoints - startingPoints) / numTournaments)}`);
    console.log(`${((numWins / numTournaments * 100)).toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);