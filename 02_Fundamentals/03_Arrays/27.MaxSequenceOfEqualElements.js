function sequence(input) {
    let firstSequenceCount = 1;
    let longgestSequenceCoun = 0;
    let index = 0;
    let newArr = [];
    for (let i = 1; i < input.length; i++) {
        if (input[i] == input[i-1]) {
            firstSequenceCount++;
        } else {
            if (firstSequenceCount > longgestSequenceCoun) {
                longgestSequenceCoun = firstSequenceCount;
                index = i - firstSequenceCount;
            }
            firstSequenceCount = 1;
        }
        
    }
    if (firstSequenceCount > longgestSequenceCoun) {
        longgestSequenceCoun = firstSequenceCount;
        index = 0;
    }
    for (let i = index; i < index + longgestSequenceCoun; i++) {
        newArr.push(input[i]);
    }
    console.log(newArr.join(' '));
}
sequence([2,1,1,1,2,3,1,3,3]);