function vegMarket(input) {
    let vegPrice = Number (input[0]);
    let fruitPrice = Number (input[1]);
    let vegWeight = Number (input[2]);
    let fruitWeight = Number (input[3]);
    let income = (vegPrice*vegWeight + fruitPrice*fruitWeight)/1.94;
    console.log(income.toFixed(2));
}
vegMarket([0.194, 19.4, 10 ,10]);