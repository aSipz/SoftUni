function border(input) {
    let h = parseInt(input[0]);
    let x = parseInt(input[1]);
    let y = parseInt(input[2]);
    let bottomBorder = (x >=0 && x<= 3 * h) && y ==0;
    let leftBorder = (x == 0 && (y >= 0 && y <= h)) || (x == h && (y >= h && y <= 4 * h));
    let rightBorder = (x == 3 * h && (y >= 0 && y <= h)) || (x == 2 * h && (y >= h && y <= 4 * h));
    let topBorder = (y == 4 * h && (x >= h && x <= 2 * h)) || (y == h && ((x >= 0 && x <= h) || (x >= 2 * h && x <= 3 * h)));
    let insideBottom = (x > 0 && x < 3 * h) && (y >0 && y < h);
    let insideTop = (x > h && x < h * 2) && (y > h && y < 4 * h);
    let insideBorder = (x > h && x < h *2) && y == h;
    if ( bottomBorder || rightBorder || leftBorder || topBorder) {
        console.log("border");
    } else if ( insideBottom || insideTop || insideBorder) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}
border([2,2,2]);