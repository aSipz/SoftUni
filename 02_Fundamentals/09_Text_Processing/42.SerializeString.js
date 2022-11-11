function serialize([string]) {
    let charList = {};
    let index = 0;
    for (const char of string) {
        let charArray = [];
        if (charList[char]) {
            charArray = charList[char];
        }
        charArray.push(index);
        charList[char] = charArray
        index++;
    }
    for (const key in charList) {
        console.log(`${key}:${charList[key].join('/')}`);
    }
}
serialize(["avjavamsdmcalsdm"]);