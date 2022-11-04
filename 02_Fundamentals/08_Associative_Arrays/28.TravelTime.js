function travel(input) {
    let countryList = {};
    for (const travel of input) {
        let town = {};
        let [countryName, townName, travelCost] = travel.split(' > ');
        travelCost = Number(travelCost);
        if (countryList[countryName] && countryList[countryName][townName]) {
            let currentCost = countryList[countryName][townName];
            if (currentCost < travelCost) {
                travelCost = currentCost;
            }
        }
        if (countryList[countryName]) {
            town = countryList[countryName];
        }
        town[townName] = travelCost;
        countryList[countryName] = town;
    }
    let countryArray = Object.entries(countryList);
    countryArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    for (const [country, townsObj] of countryArray) {
        let townsArray = Object.entries(townsObj);
        townsArray.sort(([keyA, ValueA], [keyB, valueB]) => ValueA - valueB);
        let townsOnLine = [];
        for (const [town, cost] of townsArray) {
            let currentLine = `${town} -> ${cost}`;
            townsOnLine.push(currentLine);
        }
        console.log(`${country} -> ${townsOnLine.join(' ')}`);
    }
}
travel([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    );