function carWash(input) {
    let cleanliness = 0;
    let commandsCount = input.length;
    for (let i = 0; i < commandsCount; i++) {
        switch (input[i]) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness *= 1.2;
                break;
            case 'vacuum cleaner':
                cleanliness *= 1.25;
                break;
            case 'mud':
                cleanliness *= 0.9;
                break;
        }
    }
    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);