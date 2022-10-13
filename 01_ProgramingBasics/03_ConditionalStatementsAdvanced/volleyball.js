function volleyball(input) {
    let yearType = input[0];
    let numHoliday = parseInt(input[1]);
    let numWeekendProvince = parseInt(input[2]);
    let numWeekendSofia = 48 - numWeekendProvince;
    let playDaySofia = 0.75 * numWeekendSofia + 2/3 * numHoliday;
    let totalPlayDay = numWeekendProvince + playDaySofia;
    if (yearType == "leap") {
        totalPlayDay = totalPlayDay * 1.15;
    }
    console.log(Math.floor(totalPlayDay));
}
volleyball(["leap",0,1]);