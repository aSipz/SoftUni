function distinctArray(input) {
    // for (let i = 0; i < input.length; i++) {
    //     let currentElement = input[i];
    //     let slicedArray = input.slice(i + 1);
    //     for (let j = 0; j < slicedArray.length; j++) {
    //         if (currentElement == slicedArray[j]) {
    //             input.splice(i + j + 1, 1);
    //             slicedArray = input.slice(i + 1)
    //             j = -1;
    //         }
    //     }
    // }
    // console.log(input.join(' '));
    for (let i = 0; i < input.length; i++) {
        let index = 0;
        let currentElement = input[i];
        while (index != -1) {
        index = input.indexOf(currentElement, i + 1);
        if (index != -1) {
            input.splice(index, 1);
        }   
        }
    }
    console.log(input.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 4, 5, 8 , 4]);