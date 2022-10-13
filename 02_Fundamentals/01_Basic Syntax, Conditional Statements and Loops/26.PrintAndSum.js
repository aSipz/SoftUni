function printAndSum(num1, num2) {
  let numToPrint = num1;
  let sum = 0;
  let printOnLine = "";
  while (numToPrint <= num2) {
    if (numToPrint < num2) {
      printOnLine += numToPrint + " ";
    } else {
      printOnLine += numToPrint;
    }
    sum += numToPrint;
    numToPrint++;
  }
  console.log(printOnLine);
  console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
