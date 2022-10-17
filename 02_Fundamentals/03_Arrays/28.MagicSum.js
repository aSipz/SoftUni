function magicSum(array, num) {
    for (let i = 0; i < array.length; i++) {
        let isFound = false;
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == num && i != j && array[i] != '' && array[j] != '') {
                console.log(array[i] + ' ' + array[j]);
                isFound = true;
            }
        }
        if (isFound) {
            array[i] = '';
        }
    }
}
magicSum([1,2,3,4,5,5,1,6],6);