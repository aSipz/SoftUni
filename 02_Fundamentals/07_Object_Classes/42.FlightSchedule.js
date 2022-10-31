function flightSchedule(input) {
    let allFlightsArray = input.shift();
    let changedStatusArray = input.shift();
    let statusToCheck = input.shift()[0];
    class Flight {
        constructor(destination, number) {
            this.destination = destination;
            this.number = number;
            this.status = '';
        }
    }
    let flightObjectArray = [];
    for (let flight of allFlightsArray) {
        let currentFlight = new Flight(flight.split(' ').slice(1).join(' '), flight.split(' ')[0]);
        flightObjectArray.push(currentFlight);
    }
    for (let status of changedStatusArray) {
        let currentNumber = status.split(' ')[0];
        let currentStatus = status.split(' ').slice(1).join(' ');
        for (let flight of flightObjectArray) {
            if (flight.number == currentNumber) {
                flight.status = currentStatus;
                break;
            }
        }
    }
    if (statusToCheck == 'Ready to fly') {
        for (let flight of flightObjectArray) {
            if (flight.status == '') {
                flight.status = 'Ready to fly';
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    } else {
        for (let flight of flightObjectArray) {
            if (flight.status != '') {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    }
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
);