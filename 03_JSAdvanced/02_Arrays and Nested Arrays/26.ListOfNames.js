function nameList(input) {
    input.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    input.forEach(name => {
        console.log(`${counter}.${name}`);
        counter++;
    });
}
nameList(["John", "Bob", "Christina", "Ema"]);