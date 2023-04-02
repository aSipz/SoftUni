function bossRush(input) {
    const numOfInputs = Number(input.shift());
    const inputsArr = input.slice(0, numOfInputs);

    const pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s{1}[A-Za-z]+)#/g;

    inputsArr.forEach(line => {

        const arr = [...line.matchAll(pattern)];

        if (arr[0]) {
            const name = arr[0].groups.name;
            const title = arr[0].groups.title;
            console.log(`${name}, The ${title}\n>> Strength: ${name.length}\n>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }

    });
}

bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);