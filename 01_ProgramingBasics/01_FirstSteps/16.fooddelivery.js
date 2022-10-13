function fooddelivery(input) {
    let chicken = 10.35;
    let fish = 12.4;
    let veggy = 8.15;
    let chickennumber = Number (input[0]);
    let fishnumber = Number (input[1]);
    let veggynumber = Number (input[2]);
    let result = (chicken*chickennumber + fish*fishnumber + veggy*veggynumber)*1.2 + 2.5;
    console.log(result);
}
fooddelivery([2,4,3]);