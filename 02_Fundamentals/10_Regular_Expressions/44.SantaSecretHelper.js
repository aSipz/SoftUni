function santaHelper(input) {
    let key = Number(input.shift());
    function decode(message) {
        let decodedMessage = '';
        for (const char of message) {
            let decodedChar = String.fromCharCode(char.charCodeAt() - key);
            decodedMessage += decodedChar;
        }
        return decodedMessage;
    }
    for (const message of input) {
        if (message == 'end') {
            break;
        }
        let decodedMessage = decode(message);
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[GN])!/;
        if (pattern.test(decodedMessage)) {
            let match = decodedMessage.match(pattern);
            if (match.groups.behavior == 'G') {
                console.log(match.groups.name);
            }
        }
    }
}
santaHelper(['3',
'N}eideidmk$\'(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']
);