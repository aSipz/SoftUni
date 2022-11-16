function solve(inputArray) {
    function aggregate(input, startValue, func) {
        let result = startValue;
        for (let i = 0; i < input.length; i++) {
            result += func(input[i]);
        }
        console.log(result);
    }

    aggregate(inputArray, 0, a => a);
    aggregate(inputArray, 0, a => 1 / a);
    aggregate(inputArray, '', a => a.toString());
    
}
solve([1, 2, 3]);