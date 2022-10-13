function lunchBreak(input) {
    let nameShow = input[0];
    let durationShow = Number(input[1]);
    let timeForBreak = Number(input[2]);
    let timeForLunch = timeForBreak * 0.125;
    let timeForRest = timeForBreak * 0.25;
    let freeTime = timeForBreak - timeForLunch - timeForRest;
    let diff = Math.ceil(Math.abs(freeTime - durationShow));
    if (freeTime >= durationShow) {
        console.log(`You have enough time to watch ${nameShow} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameShow}, you need ${diff} more minutes.`);
    }
}
lunchBreak(["Game Of Thrones", 48, 60]);