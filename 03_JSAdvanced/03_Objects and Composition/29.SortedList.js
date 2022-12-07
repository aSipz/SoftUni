function sortedList() {
    let elementsArray = [];
    let list = { add, remove, get, size: 0 };
    return list;

    function add(element) {
            elementsArray.push(element);
            elementsArray.sort((a, b) => a - b);
            this.size++
    }

    function remove(index) {
        if (index >= 0 && index < elementsArray.length) {
            elementsArray.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < elementsArray.length) {
            return elementsArray[index];
        }
    }
}
let list = sortedList();
console.log(list.size);
list.add('a');
console.log(list.size);
list.add(6);
list.add(7);
list.add(3);
console.log(list.get(5));
list.remove(4);
console.log(list.get(1));
console.log(list.size);