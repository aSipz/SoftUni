function calories(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        obj[input[i]] = Number(input[i + 1]);
    }
    console.log(obj);
}
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);