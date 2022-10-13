function vowelsSum(input) {
    let text = input[0];
    let output = 0;
    for (i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                output += 1;
                break;
            case "e":
                output += 2;
                break;
            case "i":
                output += 3;
                break;
            case "o":
                output +=4;
                break;
            case "u":
                output +=5;
                break;
        }
    }
    console.log(output);
}
vowelsSum(["beer"]);