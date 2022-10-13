function workingHours(input) {
    let hour = parseInt(input[0]);
    let day = input[1];
    let isValidHour = (10 <= hour) && (hour <= 18);
    let isValidDay = (day == "Monday") || (day == "Thursday") || (day == "Wednesday") || (day == "Tuesday") || (day == "Friday") || (day == "Saturday");
    if (isValidDay && isValidHour) {
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingHours([11, "Monday"]);