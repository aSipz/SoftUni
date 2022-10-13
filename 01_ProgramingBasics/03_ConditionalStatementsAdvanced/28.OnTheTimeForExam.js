function exam(input) {
    let examHour = parseInt(input[0]);
    let examMin = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMin = parseInt(input[3]);
    let examTimeInMin = examHour * 60 + examMin;
    let arrivalTimeInMin = arrivalHour * 60 + arrivalMin;
    let diffInMin = Math.abs(examTimeInMin - arrivalTimeInMin);
    let diffHour = Math.trunc(diffInMin / 60);
    let diffMin = diffInMin % 60;
    if (arrivalTimeInMin > examTimeInMin) {
        console.log("Late");
        if (diffInMin < 60) {
            console.log(`${diffMin} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else if (arrivalTimeInMin == examTimeInMin) { 
        console.log("On time");
    }else if (arrivalTimeInMin < examTimeInMin && (examTimeInMin - arrivalTimeInMin) <= 30) {
        console.log("On time");
        console.log(`${diffMin} minutes before the start`);
    } else {
        console.log("Early");
        if (diffInMin < 60) {
            console.log(`${diffMin} minutes before the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours before the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours before the start`);
            }
        }
    }
}
exam([11,30,10,55]);