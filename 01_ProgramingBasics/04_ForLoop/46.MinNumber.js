function minNum(input) {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 1; i < input.length; i++) {
     let num = Number(input[i]);
      if (num < min) {
        min = num;
      }
    }
    console.log(min);
}
minNum([1,50,50,50,50,0,0,50,50]);