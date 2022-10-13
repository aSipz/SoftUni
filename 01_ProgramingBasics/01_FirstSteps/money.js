function money(input) {
    let numBitCoin = parseInt(input[0]);
    let numJuan = parseFloat(input[1]);
    let commision = parseFloat(input[2]);
    let price = numBitCoin * 1168 / 1.95 + numJuan * 0.15 * 1.76 / 1.95;
    price = price * (100-commision) / 100;
    console.log(price.toFixed(2));
}
money([20,5678,2.4]);