function cooking(input) {
    const budget = Number(input.shift());
    const students = Number(input.shift());
    const flourPrice = Number(input.shift());
    const eggPrice = Number(input.shift());
    const apronPrice = Number(input.shift());

    const totalAprons = Math.ceil(students * 1.2);
    const totalEggs = students * 10;
    const totalFlour = students - Math.floor(students / 5);

    const moneyNeeded = totalAprons * apronPrice + totalEggs * eggPrice + totalFlour * flourPrice;

    let result = '';
    if (moneyNeeded <= budget) {
        result = `Items purchased for ${moneyNeeded.toFixed(2)}$. `
    } else {
        result = `${(moneyNeeded - budget).toFixed(2)}$ more needed.`;
    }

    console.log(result);
}

cooking([946, 20, 12.05, 0.42, 27.89])