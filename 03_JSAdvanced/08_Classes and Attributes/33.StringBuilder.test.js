describe('Test StringBuilder Class', () => {
    describe('Test if created object instances are valid', () => {
        it('Should store chars in right way', () => {
            let str = new StringBuilder('hello');
            expect(str.toString()).to.be.equal('hello')
        });
        it('Should store empty array if no value is passed', () => {
            let str = new StringBuilder();
            expect(str.toString()).to.be.equal('');
        });
        it('Should store empty array if no value is passed', () => {
            let str = new StringBuilder;
            expect(str.toString()).to.be.equal('');
        });
        it('Should throw error with non-string', () => {
            let message = '';
            try {
                let str = new StringBuilder(4);
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
    });
    describe('Test append method', () => {
        it('Should throw error with non-string', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.append(['df']);
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
        it('Should correctly append new string', () => {
            let str = new StringBuilder('hello');
            str.append(', there');
            expect(str.toString()).to.be.equal('hello, there')
        });
        it('Should correctly append new string', () => {
            let str = new StringBuilder;
            str.append('a');
            expect(str.toString()).to.be.equal('a')
        });
        it('Should correctly work with undefined', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.append()
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
        it('Should correctly work with empty string', () => {
            let str = new StringBuilder;
            str.append('');
            expect(str.toString()).to.be.equal('')
        });
    });
    describe('Test prepend method', () => {
        it('Should throw error with non-string', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.prepend(5);
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
        it('Should correctly prepend new string', () => {
            let str = new StringBuilder('hello');
            str.prepend('ha ');
            expect(str.toString()).to.be.equal('ha hello')
        });
        it('Should correctly prepend new string', () => {
            let str = new StringBuilder;
            str.prepend('a');
            expect(str.toString()).to.be.equal('a')
        });
        it('Should correctly work with empty string', () => {
            let str = new StringBuilder;
            str.prepend('');
            expect(str.toString()).to.be.equal('')
        });
        it('Should correctly work with undefined', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.prepend()
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
    });
    describe('Test insertAt method', () => {
        it('Should throw error with non-string', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.insertAt({}, 3)
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
        it('Should correctly work with empty string', () => {
            let str = new StringBuilder('hello');
            str.insertAt('', 2)
            expect(str.toString()).to.be.equal('hello');
        });
        it('Should correctly insert new string', () => {
            let str = new StringBuilder('hello');
            str.insertAt('1', 1);
            expect(str.toString()).to.be.equal('h1ello')
        });
        it('Should correctly insert new string', () => {
            let str = new StringBuilder('hello');
            str.insertAt('aaa', 2);
            expect(str.toString()).to.be.equal('heaaallo')
        });
        it('Should correctly work without arguments', () => {
            let str = new StringBuilder('hello');
            let message = '';
            try {
                str.insertAt()
            } catch (err) {
                message = err.name + err.message;
            }
            expect(message).to.be.equal('TypeErrorArgument must be a string');
        });
    });
    describe('Test remove method', () => {
        it('Should correctly remove elements', () => {
            let str = new StringBuilder('hello');
            str.remove(0, 2);
            expect(str.toString()).to.be.equal('llo')
        });
        it('Should correctly remove elements', () => {
            let str = new StringBuilder('hello');
            str.remove();
            expect(str.toString()).to.be.equal('hello')
        });
    });
    describe('Test toString method', () => {
        it('Should give correct result', () => {
            let str = new StringBuilder('a');
            str.append('b');
            str.prepend('c');
            expect(str.toString()).to.be.equal('cab')
        });
        it('Should give correct result', () => {
            let str = new StringBuilder('hello\nhello');
            expect(str.toString()).to.be.equal('hello\nhello')
        });
        it('toString should works correctly', () => {
            const expected = '\n A \n\r B\t123   ';
            const obj = new StringBuilder();
            expected.split('').forEach(s => {obj.append(s); obj.prepend(s); });
            obj.insertAt('test', 4);
            obj.remove(2, 4);
            expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});

// class StringBuilder {
//     constructor(string) {
//       if (string !== undefined) {
//         StringBuilder._vrfyParam(string);
//         this._stringArray = Array.from(string);
//       } else {
//         this._stringArray = [];
//       }
//     }
  
//     append(string) {
//       StringBuilder._vrfyParam(string);
//       for(let i = 0; i < string.length; i++) {
//         this._stringArray.push(string[i]);
//       }
//     }
  
//     prepend(string) {
//       StringBuilder._vrfyParam(string);
//       for(let i = string.length - 1; i >= 0; i--) {
//         this._stringArray.unshift(string[i]);
//       }
//     }
  
//     insertAt(string, startIndex) {
//       StringBuilder._vrfyParam(string);
//       this._stringArray.splice(startIndex, 0, ...string);
//     }
  
//     remove(startIndex, length) {
//       this._stringArray.splice(startIndex, length);
//     }
  
//     static _vrfyParam(param) {
//       if (typeof param !== 'string') throw new TypeError('Argument must be a string');
//     }
  
//     toString() {
//       return this._stringArray.join('');
//     }
//   }