function meetings(input) {
    let meetingSchedule = {};
    input.forEach(element => {
        let [day, name] = element.split(' ');
        if (meetingSchedule[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingSchedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for (const key in meetingSchedule) {
        console.log(`${key} -> ${meetingSchedule[key]}`);
    }
}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);