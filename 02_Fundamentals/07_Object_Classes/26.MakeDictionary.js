function makeDictionary(inputJSON) {
    let dictionaryArray = [];
    for (let j = 0; j < inputJSON.length; j++) {
        let isFound = false;
        let currentTerm = JSON.parse(inputJSON[j]); 
        for (let i = 0; i < dictionaryArray.length; i++) {
            if (Object.keys(currentTerm)[0] == Object.keys(dictionaryArray[i])[0]) {
                dictionaryArray[i][Object.keys(dictionaryArray[i])[0]] = Object.values(currentTerm)[0];
                isFound = true;
            }
        }
        if (!isFound) {
        dictionaryArray.push(currentTerm);
        }
    }
    dictionaryArray.sort((a, b) => (Object.keys(a)[0]).localeCompare(Object.keys(b)[0]))
    for (const word of dictionaryArray) {
        let term = Object.keys(word)
        console.log(`Term: ${term} => Definition: ${word[term]}`);
    }
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"A "}',
    ]);