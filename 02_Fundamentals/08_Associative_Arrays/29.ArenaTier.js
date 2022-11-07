function arena(input) {
    let gladiatorList = {};
    for (const command of input) {
        if (command.includes(' -> ')) {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);
            let availableTechniques = {};
            if (gladiatorList[gladiator] && gladiatorList[gladiator][technique]) {
                let currentLevel = gladiatorList[gladiator][technique];
                if (currentLevel > skill) {
                    skill = currentLevel;
                }
            }
            if (gladiatorList[gladiator]) {
                availableTechniques = gladiatorList[gladiator];
            }
            availableTechniques[technique] = skill;
            gladiatorList[gladiator] = availableTechniques;
        } else if (command.includes(' vs ')) {
            let [firstGladiator, secondGladiator] = command.split(' vs ');
            if (gladiatorList[firstGladiator] && gladiatorList[secondGladiator]) {
                let firstGladiatorTechniques = gladiatorList[firstGladiator];
                let secondGladiatorTechniques = gladiatorList[secondGladiator];
                let firstTechniqueArray = Object.keys(firstGladiatorTechniques);
                let secondTechniqueArray = Object.keys(secondGladiatorTechniques);
                let firstGladiatorPoints = 0;
                let secondGladiatorPoints = 0;
                for (const technique of firstTechniqueArray) {
                    if (secondTechniqueArray.includes(technique)) {
                        for (const points of Object.values(firstGladiatorTechniques)) {
                            firstGladiatorPoints += points;
                        }
                        for (const points of Object.values(secondGladiatorTechniques)) {
                            secondGladiatorPoints += points;
                        }
                        firstGladiatorPoints > secondGladiatorPoints
                            ?
                            delete gladiatorList[secondGladiator] :
                            delete gladiatorList[firstGladiator];
                        break;
                    }
                }
            }
        } else if (command == 'Ave Cesar') {
            break;
        }
    }
    for (const name in gladiatorList) {
        let pointsArray = Object.values(gladiatorList[name]);
        let totalSkill = 0;
        pointsArray.forEach(skill => {
            totalSkill += skill;
        });
        gladiatorList[name].totalSkill = totalSkill;
    }
    let gladiatorArray = Object.entries(gladiatorList);
    gladiatorArray.sort((a,b) => b[1].totalSkill - a[1].totalSkill || (a[0]).localeCompare(b[0]));
    for (const gladiator of gladiatorArray) {
        console.log(`${gladiator[0]}: ${gladiator[1].totalSkill} skill`);
        let techniquesArray = Object.entries(gladiator[1]);
        techniquesArray.pop();
        techniquesArray.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB));
        for (const [technique, skill] of techniquesArray) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}
arena([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
);