function sleepyCat(input) {
    let freeDays = parseInt(input[0]);
    let workDays = 365 - freeDays;
    let playWorkDay = 63;
    let playFreeDay = 127;
    let totalPlayTime = freeDays * playFreeDay + workDays * playWorkDay;
    let diff = Math.abs(totalPlayTime - 30000);
    let totalPlayTimeH = Math.trunc(diff / 60);
    let totalPlayTimeM = diff%60;
    if (totalPlayTime > 30000) {
        console.log(`Tom will run away`);
        console.log(`${totalPlayTimeH} hours and ${totalPlayTimeM} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${totalPlayTimeH} hours and ${totalPlayTimeM} minutes less for play`);
    }
}
sleepyCat([113]);