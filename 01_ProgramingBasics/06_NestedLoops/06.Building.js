function building(input) {
    let storiesCount = Number(input[0]);
    let roomsCount = Number(input[1]);
    let type = '';
    let floor = '';
    let room = '';
    for (let i = storiesCount; i >= 1; i--) {
        if (i == storiesCount) {
            type = 'L'
        } else if (i % 2 == 0) {
            type = 'O'
        } else {
            type = 'A'
        }
        floor = i;
        let number = ''
        for ( let j = 0; j < roomsCount; j++) {
            room = j;
            number += type + floor + room + ' ';
        }
        console.log(number);
    }
}
building([1,4]);