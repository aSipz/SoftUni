function houseParty(input) {
    let guestArray = [];
    for (let i = 0; i < input.length; i++) {
        let currentName = input[i].split(' ')[0];
        if (guestArray.includes(currentName)) {
            if (input[i].split(' ').length > 3) {
                let index = guestArray.indexOf(currentName);
                guestArray.splice(index, 1);
            } else {
                console.log(`${currentName} is already in the list!`);
            }
        } else {
            if (input[i].split(' ').length > 3) {
                console.log(`${currentName} is not in the list!`);
            } else {
                guestArray.push(currentName);
            }
        }
    }
    console.log(guestArray.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);