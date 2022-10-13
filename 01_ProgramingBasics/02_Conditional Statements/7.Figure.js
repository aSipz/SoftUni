function figure(input) {
    let figName = input[0];
    let dim1 = Number(input[1]);
    let dim2 = Number(input[2]);
    let area = 0
    if (figName == "square") {
        area = dim1*dim1;
    } else if (figName == "rectangle") {
        area = dim1*dim2;
    } else if (figName == "circle") {
        area = Math.PI*dim1*dim1;
    } else if (figName == "triangle") {
        area = dim1*dim2/2;
    } 
    console.log(area.toFixed(3));
}    
figure(["circle", 5]);