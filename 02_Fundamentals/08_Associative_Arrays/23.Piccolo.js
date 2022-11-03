function solve(input) {
    let parking = new Set();
    for (const action of input) {
        let [direction, plateNum] = action.split(', ');
        if (direction == 'IN') {
            parking.add(plateNum)
        } else if (direction == 'OUT') {
            parking.delete(plateNum);
        } 
    }
    if (parking.size == 0) {
        console.log('Parking Lot is Empty');
    } else {
    let parkingArray = Array.from(parking);
    parkingArray.sort((a,b) => a.localeCompare(b));
    parkingArray.forEach(element => {
        console.log(element);
    });
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);