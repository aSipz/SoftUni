class Company {
    constructor() {
    }
    addEmployee(name, salary, position, department) {
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!name || !position || !department || !salary) {
            throw new Error('Invalid input!');
        }
        if (!this[department]) {
            this[department] = {
                totalSalary: 0,
                averageSalary: 0,
                employeeCount: 0
            };
        }
        this[department][name] = { salary, position };
        this[department].totalSalary += salary;
        this[department].employeeCount++;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepart = { averageSalary: 0, name: '' };
        for (const depart in this) {
            this[depart].averageSalary = this[depart].totalSalary / this[depart].employeeCount;
            if (this[depart].averageSalary > bestDepart.averageSalary) {
                bestDepart.averageSalary = this[depart].averageSalary;
                bestDepart.name = depart;
            }
        }
        let result = '';
        result += `Best Department is: ${bestDepart.name}\n`;
        result += `Average salary: ${bestDepart.averageSalary.toFixed(2)}\n`;
        Object.entries(this[bestDepart.name])
            .filter(([key]) => key != 'averageSalary' && key != 'totalSalary' && key != 'employeeCount')
            .sort(([keyA, ValueA], [keyB, valueB]) => valueB.salary - ValueA.salary || keyA.localeCompare(keyB))
            .forEach(([name, info]) => {
                result += `${name} ${info.salary} ${info.position}\n`;
            });
        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 1, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
