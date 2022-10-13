function maxNumber(input) {
  let num = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (i = 1; i < input.length; i++) {
    num = Number(input[i]);
    if (num > max) {
      max = num;
    }
  }
  console.log("max = " + max);
}
maxNumber([4,45,-20,7,99]);
