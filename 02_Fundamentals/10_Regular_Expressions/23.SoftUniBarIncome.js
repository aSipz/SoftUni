function income(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
    let totalIncome = 0;
    for (const line of input) {
        let match = [];
        if (line == 'end of shift') {
            break;
        }
        if (pattern.test(line)) {
            match = line.match(pattern);
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
income(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
console.log('----------------');
income(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);