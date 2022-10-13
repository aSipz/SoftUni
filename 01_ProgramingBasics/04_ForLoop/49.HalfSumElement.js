function halfSumElement(input) {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < input.length; i++) {
    sum += Number(input[i]);
  }
  for (let i = 1; i < input.length; i++) {
    if (max < Number(input[i])) {
      max = Number(input[i]);
    }
    if (sum / 2 == Number(input[i])) {
      console.log(`Yes\nSum = ${sum / 2}`);
      break;
    }
  }
  let diff = Math.abs(sum - 2 * max);
  if (diff != 0) {
    console.log(`No\nDiff = ${diff}`);
  }
}
halfSumElement([4,6,1,2,3]);

//if ((sum / 2) == Number(input[i])) {
//    console.log(`Yes\nSum = ${sum / 2}`);
//     break;
//} else {
//    if (max < Number(input[i])) {
//        max = Number(input[i]);
//    }
//    let diff = Math.abs(sum - 2 * max);
//    console.log(`No\nDiff = ${diff}`);
//}
