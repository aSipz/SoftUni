function pass(input) {
    let userName = input[0];
    let password = input[1];
    let index = 2;
    while (true) {
        if (password == input[index]) {
            console.log(`Welcome ${userName}!`);
            break;
        }
        index++;
    }
}
pass(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);