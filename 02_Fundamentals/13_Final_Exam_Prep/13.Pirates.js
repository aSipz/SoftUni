function pirates(input) {


    const towns = input
        .slice(0, input.indexOf('Sail'))
        .reduce((acc, curr) => {
            let [town, population, gold] = curr.split('||');
            population = Number(population);
            gold = Number(gold);
            if (acc[town]) {
                population += acc[town].population;
                gold += acc[town].gold;
            }

            acc[town] = {
                population,
                gold
            };

            return acc;

        }, {});

    const commandsList = {
        'Plunder': plunder,
        'Prosper': prosper
    };

    const commands = input
        .slice(input.indexOf('Sail') + 1, input.indexOf('End'))
        .forEach(c => {
            const [command, town, val1, val2] = c.split('=>');
            commandsList[command](town, val1, val2);
        });

    const townsArr = Object.entries(towns).map(([k, v]) => `${k} -> Population: ${v.population} citizens, Gold: ${v.gold} kg`);

    townsArr == 0
        ? console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
        : console.log(`Ahoy, Captain! There are ${townsArr.length} wealthy settlements to go to:\n${townsArr.join('\n')}`);

    function plunder(town, people, gold) {
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        towns[town].population -= Number(people);
        towns[town].gold -= Number(gold);
        if (towns[town].population <= 0 || towns[town].gold <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete towns[town];
        }
    }

    function prosper(town, gold) {
        if (Number(gold) <= 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            towns[town].gold += Number(gold);
            console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    ;