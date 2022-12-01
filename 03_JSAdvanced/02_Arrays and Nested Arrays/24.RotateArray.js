function rotate(input, rotations) {
    rotations = rotations % input.length;
    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);