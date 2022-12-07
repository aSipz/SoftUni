function towns(input) {
    let pattern = / *\| */g;
    let townsArray = [];
    input.shift();
    input.forEach(line => {
        let [_, Town, Latitude, Longitude] = line.split(pattern);
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        townsArray.push({ Town, Latitude, Longitude });
    });
    console.log(JSON.stringify(townsArray));
}
towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);