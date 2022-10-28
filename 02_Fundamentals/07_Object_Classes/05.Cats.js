function cats(input) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let i = 0; i < input.length; i++) {
        let tempCat = new Cat(input[i].split(' ')[0], input[i].split(' ')[1]);
        tempCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);