function solve(areaFunc, volFunc, input) {
    let result = JSON.parse(input).map(calc);
    function calc(obj) {
        return {
            area: areaFunc.call(obj),
            volume: volFunc.call(obj)
        }
    }
    return result;
}