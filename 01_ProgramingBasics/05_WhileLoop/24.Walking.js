function walking(input) {
    let i = 0;
    let steps = Number(input[i]);
    let totalSteps = 0;
    isDone = false;
    while (!isDone) {
        if (input[i] == 'Going home') {
            totalSteps += Number(input[i+1]);
            totalSteps >= 10000 ? isDone = true : isDone = false;
            break;
        }
        totalSteps += Number(input[i]);
        totalSteps >= 10000 ? isDone = true : isDone = false;
        i++;
    }
    if (isDone) {
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);