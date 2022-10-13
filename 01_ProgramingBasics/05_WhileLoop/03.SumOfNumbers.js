function sum(input) {
    let num = Number(input[0]);
    let sum = 0;
    let i = 1;
    while (sum < num) {
        sum += Number(input[i]);
        i++;
    }
    console.log(sum);
}
sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);