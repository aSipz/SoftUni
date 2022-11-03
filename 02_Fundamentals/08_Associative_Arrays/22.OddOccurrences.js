function solve(string) {
    let elementsArray = string.split(' ');
    let elements = {};
    elementsArray.forEach(element => {
        element = element.toLowerCase();
        let count = 1;
        if (elements.hasOwnProperty(element)) {
            let currentCount = elements[element];
            count += currentCount;
        }
        elements[element] = count;
    });
    let array = Object.entries(elements);
    let filteredArray = array.filter(a => a[1] % 2 != 0);
    let output = [];
    for (const [key, value] of filteredArray) {
        output.push(key)
    }
    console.log(output.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');