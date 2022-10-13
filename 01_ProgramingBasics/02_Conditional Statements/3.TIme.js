function timeMath(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let addedMin = 15;
    let calcHour = 0;
    let calcMin = 0;
    if (minutes+addedMin < 60) {
        calcMin=minutes+addedMin;
        calcHour = hour;
    } else if (minutes+addedMin < 70) {
        calcMin = "0" + (minutes+addedMin-60);
        if (hour+1 <= 23) {
            calcHour = hour + 1;
        }
    
    } else {
        calcMin = minutes + addedMin - 60;
        if (hour+1 <= 23) {
            calcHour = hour + 1;
        }
    }
    console.log(`${calcHour}:${calcMin}`);
}
timeMath([12 ,49]);
