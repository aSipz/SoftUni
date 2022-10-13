function cinema(input) {
    let projectionType = input[0];
    let numRows = parseInt(input[1]);
    let numColumns = parseInt(input[2]);
    let income = 0
    switch (projectionType) {
        case "Premiere":
            income = numColumns * numRows * 12;
            break;
        case "Normal":
            income = numColumns * numRows * 7.5;
            break;
        case "Discount":
            income = numColumns * numRows * 5;
            break;
    }
    console.log(income.toFixed(2));
}
cinema(["Premiere" , 10 ,12]);