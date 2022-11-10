function replace(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            string = string.substring(0, i) + string.substring(i+1);
            i--;
        }
    }
    console.log(string);
}
replace('aaaaabbbbbcdddeeeedssaa');