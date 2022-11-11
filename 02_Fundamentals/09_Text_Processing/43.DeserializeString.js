function deserialize(input) {
    let charList = {};
    for (const line of input) {
        if (line == 'end') {
            break;
        }
        let char = line.split(':')[0]
        let indexArray = line.split(':')[1].split('/');
        indexArray.forEach(element => {
            charList[element] = char;
        });
    }
    let charArray = Object.entries(charList);
    charArray.sort(([a], [b]) => a - b);
    let string = '';
    for (const [index, char] of charArray) {
        string += char;
    }
    console.log(string);
}
deserialize(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
);