function truckDriver(input) {
    let season = input[0];
    let distance = parseFloat(input[1]);
    let salary = 0;
    switch (season) {
        case "Spring":
        case "Autumn":
            if (distance <= 5000) {
                salary = distance * 0.75 * 4;
            } else if (distance <= 10000) {
                salary = distance * 0.95 * 4;
            } else if (distance <= 20000) {
                salary = distance * 1.45 * 4;
            }
            break;
        case "Summer":
            if (distance <= 5000) {
                salary = distance * 0.9 * 4;
            } else if (distance <= 10000) {
                salary = distance * 1.1 * 4;
            } else if (distance <= 20000) {
                salary = distance * 1.45 * 4;
            }
            break;
        case "Winter":
            if (distance <= 5000) {
                salary = distance * 1.05 * 4;
            } else if (distance <= 10000) {
                salary = distance * 1.25 * 4;
            } else if (distance <= 20000) {
                salary = distance * 1.45 * 4;
            }
            break;
    }
    salary = 0.9 * salary;
    console.log(salary.toFixed(2));
}
truckDriver(["Summer", 3455]);