function equalPairs(input) {
  let numOfPairs = parseInt(input[0]);
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let diff = 0;
  let output = "";
  if (numOfPairs == 1) {
    output = "Yes, value=" + (parseInt(input[1]) + parseInt(input[2]));
  } else {
    for (i = 1; i < input.length - 3; i += 2) {
      num1 = parseInt(input[i]);
      num2 = parseInt(input[i + 1]);
      num3 = parseInt(input[i + 2]);
      num4 = parseInt(input[i + 3]);
      if (num1 + num2 === num3 + num4) {
        output = "Yes, value=" + (num1 + num2);
      } else {
        if (Math.abs(num1 + num2 - (num3 + num4)) > diff)
          diff = Math.abs(num1 + num2 - (num3 + num4));
        output = "No, maxdiff=" + diff;
      }
    }
  }
  console.log(output);
}
equalPairs([3, 1, 2, 0, 3, 4, -1]);
