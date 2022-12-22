function tickets(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = input
        .map(createObj)
        .sort(sortResult);
    return result;

    function createObj(string) {
        let [destination, price, status] = string.split('|');
        price = Number(price);
        return new Ticket(destination, price, status);
    }

    function sortResult(a, b) {
        if (criteria == 'price') {
            return a.price - b.price;
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    }
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));