function solution(string) {
    string ? string : string = '';
    return {
        append: str => string += str,
        removeStart: n => string = string.slice(n),
        removeEnd: n => string = string.slice(0, -n),
        print() { console.log(string) }
    }
}
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();