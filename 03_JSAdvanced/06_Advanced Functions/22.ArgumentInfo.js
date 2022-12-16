function info(...arg) {
    let countObj = arg.reduce((acc, curr) => {
        const type = typeof curr;
        console.log(`${type}: ${curr}`);
        if (acc[type]) {
            acc[type]++;
        } else {
            acc[type] = 1;
        }
        return acc;
    }, {});
    Object.entries(countObj)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || arg.indexOf(keyA) - arg.indexOf(keyB))
    .forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });
}
info('cat', 42, function () { console.log('Hello world!'); }, 54,'dsfd')