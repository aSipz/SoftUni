function gameOfIntervals(input) {
  let turns = parseInt(input[0]);
  let numPerTurn = 0;
  let points = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let p6 = 0;
  for (i = 1; i < input.length; i++) {
    numPerTurn = parseInt(input[i]);
    if (numPerTurn < 0) {
      points /= 2;
      p6++;
    } else if (numPerTurn < 10) {
      points += numPerTurn * 0.2;
      p1++;
    } else if (numPerTurn < 20) {
      points += numPerTurn * 0.3;
      p2++;
    } else if (numPerTurn < 30) {
      points += numPerTurn * 0.4;
      p3++;
    } else if (numPerTurn < 40) {
      points += 50;
      p4++;
    } else if (numPerTurn <= 50) {
      points += 100;
      p5++;
    } else {
      points /= 2;
      p6++;
    }
  }
  console.log(points.toFixed(2));
  console.log(`From 0 to 9: ${((p1 / turns) * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${((p2 / turns) * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${((p3 / turns) * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${((p4 / turns) * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${((p5 / turns) * 100).toFixed(2)}%`);
  console.log(`Invalid numbers: ${((p6 / turns) * 100).toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
