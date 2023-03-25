function adAstra(input) {
    const msg = input.shift();
    const pattern = /(#|\|)(?<item>[A-za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)\1/g;

    const arr = [...msg.matchAll(pattern)];
    let totalCal = 0;
    let days = 0;

    if (arr.length > 0) {
        arr.forEach(i => totalCal += Number(i.groups.cal));

        days = Math.floor(totalCal / 2000);
    }

    console.log(`You have food to last you for: ${days} days!`);

    if (arr.length > 0) {
        const result = arr.map(i => `Item: ${i.groups.item}, Best before: ${i.groups.date}, Nutrition: ${i.groups.cal}`);
        console.log(result.join('\n'));
    }
}

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);