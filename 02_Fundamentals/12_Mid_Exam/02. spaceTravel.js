function spaceTravel(input) {
    let route = input.shift().split('||');
    let fuel = Number(input.shift());
    let ammo = Number(input.shift());

    const options = {
        'Travel': onTravel,
        'Enemy': onEnemy,
        'Repair': onRepair,
        'Titan': onTitan
    }

    let failed = false;
    let success = false;

    for (const line of route) {
        let [command, value] = line.split(' ');
        value = Number(value);
        options[command](value);
        if (failed || success) {
            break;
        }
    }

    function onTravel(dist) {
        if (dist > fuel) {
            failed = true;
            console.log('Mission failed.');
        } else {
            fuel -= dist;
            console.log(`The spaceship travelled ${dist} light-years.`);
        }
    }

    function onEnemy(armor) {
        if (ammo >= armor) {
            ammo -= armor;
            console.log(`An enemy with ${armor} armour is defeated.`);
        } else {
            if (armor * 2 > fuel) {
                failed = true;
                console.log('Mission failed.');
            } else {
                fuel -= armor * 2;
                console.log(`An enemy with ${armor} armour is outmaneuvered.`);
            }
        }
    }

    function onRepair(points) {
        fuel += points;
        ammo += points * 2;
        console.log(`Ammunitions added: ${points * 2}.`);
        console.log(`Fuel added: ${points}.`);
    }

    function onTitan() {
        success = true;
        console.log('You have reached Titan, all passengers are safe.');
    }
}

spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]);
