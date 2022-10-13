function bonusScore(input) {
    let score = Number(input[0]);
    let bonus = 0;
    let bonusAdd = 0;
    if (score <= 100) {
        bonus = 5;
    } else if (score <= 1000) {
        bonus = 0.2*score;
    } else {
        bonus = 0.1*score;
    }
    if (score%2 == 0) {
        bonusAdd = 1
    } else if ((score-5)%10 == 0) {
        bonusAdd = 2
    }
    let finalScore = score+bonus+bonusAdd;
    let bonusScore = bonus+bonusAdd;
    console.log(bonusScore);
    console.log(finalScore);
}
bonusScore([2703]);