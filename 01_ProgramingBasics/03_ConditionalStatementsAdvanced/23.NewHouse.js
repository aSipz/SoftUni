function newHouse(input) {
    let flowerType = input[0];
    let count = parseInt(input[1]);
    let budget = parseInt(input[2]);
    let price = 0
    switch (flowerType){
        case "Roses":
            if (count <= 80) {
                price = count * 5;
            } else {
                price = count * 5 * 0.9;
            }
            break;
        case "Dahlias":
            if (count <= 90) {
                price = count * 3.8;
            } else {
                price = count * 3.8 * 0.85;
            }
            break;
        case "Tulips":
            if (count <= 80) {
                price = count * 2.8;
            } else {
                price = count * 2.8 * 0.85;
            }
            break;
        case "Narcissus":
            if (count < 120) {
                price = count * 3 * 1.15;
            } else {
                price = count * 3;
            }
            break;
        case "Gladiolus":
            if (count < 80) {
                price = count * 2.5 * 1.2;
            } else {
                price = count * 2.5;
            }
            break;
    }
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", 55,250]);