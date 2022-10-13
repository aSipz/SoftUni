function histogram(input) {
    let numCountTotal = parseInt(input[0]);
    let numCount200 = 0;
    let numCount400 = 0;
    let numCount600 = 0;
    let numCount800 = 0;
    let numCount1000 = 0;
    for (i = 1; i <= numCountTotal; i++) {
        let num = parseInt(input[i])
        if (num < 200) {
            numCount200++;
        } else if (num < 400) {
            numCount400++;
        } else if (num < 600) {
            numCount600++;
        } else if (num < 800) {
            numCount800++;
        } else {
            numCount1000++;
        }
    }
    console.log(`${(numCount200 / numCountTotal * 100).toFixed(2)}%`);
    console.log(`${(numCount400 / numCountTotal * 100).toFixed(2)}%`);
    console.log(`${(numCount600 / numCountTotal * 100).toFixed(2)}%`);
    console.log(`${(numCount800 / numCountTotal * 100).toFixed(2)}%`);
    console.log(`${(numCount1000 / numCountTotal * 100).toFixed(2)}%`);

}
histogram([9,"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"]);
