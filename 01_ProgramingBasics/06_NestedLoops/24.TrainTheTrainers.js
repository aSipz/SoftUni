function train(input) {
    let juryCount = Number(input[0]);
    let presentationName = input[1];
    let numOfPresentations = 0;
    let markForPresentation = 0;
    let allMarks = 0;
    for (let i = 1; i < input. length; i += juryCount + 1) {
        if (input[i] == 'Finish') {
            break;
        }
        presentationName = input[i];
        let sumOfMarks = 0;
        for (let j = i + 1; j <= i + juryCount; j++) {
            sumOfMarks += Number(input[j]);
        }
        markForPresentation = sumOfMarks / juryCount;
        console.log(`${presentationName} - ${markForPresentation.toFixed(2)}.`);
        numOfPresentations++;
        allMarks += markForPresentation;
    }
    console.log(`Student's final assessment is ${(allMarks/numOfPresentations).toFixed(2)}.`);
}
train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);