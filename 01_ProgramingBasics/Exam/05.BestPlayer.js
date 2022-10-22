function bestPlayer(input) {
    let playerName = '';
    let goalCount = 0;
    let arrayLength = input.length;
    let output = ''
    let mostGoals = 0;
    let bestPlayer = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (input[i] == 'END') {
            break;
        }
        playerName = input[i];
        i++;
        goalCount = Number(input[i]);
        if (goalCount > mostGoals) {
            mostGoals = goalCount;
            bestPlayer = input[i - 1];
        }
        if (goalCount >= 3) {
            output = `He has scored ${mostGoals} goals and made a hat-trick !!!`;
        } else {
            output = `He has scored ${mostGoals} goals.`
        }
        if (goalCount >= 10) {
            break;
        }
    }
    console.log(`${bestPlayer} is the best player!`);
    console.log(output);
}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"]);