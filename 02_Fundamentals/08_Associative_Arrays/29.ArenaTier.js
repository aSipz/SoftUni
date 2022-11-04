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
                let [firstGladiatorTechniques, firstGladiatorSkills] = Object.entries(gladiatorList[firstGladiator]);
                let [secondGladiatorTechniques, secondGladiatorSkills] = Object.entries(gladiatorList[secondGladiator]);
                let firstGladiatorPoints = 0;
                let secondGladiatorPoints = 0;
                for (const technique of firstGladiatorTechniques) {
                    if (secondGladiatorTechniques.includes(technique)) {
                        firstGladiatorPoints += gladiatorList[firstGladiator][technique];
                        secondGladiatorPoints += gladiatorList[secondGladiator][technique];
                    }
                }
                firstGladiatorPoints > secondGladiatorPoints
                    ?
                    delete gladiatorList[secondGladiator] :
                    delete gladiatorList[firstGladiator];
            }
        } else if (command == 'Ave Cesar') {
            break;
        }
    }
    let gladiatorArray = Object.entries(gladiatorList);
   
}
arena([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
);