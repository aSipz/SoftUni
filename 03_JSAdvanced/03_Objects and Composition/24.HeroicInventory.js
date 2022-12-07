function inventory(input) {
    let heroesArray = [];
    input.forEach(line => {
        let [name, level, itemsString] = line.split(' / ');
        level = Number(level);
        let items = itemsString ? itemsString.split(', ') : [];
        let currentHero = { name, level, items };
        heroesArray.push(currentHero);
    });
    return JSON.stringify(heroesArray);
}
inventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);