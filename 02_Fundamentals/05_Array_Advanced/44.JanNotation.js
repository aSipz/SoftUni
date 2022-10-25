function notation(instructions) {
    let numArray = [];
    let isFinished = true;
    for (let i = 0; i < instructions.length; i++) {
        if (typeof instructions[i] == 'number') {
            numArray.push(instructions[i]);
        } else {
            if (numArray.length < 2) {
                console.log('Error: not enough operands!');
                isFinished = false;
                break;
            } else {
                let tempA = numArray.pop();
                let tempB = numArray.pop();
                let result;
                switch (instructions[i]) {
                    case '+':
                        result = tempA + tempB;
                        break;
                    case '-':
                        result = tempB - tempA;
                        break;
                    case '*':
                        result = tempA * tempB;
                        break;
                    case '/':
                        result = tempB / tempA;
                        break;
                }
                numArray.push(result);
            }
        }
    }
    if (isFinished) {
        if (numArray.length == 1) {
            console.log(numArray.join());
        } else {
            console.log('Error: too many operands!');
        }
    }
}
notation([3,
    4,
    '+','-',]
   );