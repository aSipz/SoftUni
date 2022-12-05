function town(input) {
    let townRegistry = {};
    for (const line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (townRegistry[town]) {
            population += townRegistry[town];
        }
        townRegistry[town] = population;
    }
    for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}
town(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);