function fish(input) {
    let lenght = (Number (input[0]))/10;
    let width = (Number (input[1]))/10;
    let height = (Number (input[2]))/10;
    let percent = 1 - (Number (input[03]))/100;
    let result = lenght*width*height*percent;
    console.log(result);
}
fish([85,75,47,17]);