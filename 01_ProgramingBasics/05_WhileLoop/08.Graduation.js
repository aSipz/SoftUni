function graduation(input) {
  let studentName = input[0];
  let i = 1;
  let sum = 0;
  let grade = i;
  let fail = 0;
  while (grade <= 12) {
    if (Number(input[i]) <= 2) {
      console.log(`${studentName} has been excluded at ${grade} grade`);
      break;
    }
    if (Number(input[i]) < 4) {
      fail++;
      if (fail > 1) {
        console.log(`${studentName} has been excluded at ${grade} grade`);
        break;
      }
      i++;
      continue;
    }
    sum += Number(input[i]);
    if (grade == 12) {
      console.log(`${studentName} graduated. Average grade: ${(sum / grade).toFixed(2)}`);
    }
    grade ++;
    i++;
  }
}
graduation(["Gosho", "5", '3.8', '3',"5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);
