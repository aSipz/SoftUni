function battle(input) {
    let pirateShip = input
        .shift()
        .split('>')
        .map(Number);
    let warship = input
        .shift()
        .split('>')
        .map(Number);
    let healthCapacity = Number(input.shift());

    let victory = false;
    let defeat = false;

    for (const line of input) {
        let [command, startIndex, endIndex, damage] = line.split(' ');
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        damage = Number(damage);
        if (command == 'Retire') {
            break;
        }
        if (command == 'Defend') {
            onDefend(startIndex, endIndex, damage);
        }
        if (command == 'Fire') {
            onFire(startIndex, endIndex);
        }
        if (command == 'Repair') {
            onRepair(startIndex, endIndex);
        }
        if (command == 'Status') {
            onStatus();
        }
        if (victory) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (defeat) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }
    }

    if (!victory && !defeat) {
        console.log(`Pirate ship status: ${pirateShip.reduce((acc, cur) => acc + cur)}`);
        console.log(`Warship status: ${warship.reduce((acc, cur) => acc + cur)}`);
    }

    function onStatus() {
        let count = 0;
        pirateShip.forEach(section => {
            if (section / healthCapacity < 0.2) {
                count++;
            }
        });
        console.log(`${count} sections need repair.`);
    }

    function onRepair(index, health) {
        if (index >= pirateShip.length || index < 0) {
            return;
        }
        pirateShip[index] += health;
        if (pirateShip[index] > healthCapacity) {
            pirateShip[index] = healthCapacity;
        }
    }

    function onFire(index, damage) {
        if (index >= warship.length || index < 0) {
            return;
        }
        warship[index] -= damage;
        if (warship[index] <= 0) {
            victory = true;
        }
    }

    function onDefend(startIndex, endIndex, damage) {
        if (startIndex < 0 || startIndex >= pirateShip.length
            || endIndex < 0 || endIndex >= pirateShip.length
            || endIndex < startIndex) {
            return;
        }
        for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damage;
            if (pirateShip[i] <= 0) {
                defeat = true;
                break;
            }
        }
    }
}

battle(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 11",
"Repair 1 33",
"Status",
"Retire"]);
