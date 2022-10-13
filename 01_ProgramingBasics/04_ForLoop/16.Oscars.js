function oscars(input) {
    let actorName = input[0];
    let pointsFromAcademy = parseFloat(input[1]);
    let numReferee = parseInt(input[2]);
    let refereeName = "";
    let pointsFromReferee = 0;
    let totalCount = pointsFromAcademy;
    for (i = 3; i <= (numReferee * 2) + 2; i += 2) {
        refereeName = input[i];
        pointsFromReferee = parseFloat(input[i+1]);
        totalCount += refereeName.length * pointsFromReferee / 2;
        if (totalCount > 1250.5) {
            break;
        }
    }
    if ( totalCount > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalCount.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalCount).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);