function examPrep(input) {
    let numWeakMarksToCheck = Number(input[0]);
    let numWeakMarks = 0;
    let i = 1;
    let isSuccessfull = false;
    let sum = 0;
    let problemCount = 0;
    while (true) {
        problemName = input[i];
        problemMark = Number(input[i + 1]);
        if (problemName == 'Enough') {
            isSuccessfull = true;
            problemName = input[i-2]
            break;
        }
        if (problemMark <= 4) {
            numWeakMarks++;
            if (numWeakMarks >= numWeakMarksToCheck) {
                break;
            }
        }
        sum += problemMark;
        i += 2;
    }
    i != 1 ? problemCount = (i -1) / 2 : problemCount = 1;
    if (isSuccessfull) {
        console.log(`Average score: ${(sum / problemCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${problemName}`);
    } else {
        console.log(`You need a break, ${numWeakMarks} poor grades.`);
    }
}
examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);