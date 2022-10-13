function login(input) {
  let userName = input[0];
  let pass = "";
  let passToCheck = "";
  for (let i = userName.length - 1; i >= 0; i--) {
    pass += userName[i];
  }
  for (let i = 1; i <= 4; i++) {
    passToCheck = input[i];
    if (i <= 4 && passToCheck == pass) {
      console.log(`User ${userName} logged in.`);
      break;
    } else if (i < 4 && passToCheck != pass) {
      console.log("Incorrect password. Try again.");
    } else if (i == 4 && passToCheck != pass) {
      console.log(`User ${userName} blocked!`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
