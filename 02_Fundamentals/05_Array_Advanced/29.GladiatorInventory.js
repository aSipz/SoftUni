function gladiatorInventory(input) {
    let equipmentArray = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ')[0];
        let currentEquipment = '';
        let index = 0;
        let tempElement = '';
        let upgrade = '';
        switch (currentCommand) {
            case 'Buy':
                currentEquipment = input[i].split(' ')[1];
                if (!equipmentArray.includes(currentEquipment)) {
                    equipmentArray.push(currentEquipment);
                }
                break;
            case 'Trash':
                currentEquipment = input[i].split(' ')[1];
                if (equipmentArray.includes(currentEquipment)) {
                    index = equipmentArray.indexOf(currentEquipment);
                    equipmentArray.splice(index, 1);
                }
                break;
            case 'Repair':
                currentEquipment = input[i].split(' ')[1];
                if (equipmentArray.includes(currentEquipment)) {
                    index = equipmentArray.indexOf(currentEquipment);
                    tempElement = equipmentArray[index];
                    equipmentArray.splice(index, 1);
                    equipmentArray.push(tempElement);
                }
                break;
            case 'Upgrade':
                currentEquipment = input[i].split(' ')[1].split('-')[0];
                if (equipmentArray.includes(currentEquipment)) {
                    index = equipmentArray.indexOf(currentEquipment);
                    upgrade = `${input[i].split(' ')[1].split('-')[0]}:${input[i].split(' ')[1].split('-')[1]}`
                    equipmentArray.splice(index + 1, 0, upgrade);
                }
                break;
        }
    }
console.log(equipmentArray.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);