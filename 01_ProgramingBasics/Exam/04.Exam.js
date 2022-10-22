function exam(input) {
    let totalStudents = Number(input[0]);
    let topStudents = 0;
    let studentsAbove4 = 0;
    let studentsAbove3 = 0;
    let studentsFailed = 0;
    let allGrades = 0;
    for (let i = 1; i <= totalStudents; i++) {
        let grade = Number(input[i]);
        if (grade >= 5 && grade <= 6) {
            topStudents++;
        } else if (grade >= 4) {
            studentsAbove4++;
        } else if (grade >= 3) {
            studentsAbove3++;
        } else if (grade >= 2) {
            studentsFailed++;
        }
        allGrades += grade;
    }
    console.log(`Top students: ${(topStudents / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(studentsAbove4 / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(studentsAbove3 / totalStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(studentsFailed / totalStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(allGrades / totalStudents).toFixed(2)}`);
}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"]);