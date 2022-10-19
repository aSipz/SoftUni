function formateGrade(grade) {
    let description = ''
    if (grade < 3) {
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good'
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    grade < 3
    ?
    console.log(`${description} (2)`):
    console.log(`${description} (${grade.toFixed(2)})`);
}
formateGrade(2.7)