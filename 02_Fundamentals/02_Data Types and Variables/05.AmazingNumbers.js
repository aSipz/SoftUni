function amazingNum(num) {
  let numString = num.toString();
  let sumDigits = 0;
  let output = num + " Amazing? ";
  for (let i = 0; i < numString.length; i++) {
    sumDigits += Number(numString[i]);
  }
  (sumDigits.toString()).includes(9)?  output += "True" : output += "False";
  console.log(output);
}
amazingNum(1233);
