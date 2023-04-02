function hero(input) {
    const heroes = {};
    const commands = {
        'Enroll': enroll,
        'Learn': learn,
        'Unlearn': unlearn
    }

    for (const line of input) {
        if (line === 'End') {
            console.log('Heroes:');
            const heroesArr = Object.entries(heroes);
            heroesArr.forEach(([name, spellsArr]) => {
                console.log(`== ${name}: ${spellsArr.join(', ')}`);
            })
            break;
        }
        const [command, optionOne, optionTwo] = line.split(' ');
        commands[command](optionOne, optionTwo);
    }

    function enroll(name) {
        if (heroes[name]) {
            console.log(`${name} is already enrolled.`);
            return;
        }
        heroes[name] = [];
    }

    function learn(name, spell) {
        if (!heroes[name]) {
            console.log(`${name} doesn't exist.`);
            return;
        }
        if (heroes[name].includes(spell)) {
            console.log(`${name} has already learnt ${spell}.`);
            return;
        }
        heroes[name].push(spell);
    }

    function unlearn(name, spell) {
        if (!heroes[name]) {
            console.log(`${name} doesn't exist.`);
            return;
        }
        if (!heroes[name].includes(spell)) {
            console.log(`${name} doesn't know ${spell}.`);
            return;
        }
        heroes[name].splice(heroes[name].indexOf(spell), 1);
    }
}

hero(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);