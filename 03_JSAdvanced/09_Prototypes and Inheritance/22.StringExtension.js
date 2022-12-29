(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.valueOf().startsWith(str)) {
            return str + this.valueOf();
        } else {
            return this.valueOf();
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.valueOf().endsWith(str)) {
            return this.valueOf() + str;
        } else {
            return this.valueOf();
        }
    }
    String.prototype.isEmpty = function () {
        return this.valueOf() === '';
    }
    String.prototype.truncate = function (n) {
        if (this.valueOf().length <= n) {
            return this.valueOf();
        }
        if (this.valueOf().includes(' ')) {
            let result = '';
            for (const iterator of this.valueOf().split(' ')) {
                let length = result ? result.length : 0;
                if (length + iterator.length + 3 > n) {
                    return result.trim() + '...';
                }
                result += iterator + ' ';
            }
        }
        if (n >= 4) {
            return this.valueOf().slice(0, n - 3) + '...';
        }
        return '.'.repeat(n);
    }
    String.format = function(string, ...params) {
        let pattern = /{\d}/;
        params.forEach(param => {
            string = string.replace(pattern, param);
        });
        return string;
    }
})()

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown', 'dfd', 'sdd');
    console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
    console.log(str);
