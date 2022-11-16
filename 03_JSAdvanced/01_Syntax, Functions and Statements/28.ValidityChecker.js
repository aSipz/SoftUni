function checker(x1, y1, x2, y2) {
    let distance1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distance2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distance3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let result1 = distance1 % 1 == 0? 'valid' : 'invalid';
    let result2= distance2 % 1 == 0? 'valid' : 'invalid';
    let result3 = distance3 % 1 == 0? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${result1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3}`);
}
checker(2, 1, 1, 1);