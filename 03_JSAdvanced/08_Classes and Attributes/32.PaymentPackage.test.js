describe('Test PaymentPackage Class', () => {
    describe('Test accessor name', () => {
        it('Should throw error with empty string for name', () => {
            let message = '';
            try {
                let hrServices = new PaymentPackage('', 1500);
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Name must be a non-empty string');
        });
        it('Should throw error with non-string for name', () => {
            let message = '';
            try {
                let hrServices = new PaymentPackage(5, 1500);
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Name must be a non-empty string');
        });
        it('Should throw error when trying to change name with incorrect input', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            let message = '';
            try {
                hrServices.name = [5];
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Name must be a non-empty string');
        });
        it('Should display correct name', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            expect(hrServices.name).to.be.equal('HR Services');
        });
        it('Should be able to change name with accessor', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            hrServices.name = 'bla'
            expect(hrServices.name).to.be.equal('bla');
        });
    });
    describe('Test accessor value', () => {
        it('Should throw error without value input', () => {
            let message = '';
            try {
                let hrServices = new PaymentPackage('HR Services');
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Value must be a non-negative number');
        });
        it('Should throw error with wrong value type input', () => {
            let message = '';
            try {
                let hrServices = new PaymentPackage('HR Services', [4]);
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Value must be a non-negative number');
        });
        it('Should throw error with negative number input', () => {
            let message = '';
            try {
                let hrServices = new PaymentPackage('HR Services', -1);
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Value must be a non-negative number');
        });
        it('Should throw error when trying to change value with incorrect input type', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            let message = '';
            try {
                hrServices.value = 'df'
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Value must be a non-negative number');
        });
        it('Should display correct value', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            expect(hrServices.value).to.be.equal(1500);
        });
        it('Should be able to change value with accessor', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            hrServices.value = 0;
            expect(hrServices.value).to.be.equal(0);
        });
    });
    describe('Test accessor VAT', () => {
        it('Should be able to set VAT via accessor', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            hrServices.VAT = 10;
            expect(hrServices.VAT).to.be.equal(10);
        });
        it('Should display correct default value for VAT', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            expect(hrServices.VAT).to.be.equal(20);
        });
        it('Should throw error when trying to set VAT with negative number', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            let message = '';
            try {
                hrServices.VAT = -1;
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: VAT must be a non-negative number');
        });
        it('Should throw error when trying to set VAT with type different from number', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            let message = '';
            try {
                hrServices.VAT = { bla: 4 };
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: VAT must be a non-negative number');
        });

    });
    describe('Test accessor active', () => {
        it('Should display correct default value for active', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            expect(hrServices.active).to.be.equal(true);
        });
        it('Should be able to change active to false', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            hrServices.active = false;
            expect(hrServices.active).to.be.equal(false);
        });
        it('Should throw error when trying to set active with non-bool', () => {
            let hrServices = new PaymentPackage('HR Services', 1500);
            let message = '';
            try {
                hrServices.active = '';
            } catch (err) {
                message = 'Error: ' + err.message;
            }
            expect(message).to.be.equal('Error: Active status must be a boolean');
        });
    });
    describe('Test method toString()', () => {
        it('Should display correct message', ()=> {
            let hrServices = new PaymentPackage('HR Services', 1500);
            expect(hrServices.toString()).to.be.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
        });
        it('Should display correct message with active status false', ()=> {
            let hrServices = new PaymentPackage('HR Services', 1500);
            hrServices.active = false;
            expect(hrServices.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
        });
    });
});

// class PaymentPackage {
//     constructor(name, value) {
//       this.name = name;
//       this.value = value;
//       this.VAT = 20;      // Default value    
//       this.active = true; // Default value
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(newValue) {
//       if (typeof newValue !== 'string') {
//         throw new Error('Name must be a non-empty string');
//       }
//       if (newValue.length === 0) {
//         throw new Error('Name must be a non-empty string');
//       }
//       this._name = newValue;
//     }
  
//     get value() {
//       return this._value;
//     }
  
//     set value(newValue) {
//       if (typeof newValue !== 'number') {
//         throw new Error('Value must be a non-negative number');
//       }
//       if (newValue < 0) {
//         throw new Error('Value must be a non-negative number');
//       }
//       this._value = newValue;
//     }
  
//     get VAT() {
//       return this._VAT;
//     }
  
//     set VAT(newValue) {
//       if (typeof newValue !== 'number') {
//         throw new Error('VAT must be a non-negative number');
//       }
//       if (newValue < 0) {
//         throw new Error('VAT must be a non-negative number');
//       }
//       this._VAT = newValue;
//     }
  
//     get active() {
//       return this._active;
//     }
  
//     set active(newValue) {
//       if (typeof newValue !== 'boolean') {
//         throw new Error('Active status must be a boolean');
//       }
//       this._active = newValue;
//     }
  
//     toString() {
//       const output = [
//         `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
//         `- Value (excl. VAT): ${this.value}`,
//         `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
//       ];
//       return output.join('\n');
//     }
//   }