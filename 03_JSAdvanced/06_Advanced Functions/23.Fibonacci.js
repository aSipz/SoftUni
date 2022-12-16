function getFibonator() {
    let firstNum = 0;
    let SecondNum = 0;
    return function increment() {
        if (firstNum == 0 && SecondNum == 0) {
            SecondNum = 1;
            return SecondNum;
        }
        let current = firstNum + SecondNum;
        firstNum = SecondNum;
        SecondNum = current;
        return current;
    }
}
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
