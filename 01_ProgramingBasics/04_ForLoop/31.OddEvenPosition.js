function oddEvenPosition(input) {
  let numCount = Number(input[0]);
  let oddSum = 0;
  let oddMin = "No";
  let oddMax = "No";
  let evenSum = 0;
  let evenMin = "No";
  let evenMax = "No";
  let oddNum = 0;
  let evenNum = 0;
  for (let i = 1; i < input.length; i++) {
    if (i % 2 == 0) {
      evenNum = Number(input[i]);
      evenSum += evenNum;
      if (i == 2) {
        evenMin = evenNum;
        evenMax = evenNum;
      } else {
        evenMin = Math.min(evenMin, evenNum);
        evenMax = Math.max(evenMax, evenNum);
      }
    } else {
      oddNum = Number(input[i]);
      oddSum += oddNum;
      if (i == 1) {
        oddMin = oddNum;
        oddMax = oddNum;
      } else {
        oddMin = Math.min(oddMin, oddNum);
        oddMax = Math.max(oddMax, oddNum);
      }
    }
  }
 
  console.log(`OddSum=${Math.round(oddSum * 100) / 100},`);
  console.log(`OddMin=${oddMin},`);
  console.log(`OddMax=${oddMax},`);
  console.log(`EvenSum=${Math.round(evenSum * 100) / 100},`);
  console.log(`EvenMin=${evenMin},`);
  console.log(`EvenMax=${evenMax}`);
}
oddEvenPosition([2,1.5,-2.5]);
