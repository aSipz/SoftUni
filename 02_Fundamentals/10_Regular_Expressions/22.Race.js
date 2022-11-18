function race(input) {
    let racerArray = input.shift().split(', ');
    let racerObj = {};
    racerArray.forEach(racer => {
        racerObj[racer] = 0;
    });
    let patternName = /[A-Za-z]/g;
    let patternDistance = /\d/g;
    for (const line of input) {
        if (line == 'end of race') {
            break;
        }
        let currentRacer = line
            .match(patternName)
            .join('');
        let distanceArray = line
            .match(patternDistance)
            .map(Number);
        let currentDistance = 0;
        distanceArray.forEach(num => {
            currentDistance += num;
        });
        if (racerObj.hasOwnProperty(currentRacer)) {
            racerObj[currentRacer] += currentDistance;
        }
    }
    let sortedArray = Object.entries(racerObj).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    for (let i = 0; i <= 2; i++) {
        let suffix = ['st', 'nd', 'rd'];
        console.log(`${i + 1}${suffix[i]} place: ${sortedArray[i][0]}`);
    }
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);