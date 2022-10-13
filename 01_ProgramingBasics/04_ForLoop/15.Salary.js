function salary(input) {
    let tabCount = parseInt(input[0]);
    let moneyForSalary = parseFloat(input[1]);
    let tabName = "";
    for (i = 2; i <= tabCount + 1; i++) {
        tabName = input[i];
        switch (tabName) {
            case "Facebook":
                moneyForSalary -= 150;
                break;
            case "Instagram":
                moneyForSalary -= 100;
                break;
            case "Reddit":
                moneyForSalary -= 50;
        }
    }
    if (moneyForSalary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(moneyForSalary.toFixed());
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);