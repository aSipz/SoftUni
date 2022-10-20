function pointsValidation(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let distToStart = function(num1, num2) {
        let result = 'valid';
        let distance = 0;
        distance = Math.sqrt(num1 ** 2 + num2 ** 2);
        if (distance % 1 != 0) {
            result = 'invalid';
        }
        return `{${num1}, ${num2}} to {0, 0} is ${result}`;
    }

    let distBetween = function(x1, y1, x2, y2) {
        let result = 'valid';
        let distance = 0;
        distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        if (distance % 1 != 0) {
            result = 'invalid';
        }
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`;
    }
    console.log(distToStart(x1, y1));
    console.log(distToStart(x2, y2));
    console.log(distBetween(x1, y1, x2, y2));
}
pointsValidation([2, 1, 1, 1]);