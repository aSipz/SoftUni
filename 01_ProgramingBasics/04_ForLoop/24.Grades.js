function grades(input) {
    let studentsCount = parseInt(input[0]);
    let studentGrade = 0;
    let sumOfGrades = 0;
    let num6 = 0;
    let num5 = 0;
    let num4 = 0;
    let num3 = 0;
    for (i = 1; i <= studentsCount; i++) {
        studentGrade = parseFloat(input[i]);
        sumOfGrades += studentGrade;
        if ( studentGrade < 3) {
            num3++;
        } else if (studentGrade < 4) {
            num4++;
        } else if (studentGrade <5) {
            num5++;
        } else {
            num6++;
        }
    }
    console.log(`Top students: ${(num6 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(num5 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(num4 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(num3 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfGrades / studentsCount).toFixed(2)}`);
}
grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
    ]);