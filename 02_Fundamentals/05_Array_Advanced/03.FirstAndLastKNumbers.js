function printNumsOfArray(input){
    let count = input.shift();
    let firstElementsArray = input.slice(0,count);
    let lastElementsArray = input.slice(input.length - count);
    console.log(firstElementsArray.join(' '));
    console.log(lastElementsArray.join(' '));
}
printNumsOfArray([3, 6, 7, 8, 9]);