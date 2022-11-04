function companyUsers(input) {
    let companyList = {};
    for (const line of input) {
        let [currentCompany, currentEmployee] = line.split(' -> ');
        let employeeList = new Set();
        if (companyList[currentCompany]) {
            employeeList = companyList[currentCompany];
        }
        employeeList.add(currentEmployee);
        companyList[currentCompany] = employeeList;
    }
    let companyArray = Object.entries(companyList);
    companyArray.sort(([keyA], [KeyB]) => keyA.localeCompare(KeyB));
    for (const [company, employeeList] of companyArray) {
        console.log(company);
        employeeList.forEach(employee => {
            console.log(`-- ${employee}`);
        });
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );