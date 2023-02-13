function game(input) {
    let health = 100;
    let bitcoins = 0;
    const rooms = input.split('|');

    const options = {
        potion: onHeal,
        chest: onChest
    };

    let roomNum = 1;
    let success = true;

    for (const room of rooms) {
        let [command, num] = room.split(' ');
        num = Number(num);
        if (options[command]) {
            options[command](num);
        } else {
            health -= num;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomNum}`);
                success = false;
                break;
            }
            console.log(`You slayed ${command}.`);
        }
        roomNum++;
    }

    if (success) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

    function onHeal(amount) {
        health += amount;
        let healAmount = 0;
        if (health <= 100) {
            healAmount = amount;
        } else {
            healAmount = amount - health + 100;
            health = 100;
        }
        console.log(`You healed for ${healAmount} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

    function onChest(amount) {
        bitcoins += amount;
        console.log(`You found ${amount} bitcoins.`);
    }
}

game('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');