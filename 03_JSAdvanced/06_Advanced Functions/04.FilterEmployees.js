function solve(data, criteria) {
    let input = JSON.parse(data);
    input
        .filter(filter)
        .forEach((obj, index) => {
            console.log(`${index}. ${obj['first_name']} ${obj['last_name']} - ${obj.email}`);
        });

    function filter(obj) {
        if (criteria == 'all') {
            return true;
        } else {
            let [key, value] = criteria.split('-');
            return obj[key] == value;
        }
    }
}
solve(`[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Maldina","email": "ev2@hostgator.com","gender": "Male"}]`,
    'last_name-Maldin'
)