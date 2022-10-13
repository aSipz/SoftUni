function moving(input) {
    let widthFreeSpace = Number(input[0]);
    let lengthFreeSpace = Number(input[1]);
    let heightFreeSpace = Number(input[2]);
    let volumeFreeSpace = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
    let i = 3;
    let numBoxes = Number(input[i]);
    let totalBoxes = 0;
    let isFull = false;
    while (input[i] != 'Done') {
        numBoxes = Number(input[i]);
        totalBoxes += numBoxes;
        if (totalBoxes >= volumeFreeSpace) {
            isFull = true;
            break;
        }
        i++;
    }
    if (isFull) {
        console.log(`No more free space! You need ${totalBoxes - volumeFreeSpace} Cubic meters more.`);
    } else {
        console.log(`${volumeFreeSpace - totalBoxes} Cubic meters left.`);
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);