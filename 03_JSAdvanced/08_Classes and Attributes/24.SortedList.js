class List {
    constructor() {
        this.collection = [];
        this.size = 0;;
    }
    add(el) {
        this.collection.push(el);
        this.collection.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        }
        this.collection.splice(index, 1);
        this.size--;
    }
    get(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        }
        return this.collection[index]
    };
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
list.add(2);
console.log(list.size);
console.log(list.collection);
