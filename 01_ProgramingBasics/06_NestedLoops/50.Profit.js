function profit(input) {
    let coin1Count = Number(input[0]);
    let coin2Count = Number(input[1]);
    let note5Count = Number(input[2]);
    let totalMoney = Number(input[3]);
    for (let i = 0; i <= coin1Count; i++) {
        for (let j = 0; j <= coin2Count; j++) {
            for (let k = 0; k <= note5Count; k++) {
                if (i + j * 2 + k * 5 == totalMoney) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${totalMoney} lv.`);
                }
            }
        }
    }
}
profit([3,2,3,10]);