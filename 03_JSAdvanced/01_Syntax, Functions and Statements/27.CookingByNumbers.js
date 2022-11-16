function cooking(...inputArray) {
    let num = Number(inputArray.shift());
    for (const operator of inputArray) {
        switch (operator) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num * 8 / 10;
                break;
        }
        console.log(num);
    }
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');