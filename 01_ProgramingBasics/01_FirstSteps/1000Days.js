function daysAfterBirth(input) {
    let str = input[0];
    let [day, month, year] = str.split('-');
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1000);
    let dayNew = date.getDate();
    let monthNew = date.getMonth() + 1;
    let yearNew = date.getFullYear();
    if (dayNew > 9 && monthNew > 9) {
        console.log(`${dayNew}-${monthNew}-${yearNew}`);
    } else if (dayNew <= 9 && monthNew > 9) {
        console.log(`0${dayNew}-${monthNew}-${yearNew}`);
    } else if (dayNew <= 9 && monthNew <= 9) {
        console.log(`0${dayNew}-0${monthNew}-${yearNew}`);
    } else if (dayNew > 9 && monthNew <= 9) {
        console.log(`${dayNew}-0${monthNew}-${yearNew}`);
    }
}
daysAfterBirth(["07-11-2003"]);