function armies(input) {
    let leaderList = {};
    input.forEach(command => {
        if (command.includes('arrives')) {
            let currentLeader = command.split(' arrives')[0];

            leaderList[currentLeader] = {};
        } else if (command.includes('defeated')) {
            let currentLeader = command.split(' defeated')[0];
            if (leaderList[currentLeader]) {
                delete leaderList[currentLeader];
            }
        } else if (command.includes(' + ')) {
            let [currentArmy, currentCount] = command.split(' + ');
            currentCount = Number(currentCount);
            for (const leader in leaderList) {
                if (leaderList[leader][currentArmy]) {
                    currentCount += leaderList[leader][currentArmy];
                    leaderList[leader][currentArmy] = currentCount;
                }
            }
        } else if (command.includes(': ')) {
            let currentLeader = command.split(': ')[0];
            let [army, count] = command.split(': ')[1].split(', ');
            if (leaderList[currentLeader]) {
                leaderList[currentLeader][army] = +count;
            }

        }
    });
    let leaderArray = Object.entries(leaderList);
    for (const currentLeader of leaderArray) {
        let armiesCountArray = Object.values(currentLeader[1]);
        let totalCount = 0;
        armiesCountArray.forEach(element => {
            totalCount += element
        });
        currentLeader.push(totalCount);
    }
    leaderArray.sort((a, b) => b[2] - a[2]);
    for (const leader of leaderArray) {
        console.log(`${leader[0]}: ${leader[2]}`);
        let armiesArray = Object.entries(leader[1]);
        armiesArray.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
        armiesArray.forEach(element => {
            console.log(`>>> ${element[0]} - ${element[1]}`);
        });
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);