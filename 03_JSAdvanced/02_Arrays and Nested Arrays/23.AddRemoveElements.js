function addRemove(input) {
    let resultArray = [];
    let num = 1;
    input.forEach(command => {
        if (command == 'add') {
            resultArray.push(num);
        } else if (command =='remove') {
            resultArray.pop();
        }
        num++;
    });
    if (resultArray.length > 0) {
        console.log(resultArray.join('\n'));
    } else {
        console.log(`Empty`);
    }
}
addRemove(['remove', 
'remove', 
'remove']
);