function daysOfWeek(day) {
    let validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        console.log(validDays[day - 1]);
    }
}
daysOfWeek(7);