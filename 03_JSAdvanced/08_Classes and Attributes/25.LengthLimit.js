class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this._innerString = innerString;
    }
    get innerString() {
        return this._innerString;
    }
    set innerString(value) {
        if (value == this.innerString) {
            this._innerString = value;
        }
    }
    increase(value) {
        this.innerLength += value;
    }
    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.innerLength == 0) {
            return '...';
        }
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); 
