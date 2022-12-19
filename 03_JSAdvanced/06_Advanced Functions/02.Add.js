function solve(num) {
    return function(num2) {
        return num + num2;
    }
}
let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));