function rosettaStone(input) {
    
    let templateMatrix = input.slice(1, Number(input[0]) + 1);
    let message = input.slice(Number(input[0]) + 1);
    let decription = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    for (let i = 0; i < templateMatrix.length; i++) {
        templateMatrix[i] = templateMatrix[i].split(' ').map(Number);
    }
    
    for (let i = 0; i < message.length; i++) {
        message[i] = message[i].split(' ').map(Number);
    }
    
    let multipliedTemplateMatrix = [];
    for (let i = 0; i < message.length; i++) {
        let row = []
        for (let j = 0; j < message[i].length; j++) {
            let tempI = i % templateMatrix.length;
            let tempJ = j % templateMatrix[0].length;
            row.push(templateMatrix[tempI][tempJ])
        }
        multipliedTemplateMatrix.push(row);
    }

    let outputMessage = '';
    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < message[i].length; j++) {
            let result = message[i][j] + multipliedTemplateMatrix[i][j];
            outputMessage += decription[result % 27];
        }
    }
    console.log(outputMessage);
}
rosettaStone([ '2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22' ]
);