function generatePaymentMethod(currentMethod) {
    const options = [
        { key: 'crypto-wallet', label: 'Crypto Wallet', selected: false },
        { key: 'credit-card', label: 'Credit Card', selected: false },
        { key: 'debit-card', label: 'Debit Card', selected: false },
        { key: 'paypal', label: 'PayPal', selected: false },
    ];

    const result = options.map(x => x.key == currentMethod ? { ...x, selected: true } : x);

    return result;
}

module.exports = {
    generatePaymentMethod,
}