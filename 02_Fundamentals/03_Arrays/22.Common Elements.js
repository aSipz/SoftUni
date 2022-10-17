function commonElements(arr1, arr2) {
    for (let el1 of arr1) {
        for (let el2 of arr2) {
            if (el1 === el2) {
                console.log(el1);
                break;
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);