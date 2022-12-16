function sort(arr, string) {
    let sortObj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return arr.sort(sortObj[string]);
}
sort([14, 7, 17, 6, 8], 'desc');