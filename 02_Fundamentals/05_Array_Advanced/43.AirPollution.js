function airPolution(airMap, forcesArray) {

    let map = function (map, forces) {
        let airMapArray = [];
        for (let i = 0; i < airMap.length; i++) {
            airMapArray.push(airMap[i].split(' ').map(Number));
        }
        for (let i = 0; i < forcesArray.length; i++) {
            let currentForce = forcesArray[i].split(' ')[0];
            switch (currentForce) {
                case 'breeze':
                    let row = Number(forcesArray[i].split(' ')[1]);
                    for (let j = 0; j < airMapArray[row].length; j++) {
                        airMapArray[row][j] = Math.max(airMapArray[row][j] - 15, 0);
                    }
                    break;
                case 'gale':
                    let column = Number(forcesArray[i].split(' ')[1]);
                    for (let j = 0; j < airMapArray.length; j++) {
                        airMapArray[j][column] = Math.max(airMapArray[j][column] - 20, 0);
                    }
                    break;
                case 'smog':
                    let value = Number(forcesArray[i].split(' ')[1]);
                    for (let j = 0; j < airMapArray.length; j++) {
                        for (let k = 0; k < airMapArray[j].length; k++) {
                            airMapArray[j][k] += value;
                        }
                    }
                    break;
            }
        }
        return airMapArray;
    }

    let polutionCalculation = function (mapArray) {
        let isPoluted = false;
        let polutionArray = [];
        let output = '';
        for (let i = 0; i < mapArray.length; i++) {
            for (let j = 0; j < mapArray[i].length; j++) {
                if (mapArray[i][j] >= 50) {
                    isPoluted = true;
                    polutionArray.push(`[${i}-${j}]`)
                }
            }
        }
        if (isPoluted) {
            output = `Polluted areas: ${polutionArray.join(', ')}`;
        } else {
            output = 'No polluted areas';
        }
        return output;
    }

    let result = polutionCalculation(map(airMap, forcesArray));
    console.log(result);
}
airPolution(['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);