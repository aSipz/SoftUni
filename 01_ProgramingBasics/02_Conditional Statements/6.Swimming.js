function swimming(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeS = Number(input[2]);
    let dragTime = Math.floor (distance/15)*12.5;
    let clearTime = distance*timeS;
    let finalTime = clearTime + dragTime;
    let difference = finalTime - record;
    if (difference < 0) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
swimming([40000, 2000, 5]);