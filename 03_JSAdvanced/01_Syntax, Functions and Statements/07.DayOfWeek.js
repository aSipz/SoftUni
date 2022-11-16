function solve(day) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = '';
    if (!daysOfWeek.includes(day)) {
        result = 'error'
    } else {
        result = daysOfWeek.indexOf(day) + 1;
    }
    return result;
}
solve();