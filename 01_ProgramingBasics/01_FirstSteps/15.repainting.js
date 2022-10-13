function repainting(input) {
    let cover = 1.5;
    let paint = 14.5;
    let thinner = 5;
    let coverqtt = Number (input[0]);
    let paintqtt = Number (input[1]);
    let thinnerqtt = Number (input[2]);
    let time = Number (input[3]);
    let mat = cover*(coverqtt + 2) + paint*paintqtt*1.1 + thinner*thinnerqtt + 0.4;
    let result = mat + mat*0.3*time;
    console.log(result);
}
repainting([10,11,4,8]);