// #1
class HttpRequest {
    constructor(
        public method: string,
        public uri: string,
        public version: string,
        public message: string,
        public response?: string,
        public fulfilled: boolean = false
    ) { }
}

let myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');

console.log(myData);

console.log('------------------------------');

// #2
type ticketReturn = {
    destination: string,
    price: number,
    status: string
}

class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) { }
}

type ticketArray = ticketReturn | undefined;

function tickets(inputArray: string[], sortingCriteria: keyof Ticket): ticketArray[] {
    const arr = inputArray.map(x => x.split('|'))
        .map(([destination, price, status]) => new Ticket(destination, +price, status));
    if (sortingCriteria == 'price') {
        return arr.sort((a, b) => a.price - b.price)
    }
    return arr.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
));

console.log('------------------------------');

// #3
abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number = 0,
        public tasks: (string | undefined)[] = []
    ) { }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month`);
    }

    protected getSalary(): number {
        return this.salary;
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task.')
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}

export class Manager extends Employee {
    constructor(name: string, age: number, public divident: number = 0) {
        super(name, age);
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }

    protected getSalary(): number {
        return this.salary + this.divident;
    }
}

console.log('------------------------------');

// #4
abstract class Melon {
    constructor(
        public weight: number,
        public melonSort: string,
        protected element: string = ''
    ) { }

    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `
        Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index ${this.elementIndex}
        `;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string, element: string = 'Water') {
        super(weight, melonSort, element);
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string, element: string = 'Fire') {
        super(weight, melonSort, element);
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string, element: string = 'Earth') {
        super(weight, melonSort, element);
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string, element: string = 'Air') {
        super(weight, melonSort, element);
    }
}

class Melolemonmelon extends Watermelon {
    private elementsArray: string[] = ['Fire', 'Earth', 'Air', 'Water'];

    constructor(weight: number, melonSort: string, element: string = 'Water') {
        super(weight, melonSort, element);
    }

    public morph(): void {
        const newElement = this.elementsArray.shift();
        this.elementsArray.push(newElement as string);
        this.element = newElement as string;
    }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let melolemonmelon: Melolemonmelon = new Melolemonmelon(15, "Tralalala");
melolemonmelon.morph();
console.log(melolemonmelon.toString());

console.log('------------------------------');

// #5
class Box<T> {
    private list: T[] = [];

    public add(el: T) {
        this.list.push(el);
    }

    public remove(): void {
        this.list.pop();
    }

    public get count(): number {
        return this.list.length;
    }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);

console.log('------------------------------');

// #6
class KeyValuePair<T, U> {
    private key!: T;
    private val!: U;

    public setKeyValue(key: T, value: U): void {
        this.key = key;
        this.val = value;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.val}`);
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();