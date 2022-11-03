function schoolGrades(input) {
    let studentList = {};
    input.forEach(element => {
        let name = element.split(' ').shift();
        let score = element.split(' ').slice(1);
        if (studentList.hasOwnProperty(name)) {
            let currentScore = studentList[name];
            currentScore.forEach(element => {
                score.push(element);
            });
        }
        studentList[name] = score;
    });
    let studentArray = Object.entries(studentList);
    studentArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    for (const [name, score] of studentArray) {
        let sumOfGrades = 0;
        score.forEach(element => {
            sumOfGrades += Number(element);
        });
        let averageScore = (sumOfGrades / score.length).toFixed(2);
        console.log(`${name}: ${averageScore}`);
    }
}
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);