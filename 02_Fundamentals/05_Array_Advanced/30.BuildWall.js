function build(height) {
    let heightArray = height.map(Number);
    let concreteArray = [];
    let price = 0;
    for (let day = 0; day < 30; day++) {
        let concretePerDay = 0;
        let checkSum = 0;
        let isFinished = false;
        for (let j = 0; j < heightArray.length; j++) {
            let currentSectionHeight = heightArray[j];
            if (currentSectionHeight < 30) {
                heightArray[j]++;
                concretePerDay += 195;
            }
            checkSum += heightArray[j];
            if (checkSum == height.length * 30) {
                isFinished = true;
                break
            }
        }
        price += concretePerDay * 1900;
        concreteArray.push(concretePerDay);
        if (isFinished) {
            break;
        }
    }
    console.log(concreteArray.join(', '));
    console.log(`${price} pesos`);
}
build([21, 25, 28]);