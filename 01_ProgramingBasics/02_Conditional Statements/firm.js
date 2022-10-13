function firm(input) {
    let hoursNeeded = parseInt(input[0]);
    let dayAvailable = parseInt(input[1]);
    let numWorkers = parseInt(input[2]);
    let wordDays = dayAvailable * 0.9;
    let workHours = Math.trunc(wordDays * 10 * numWorkers);
    if ( workHours >= hoursNeeded) {
        console.log(`Yes!${workHours-hoursNeeded} hours left.`);
    } else {
        console.log(`Not enough time!${hoursNeeded - workHours} hours needed.`);
    }
}
firm([99,3,1]);