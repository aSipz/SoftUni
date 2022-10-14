function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random() * 100);
    let recursiveReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            let guess = Number(number);
            if (guess >= 0 && guess <= 100) {
                if (guess == computerGuess) {
                    console.log('You guess it!');
                    return readline.close();
                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    recursiveReadLine();
                } else if (guess < computerGuess) {
                    console.log('Too Low!');
                    recursiveReadLine();
                } else {
                    console.log('Invalid input! Try again...');
                    recursiveReadLine();
                }
            }
        });
    }
    recursiveReadLine();
}
guessTheNumber();