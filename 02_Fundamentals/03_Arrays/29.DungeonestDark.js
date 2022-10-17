function dungeons(inputString) {
    let health = 100;
    let coins = 0;
    let healingNum = 0;
    let inputArray = inputString[0].split('|');
    let roomNum = 0;
    let isSuccessful = true;
    for (let i = 0; i < inputArray.length; i++) {
        let roomArray = inputArray[i].split(' ');
        if (roomArray[0] == 'potion') {
            if ((health + Number(roomArray[1])) <= 100) {
                health += Number(roomArray[1]);
                healingNum = Number(roomArray[1]);
            } else {
                healingNum = 100 - health;
                health = 100;
            }
            roomNum++;
            console.log(`You healed for ${healingNum} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (roomArray[0] == 'chest') {
            coins += Number(roomArray[1]);
            roomNum++;
            console.log(`You found ${Number(roomArray[1])} coins.`);
        } else {
            roomNum++;
            if (health > Number(roomArray[1])) {
                console.log(`You slayed ${roomArray[0]}.`);
                health -= Number(roomArray[1]);
            } else {
                console.log(`You died! Killed by ${roomArray[0]}.`);
                console.log(`Best room: ${roomNum}`);
                isSuccessful = false;
                break;
            }
        }
    }
    if (isSuccessful) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);