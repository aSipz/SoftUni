function rich(input) {
    let deposit = Number (input[0]);
    let time = Number (input[1]);
    let interest = Number (input[2]);
    let result = deposit + time * ((deposit * interest/100)/12);
    console.log(result);
}
rich([200, 3 , 5.7]);