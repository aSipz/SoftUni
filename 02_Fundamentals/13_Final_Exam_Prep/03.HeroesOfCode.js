function heroesOfCode(input) {
    const heroNumber = input.shift();
    const heroes = input.slice(0, heroNumber)
        .reduce((acc, curr) => {
            const arr = curr.split(' ');
            acc[arr[0]] = {
                hp: Math.min(Number(arr[1]), 100),
                mp: Math.min(Number(arr[2]), 200)
            };
            return acc;
        }, {});

    const commandsArr = input.slice(heroNumber);

    const commands = {
        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal
    };

    for (const line of commandsArr) {
        if (line === 'End') {
            const heroesArr = Object.entries(heroes).map(([k, v]) => `${k}\n  HP: ${v.hp}\n  MP: ${v.mp}`);
            console.log(heroesArr.join('\n'));
            break;
        }
        const [command, currentHero, optionOne, optionTwo] = line.split(' - ');
        commands[command](currentHero, optionOne, optionTwo);
    }

    function castSpell(hero, manaNeeded, spell) {
        if (Number(manaNeeded) <= heroes[hero].mp) {
            heroes[hero].mp -= Number(manaNeeded);
            console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
        } else {
            console.log(`${hero} does not have enough MP to cast ${spell}!`);
        }
    }

    function takeDamage(hero, dmg, attacker) {
        if (Number(dmg) < heroes[hero].hp) {
            heroes[hero].hp -= Number(dmg);
            console.log(`${hero} was hit for ${dmg} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
        } else {
            console.log(`${hero} has been killed by ${attacker}!`);
            delete heroes[hero];
        }
    }

    function recharge(hero, points) {
        const initialPoints = heroes[hero].mp;
        heroes[hero].mp = Math.min(initialPoints + Number(points), 200);
        console.log(`${hero} recharged for ${heroes[hero].mp - initialPoints} MP!`);
    }

    function heal(hero, points) {
        const initialPoints = heroes[hero].hp;
        heroes[hero].hp = Math.min(initialPoints + Number(points), 100);
        console.log(`${hero} healed for ${heroes[hero].hp - initialPoints} HP!`);
    }
}

heroesOfCode([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);