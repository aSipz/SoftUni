function basketball(input) {
    let priceperyear = Number (input[0]);
    let boots = 0.6*priceperyear;
    let outfit = 0.8*boots;
    let ball = 0.25*outfit;
    let misc = 0.2*ball;
    let result = priceperyear + boots + outfit + ball + misc;
    console.log(result);
}
basketball([365]);