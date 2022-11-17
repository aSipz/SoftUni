function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log('Bought furniture:');
    for (const line of input) {
        if (line == 'Purchase') {
            break;
        }
        if (pattern.test(line)) {
            let currentFurniture = pattern.exec(line);
            let price = Number(currentFurniture.groups.price) * Number(currentFurniture.groups.quantity);
            console.log(currentFurniture.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);