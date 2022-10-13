function traveling(input) {
    let destination = input[0];
    let budget = Number(input[1]);
    let i = 2;
    let savedMoney = 0;
    while (input[i] != 'End') {
        savedMoney += Number(input[i]);
        if (savedMoney >= budget) {
            console.log(`Going to ${destination}!`);
            savedMoney = 0;
            i++;
            if (input[i] == 'End') {
                break;
            }
            destination = input[i];
            i++;
            budget = Number(input[i])
        }
        i++;
        if (i > input.length) {
            break;
        }
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300"]);