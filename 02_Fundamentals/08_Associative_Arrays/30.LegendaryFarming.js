function farming(input) {
    let commandsArray = input.split(' ');
    let materialList = { shards: 0, fragments: 0, motes: 0 };
    let junkList = {};
    let legendaryItem = '';
    for (let i = 0; i < commandsArray.length; i += 2) {
        let currentQuantity = Number(commandsArray[i]);
        let currentMaterial = commandsArray[i + 1].toLowerCase();

        if (currentMaterial == 'shards' || currentMaterial == 'fragments' || currentMaterial == 'motes') {
            currentQuantity += materialList[currentMaterial];
            materialList[currentMaterial] = currentQuantity;
            if (currentQuantity >= 250) {
                switch (currentMaterial) {
                    case 'shards':
                        legendaryItem = 'Shadowmourne';
                        break;
                    case 'fragments':
                        legendaryItem = 'Valanyr';
                        break;
                    case 'motes':
                        legendaryItem = 'Dragonwrath';
                        break;
                }
                materialList[currentMaterial] -= 250;
                console.log(`${legendaryItem} obtained!`);

                let materialArray = Object.entries(materialList);
                materialArray.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB));
                for (const [material, quantity] of materialArray) {
                    console.log(`${material}: ${quantity}`);
                }

                let junkArray = Object.entries(junkList);
                junkArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
                for (const [material, quantity] of junkArray) {
                    console.log(`${material}: ${quantity}`);
                }
                break;
            }
        } else {
            if (junkList[currentMaterial]) {
                currentQuantity += junkList[currentMaterial];
            }
            junkList[currentMaterial] = currentQuantity;
        }
    }
}
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');