function search(arr1, arr2) {
    let sourceArray = arr1;
    let numCountToTake = arr2.shift();
    let numCountToDelete = arr2.shift();
    let numToSearchFor = arr2.shift();
    let count = 0;
    let resultArray = [];
    for (let i = 0; i < numCountToTake; i++) {
        resultArray.push(sourceArray[i]);
    }
    for (let i = 0; i < numCountToDelete; i++) {
        resultArray.shift();
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == numToSearchFor) {
            count++;
        }
    }
    console.log(`Number ${numToSearchFor} occurs ${count} times.`);
}
search([5, 2, 3, 4, 3, 1, 6],
    [5, 2, 3]
    );