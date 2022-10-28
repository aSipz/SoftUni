function inventory(input) {
   
    class Hero {
        constructor(heroName, heroLevel, item) {
            this.Hero = heroName;
            this.level = Number(heroLevel);
            this.iems = item;
        }
    }

    let heroesArray = [];
    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        let currentHero = new Hero(name, level, items);
        heroesArray.push(currentHero);
    }

    heroesArray.sort((a, b) => a.level - b.level);
    for (const hero of heroesArray) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.iems}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);