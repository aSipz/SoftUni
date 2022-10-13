function foodneeded(input) {
    let catfoodprice = 4;
    let dogfoodprice = 2.5;
    let price = dogfoodprice * input[0] + catfoodprice * input[1];
    console.log(`${price} lv.`)
}
foodneeded([5 , 3]);

function foodneeded1(input) {
    let catfoodprice = 4;
    let dogfoodprice = 2.5;
    let dognumber = input[0];
    let catnumber = input[1];
    let price = dogfoodprice * dognumber + catfoodprice * catnumber;
    console.log(`${price} lv.`)
}
foodneeded1([5 , 3]);