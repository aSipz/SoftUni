function minerTask(input) {
    let resourcesList = {};
    for (let i = 0; i < input.length; i += 2) {
        let currentResource = input[i];
        let quantity = Number(input[i+1]);
        if (resourcesList[currentResource]) {
            quantity += resourcesList[currentResource];
        }
        resourcesList[currentResource] = quantity;
    }
    for (const resource in resourcesList) {
        console.log(`${resource} -> ${resourcesList[resource]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );