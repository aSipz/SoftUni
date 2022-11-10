function solve(word, text) {
    let textArray = text.toLowerCase().split(' ');
    if (textArray.includes(word.toLowerCase())) {
        console.log(word.toLowerCase());
    } else {
        console.log(`${word.toLowerCase()} not found!`);
    }
}
solve('JaVascript',
'JavaScriptis the best programming language'
);