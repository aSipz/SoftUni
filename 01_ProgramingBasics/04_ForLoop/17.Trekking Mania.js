function trekkingMania(input) {
    let groupsCount = parseInt(input[0]);
    let peopleInGroup = 0;
    let totalPeople = 0;
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKili = 0;
    let groupK2 = 0;
    let groupEverest = 0;
    for (i = 1; i <= groupsCount; i++) {
        peopleInGroup = parseInt(input[i]);
        totalPeople += peopleInGroup;
        if (peopleInGroup <= 5) {
            groupMusala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            groupMonblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            groupKili += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            groupK2 += peopleInGroup;
        } else {
            groupEverest += peopleInGroup;
        }
    }
    console.log(`${(groupMusala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupMonblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupKili / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupK2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupEverest / totalPeople * 100).toFixed(2)}%`);
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"]);