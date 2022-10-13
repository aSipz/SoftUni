function housePainting(input) {
    let houseHeight = Number (input[0]);
    let houseLenght = Number (input[1]);
    let roofHeight = Number (input[2]);
    let wallArea = (houseHeight*houseHeight*2 - 1.2*2) + (houseHeight*houseLenght*2 - 1.5*1.5*2);
    let roofArea = houseHeight*houseLenght*2 + houseHeight*roofHeight;
    let greenPaint = wallArea/3.4;
    let redPaint = roofArea/4.3;
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
housePainting([6,10,5.2]);