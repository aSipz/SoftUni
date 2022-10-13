function maxNum(input) {
  let i = 0;
  let max = Number.NEGATIVE_INFINITY;
  while (true) {
    if (input[i] == "Stop") {
      console.log(max);
      break;
    }
    if (Number(input[i]) > max) {
      max = Number(input[i]);
    }
    i++;
  }
}
maxNum(["-10", "20", "-30", "Stop"]);
