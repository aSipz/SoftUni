function yardgreening(input) {
    let pricepersqm = 7.61;
    let area = input[0];
    let price = pricepersqm * area;
    let discount = 0.18 * price;
    let finalprice = price - discount;
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardgreening([150]);