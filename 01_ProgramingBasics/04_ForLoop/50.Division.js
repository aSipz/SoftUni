function division(input) {
  let n = parseInt(input[0]);
  let num = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 1; i < input.length; i++) {
    num = parseInt(input[i]);
    if (num % 2 == 0) {
      p1++;
    }
    if (num % 3 == 0) {
      p2++;
    }
    if (num % 4 == 0) {
      p3++;
    }
  }
  console.log(`${((p1 / n) * 100).toFixed(2)}%`);
  console.log(`${((p2 / n) * 100).toFixed(2)}%`);
  console.log(`${((p3 / n) * 100).toFixed(2)}%`);
}
division([3,3,6,9]);
