function reportSystem(input) {
    let sumToGather = Number(input[0]);
    let payInCash = 0;
    let payWithCard = 0;
    let transaction = 0;
    let i = 1;
    let sum = 0;
    let isEnough = false;
    let sumInCash = 0;
    let sumWithCard = 0;
    while (input[i] != 'End') {
        transaction = Number(input[i]);
        if (i % 2 == 0) {
            if (transaction < 10) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                payWithCard++;
                sumWithCard += transaction;
                sum += transaction;
            }
        } else {
            if (transaction > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                payInCash++;
                sumInCash += transaction;
                sum += transaction;
            }
        }
        if (sum >= sumToGather) {
            isEnough = true;
            break;
        }
        i++;
    }
    if (isEnough) {
        console.log(`Average CS: ${(sumInCash / payInCash).toFixed(2)}`);
        console.log(`Average CC: ${(sumWithCard / payWithCard).toFixed(2)}`);
    } else {
        console.log('Failed to collect required money for charity.');
    }
}
reportSystem([500,
    120,
    8,
    63,
    256,
    78,
    317,
    ]);