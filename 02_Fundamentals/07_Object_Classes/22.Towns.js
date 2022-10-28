function town(input) {
    for (const city of input) {
        let [town, latitude, lontitude] = city.split(' | ');
        let tempTown = {
            town: town,
            latitude: (Number(latitude)).toFixed(2),
            longitude: (Number(lontitude)).toFixed(2),
        }
        console.log(tempTown);
    }
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);