function solution() {
    let supply = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipe = {
        apple: [{carbohydrate: 1}, {flavour: 2}],
        lemonade: [{carbohydrate: 10}, {flavour: 20}],
        burger: [{carbohydrate: 5}, {fat: 7}, {flavour: 3}],
        eggs: [{protein: 5}, {fat: 1}, {flavour: 1}],
        turkey: [{protein: 10}, {carbohydrate: 10}, {fat: 10}, {flavour: 10}],
    }
    return function manager(input) {
        let command = input.split(' ')[0];
        let manage = {
            restock,
            prepare,
            report
        }
        return manage[command].call(supply);
        
        function restock() {
            let element = input.split(' ')[1];
            let quantity = Number(input.split(' ')[2]);
            supply[element] += quantity;
            return 'Success';
        }
        function report() {
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
        function prepare() {
            let currentRecipe = input.split(' ')[1];
            let count = Number(input.split(' ')[2]);
            let isEnough = true;
            let output = '';
            for (const product of recipe[currentRecipe]) {
                let [productName, productCount] = Object.entries(product)[0];
                if (this[productName] < productCount * count) {
                    isEnough = false;
                    output = `Error: not enough ${productName} in stock`;
                    break;
                }
            }
            if (isEnough) {
                for (const product of recipe[currentRecipe]) {
                    let [productName, productCount] = Object.entries(product)[0];
                    this[productName] -= productCount * count;
                }
                output = 'Success';
            }
            return output;
        }
    }
}
let manager = solution ();
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));