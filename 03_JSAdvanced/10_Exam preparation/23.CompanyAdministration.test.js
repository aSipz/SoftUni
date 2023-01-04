describe('Test companyAdministration object', () => {
    describe('Test hiringEmployee method', () => {
        it('Should throw an error with value different form programmer', () => {
            expect(() => { companyAdministration.hiringEmployee('name', 'position', 5) }).to.throw('We are not looking for workers for this position')
        });
        it('Should have 3 or more years to be hired', () => {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 3)).to.be.equal('name was successfully hired for the position Programmer.')
        });
        it('Should have 3 or more years to be hired', () => {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 2)).to.be.equal('name is not approved for this position.')
        });
    });
    describe('Test calculateSalary method', () => {
        it('Should throw an error with non number input', () => {
            expect(() => { companyAdministration.calculateSalary('4') }).to.throw('Invalid hours');
        });
        it('Should throw an error with non number input', () => {
            expect(() => { companyAdministration.calculateSalary([4]) }).to.throw('Invalid hours');
        });
        it('Should throw an error with negative number input', () => {
            expect(() => { companyAdministration.calculateSalary(-1) }).to.throw('Invalid hours');
        });
        it('Should return correct salary', () => {
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150);
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
        });
    });
    describe('Test firedEmployee method', () => {
        it('Should throw an error with non array input for employees', () => {
            expect(() => { companyAdministration.firedEmployee('4', 2) }).to.throw('Invalid input');
        });
        it('Should throw an error with incorrect parameter for index', () => {
            expect(() => { companyAdministration.firedEmployee(['Ivan', 'Pesho'], '1') }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['Ivan', 'Pesho'], -1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['Ivan', 'Pesho'], 1.5) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['Ivan', 'Pesho'], 2) }).to.throw('Invalid input');
        });
        it('Should return correct result', ()=>{
            expect(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 2)).to.be.equal('Ivan, Pesho');
            expect(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 0)).to.be.equal('Pesho, Gosho');
            expect(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 1)).to.be.equal('Ivan, Gosho');
        });
    });
});