function party(input) {
    let vipList = [];
    let regularList = [];
    let index = input.indexOf('PARTY');
    let guestList = input.slice(0, index);
    let guestComming = input.slice(index + 1);
    for (const guest of guestList) {
        if (Number(guest[0]) >= 0 && Number(guest[0]) <= 9) {
            vipList.push(guest);
        } else {
            regularList.push(guest);
        }
    }

    for (const guest of guestComming) {
        if (Number(guest[0]) >= 0 && Number(guest[0]) <= 9) {
            index = vipList.indexOf(guest);
            vipList.splice(index, 1);
        } else {
            index = regularList.indexOf(guest);
            regularList.splice(index, 1);
        }
    }

    console.log(vipList.length + regularList.length);
    for (const guest of vipList) {
        console.log(guest);
    }
    for (const guest of regularList) {
        console.log(guest);
    }
}
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'm8rfQBvl',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);