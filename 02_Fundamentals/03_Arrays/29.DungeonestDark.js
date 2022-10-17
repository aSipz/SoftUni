function dungeons(inputString) {
    let health = 100;
    let coins = 0;
    let healingNum = 0;
    let inputArray = inputString[0].split('|');
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        let roomArray = inputArray[i].split(' ');
        if (roomArray[0] == 'portion') {
            if (health += Number(roomArray[1]) <= 100) {
                health += Number(roomArray[1]);
                healingNum = Number(roomArray[1]);
            } else {
                health = 100;
                healingNum = 100 - health - Number(roomArray[1]);
            }
            console.log(`You healed for ${healingNum} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (roomArray[0] == 'chest') {
            coins += Number(roomArray[1]);
            console.log(`You found ${Number(roomArray[1])} coins.`);
        } else {
            if (health > Number(roomArray[1])) {
                log
            }
        }
    }
}
dungeons(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);