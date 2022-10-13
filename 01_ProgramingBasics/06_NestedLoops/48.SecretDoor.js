function secretDoor(input) {
  let maxFirstDigit = Number(input[0]);
  let maxSecondDigit = Number(input[1]);
  let maxThirdDigit = Number(input[2]);
  let num = "";
  for (let i = 1; i <= maxFirstDigit; i++) {
    if (i % 2 == 0) {
      for (let j = 2; j <= maxSecondDigit; j++) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
          for (let k = 1; k <= maxThirdDigit; k++) {
            if (k % 2 == 0) {
              num = i + " " + j + " " + k;
              console.log(num);
            }
          }
        }
      }
    }
  }
}
secretDoor([3, 5, 5]);
