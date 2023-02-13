function computer(input) {
    const customer = input.pop();
    const prices = input.map(Number);
    let discount = 1;
    if (customer == 'special') {
        discount = 0.9;
    }
    let totalPrice = 0;

    prices.forEach(price => {
        if (price < 0) {
            console.log('Invalid price!');
        } else {
            totalPrice += price;
        }
    });

    if (totalPrice) {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${(totalPrice * 0.2).toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${(totalPrice * 1.2 * discount).toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}

computer([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]);