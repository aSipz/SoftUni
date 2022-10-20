function crystalProcess(input) {
    let targetThickness = Number(input[0]);
    let chunkSize;

    let operations = function (size) {
        let operationName = '';
        let operationCount = 0;
        if (size >= targetThickness) {
            console.log(`Processing chunk ${size} microns`);
            if (size != targetThickness) {
                while (true) {
                    if (size / 4 >= targetThickness) {
                        operationName = 'Cut';
                        operationCount++;
                        size /= 4;
                    } else if (size * 0.8 >= targetThickness) {
                        if (operationName != 'Lap' && operationName != '') {
                            console.log(`${operationName} x${operationCount}`);
                            console.log('Transporting and washing');
                            size = parseInt(size);
                            operationCount = 1;
                        } else {
                            operationCount++;
                        }
                        operationName = 'Lap';
                        size *= 0.8;
                    } else if (size - 20 >= targetThickness) {
                        if (operationName != 'Grind' && operationName != '') {
                            console.log(`${operationName} x${operationCount}`);
                            console.log('Transporting and washing');
                            size = parseInt(size);
                            operationCount = 1;
                        } else {
                            operationCount++;
                        }
                        operationName = 'Grind';
                        size -= 20;
                    } else if (size - 1 >= targetThickness) {
                        if (operationName != 'Etch' && operationName != '') {
                            console.log(`${operationName} x${operationCount}`);
                            console.log('Transporting and washing');
                            size = parseInt(size);
                            operationCount = 1;
                        } else {
                            operationCount++;
                        }
                        operationName = 'Etch';
                        size -= 2;
                    } else if (size - targetThickness >= 0 && size - targetThickness <= 1) {
                        console.log(`${operationName} x${operationCount}`);
                        console.log('Transporting and washing');
                        size = parseInt(size);
                        break;
                    } else {
                        console.log(`${operationName} x${operationCount}`);
                        console.log('Transporting and washing');
                        size = parseInt(size);
                        operationName = 'X-ray'
                        operationCount = 1;
                        console.log(`${operationName} x${operationCount}`);
                        size++;
                        break;
                    }
                }
            }
            console.log(`Finished crystal ${targetThickness} microns`);
        } else if (size = targetThickness - 1) {
            console.log(`Processing chunk ${size} microns`);
            operationName = 'X-ray'
            operationCount = 1;
            console.log(`${operationName} x${operationCount}`);
            console.log(`Finished crystal ${targetThickness} microns`);
            size++;
        }
    }

    for (let i = 1; i < input.length; i++) {
        chunkSize = Number(input[i]);
        operations(chunkSize);
    }
}
crystalProcess([1000, 999]);