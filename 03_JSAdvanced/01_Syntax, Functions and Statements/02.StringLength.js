function solve(...params) {
    let totalLength = 0;
    for (const element of params) {
        totalLength += element.length;
    }
    let averageLength = Math.floor(totalLength / params.length);
    console.log(totalLength);
    console.log(averageLength);
}
solve('chocolate', 'ice cream', 'cake');