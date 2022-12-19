function solve(input) {
    let collection = [];
    let processor = {
        add: string => collection.push(string),
        remove: string => collection = collection.filter(a => a != string),
        print() { console.log(collection.join(',')); }
    };
    input.forEach(line => {
        let [command, string] = line.split(' ');
        string ? processor[command](string) : processor[command]();
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])