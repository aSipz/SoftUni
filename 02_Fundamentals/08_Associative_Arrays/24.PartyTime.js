function partyTime(input) {
    let guestList = [];
    let guestComming = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'PARTY') {
            guestComming = input.slice(i + 1);
            break;
        }
        guestList.push(input[i]);
    }
    guestComming.forEach(guest => {
        if (guestList.includes(guest)) {
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    });
    let vipGuest = [];
    guestList.forEach(guest => {
        let vipCheck = guest.split('');
        if (vipCheck[0] == ['0','1','2','3','4','5','6','7','8','9']) {
            vipGuest.push(guest);
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    });
    console.log(guestList.length + vipGuest.length);
    vipGuest.forEach(guest => {
        console.log(guest);
    });
    guestList.forEach(guest => {
        console.log(guest);
    });
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'5ghddfgd'
]
);