function minNum(input) {
  let min = Number.POSITIVE_INFINITY;
  let i = 0;
  while (input[i] != "Stop") {
    if (Number(input[i]) < min) {
      min = Number(input[i]);
    }
    i++;
  }
  console.log(min);
}
minNum(["100", "99", "80", "70", "Stop"]);
