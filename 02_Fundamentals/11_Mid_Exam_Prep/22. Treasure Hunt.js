function treasureHunt(input) {
    const loot = input.shift().split('|');

    const options = {
        'Loot': onLoot,
        'Drop': onDrop,
        'Steal': onSteal,
        'Yohoho!': onEnd
    }

    for (const line of input) {
        const [command, ...items] = line.split(' ');
        options[command](items);
    }

    function onSteal(items) {
        const count = Number(items[0]);
        const index = loot.length - count >= 0 ? loot.length - count : 0;
        const removed = loot.splice(index, count);
        console.log(removed.join(', '));
    }

    function onDrop(items) {
        const index = Number(items[0]);
        if (index > 0 && index < loot.length) {
            loot.push(loot.splice(index, 1)[0]);
        }
    }

    function onEnd() {
        if (loot.length == 0) {
            console.log('Failed treasure hunt.');
        } else {
            const gain = loot.join('').length / loot.length;
            console.log(`Average treasure gain: ${gain.toFixed(2)} pirate credits.`);
        }
    }

    function onLoot(items) {
        items.forEach(item => {
            if (!loot.includes(item)) {
                loot.unshift(item);
            }
        });
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 9",
    "Yohoho!"]);
