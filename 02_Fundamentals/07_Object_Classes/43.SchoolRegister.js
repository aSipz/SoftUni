function schoolRegister(input) {
    class Student {
        constructor(name, grade, score) {
            this.name = name;
            this.grade = grade;
            this.score = score;
        }
    }
    let studentObjectArray = [];
    let gradeArray = [];
    for (let student of input) {
        let currentName = student.split(', ')[0].split(' ')[2];
        let currentGrade = Number(student.split(', ')[1].split(' ')[1]);
        let currentScore = Number(student.split(', ')[2].split(' ').pop());
        if (currentScore >= 3) {
            currentGrade++;
        } else {
            continue;
        }
        if (!gradeArray.includes(currentGrade)) {
            gradeArray.push(currentGrade);
        }
        let currentStudent = new Student(currentName, currentGrade, currentScore)
        studentObjectArray.push(currentStudent);
    }
    gradeArray.sort((a, b) => a - b);
    studentObjectArray.sort((a, b) => a.grade - b. grade)
    for (let grade of gradeArray) {
        console.log(`${grade} Grade`);
        let list = [];
        let score = 0;
        let count = 0;
        for (let student of studentObjectArray) {
            if (grade == student.grade) {
                list.push(student.name);
                count++;
                score += student.score;
            }
        }
        console.log(`List of students: ${list.join(', ')}`);
        console.log(`Average annual score from last year: ${(score / count).toFixed(2)}`);
        console.log('');
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    );