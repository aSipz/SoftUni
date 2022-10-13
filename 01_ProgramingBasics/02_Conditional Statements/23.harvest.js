function harvest(input) {
    let areaVineyard = parseInt(input[0]);
    let grapeFrom1 = Number(input[1]);
    let wineNeeded = parseInt(input[2]);
    let numWorkers = parseInt(input[3]);
    let totalGrape = areaVineyard * grapeFrom1;
    let grapeForWine = 0.4 * totalGrape;
    let wine = grapeForWine / 2.5;
    let diff = wine - wineNeeded;
    let winePerPerson = Math.ceil (Math.abs (diff / numWorkers));
    if (wine < wineNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(diff))} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${winePerPerson} liters per person.`);
    }
}
harvest([1020,1.5,425,4]);