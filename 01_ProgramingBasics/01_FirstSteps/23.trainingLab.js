function trainingLab(input) {
    let hallLenght = Number (input[0]);
    let hallWidth = Number (input[1]);
    let placesPerWidth = parseInt ((hallWidth-1)/0.7);
    let placePerLenght = parseInt (hallLenght/1.2);
    let totalPlaces = placePerLenght*placesPerWidth - 3;
    console.log(totalPlaces);
}
trainingLab([8.4, 5.2]);