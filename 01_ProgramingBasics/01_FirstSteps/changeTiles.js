function changeTiles(input) {
    let sizeGround = parseInt(input[0]);
    let widthTile = parseFloat(input[1]);
    let lenghtTile = parseFloat(input[2]);
    let widthBench = parseInt(input[3]);
    let lenghtBench = parseInt(input[4]);
    let numTiles = ((sizeGround * sizeGround) - (widthBench * lenghtBench)) / (widthTile * lenghtTile);
    let time = numTiles * 0.2;
    console.log(Math.round(numTiles * 100)/100);
    console.log(Math.round(time*100)/100);
}
changeTiles([20,5,4,1,2]);