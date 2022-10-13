function competition(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let timeTotal = timeFirst+timeSecond+timeThird;
    let timeMinutes = Math.trunc(timeTotal/60);
    let timeSeconds = timeTotal%60;
    if (timeSeconds < 10) {
        console.log(`${timeMinutes}:0${timeSeconds}`);
    } else {
        console.log(`${timeMinutes}:${timeSeconds}`);
    }
}
competition([35,48,26]);