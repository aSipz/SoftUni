function tseamAcc(input) {
    let arrayWithGames = input[0].split(' ');
    let index = 1;
    let finalArray = [];
    while (input[index] != 'Play!' || index > input.length - 1) {
        let currentCommand = input[index].split(' ');
            switch (currentCommand[0]) {
                case 'Install':
                    if (!arrayWithGames.includes(currentCommand[1])) {
                        arrayWithGames.push(currentCommand[1]);
                    }
                break;
                case 'Uninstall':
                    if (arrayWithGames.includes(currentCommand[1])) {
                        for (let i = 0; i < arrayWithGames.length; i++) {
                            if (arrayWithGames[i] == currentCommand[1]) {
                                arrayWithGames[i] = ' ';
                                break;
                            }
                        }
                    }
                break;
                case 'Update':
                    if (arrayWithGames.includes(currentCommand[1])) {
                        arrayWithGames.push(currentCommand[1]);
                        for (let i = 0; i < arrayWithGames.length; i++) {
                            if (arrayWithGames[i] == currentCommand[1]) {
                                arrayWithGames[i] = ' ';
                                break;
                            }
                        }
                    }
                break;
                case 'Expansion':
                    let expansionArr = currentCommand[1].split('-');
                    if (arrayWithGames.includes(expansionArr[0])) {
                        for (let i = 0; i < arrayWithGames.length; i++) {
                            if (arrayWithGames[i] == expansionArr[0]) {
                                let tempArr = [];
                                for (let j = 0; j <=i; j++) {
                                    tempArr.push(arrayWithGames[j]);
                                }
                                tempArr.push(arrayWithGames[i] + `:${expansionArr[1]}`);
                                for (let j = i + 1; j < arrayWithGames.length; j++) {
                                    tempArr.push(arrayWithGames[j]);
                                }
                                arrayWithGames = [];
                                for (let j = 0; j < tempArr.length; j++) {
                                    arrayWithGames.push(tempArr[j]);
                                }
                                break;
                            }
                        }
                    }
                break;
            }
        index++;
    }
    for (let i = 0; i < arrayWithGames.length; i++) {
        if (arrayWithGames[i] != ' ') {
            finalArray.push(arrayWithGames[i]);
        }
    }
    console.log(finalArray.join(' '));
}
tseamAcc(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);