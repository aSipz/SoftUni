function value(input) {
    let string = input.shift();
    let letterType = input.shift();
    let totalSum = 0;
    for (const char of string) {
        let charCode = char.charCodeAt();
        if (letterType == 'UPPERCASE' && (charCode >= 65 && charCode <= 90)) {
                totalSum += charCode;
        } else if (letterType == 'LOWERCASE' && (charCode >= 97 && charCode <= 122)) {
                totalSum += charCode;
        }
    }
    console.log(`The total sum is: ${totalSum}`);
}
value(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
);