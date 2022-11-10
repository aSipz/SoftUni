function splitter(string) {
    let splittedStringArray = [];
    for (let i = 1; i < string.length; i++) {
        let unicode = string[i].charCodeAt();
        if (unicode >= 65 && unicode <= 90) {
            let splitted = string.substring(0, i);
            string = string.substring(i);
            splittedStringArray.push(splitted);
            i = 0;
        }
    }
    splittedStringArray.push(string)
    console.log(splittedStringArray.join(', '));
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');