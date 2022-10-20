function charInRange(char1, char2) {
    let smallerCharCode = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let biggerCharCode = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let charArray = []
    for (let i = smallerCharCode + 1; i < biggerCharCode; i++) {
        charArray.push(String.fromCharCode(i));
    }
    return charArray.join(' ');
}
console.log(charInRange('C','#'));