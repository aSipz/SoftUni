function tradeCommissions(input) {
    let city = input[0];
    let income = parseFloat(input[1]);
    let commission = 0;
    if (city == "Sofia") {
        if ( 0 <= income && income <= 500) {
            commission = 0.05 * income;
        } else if ( 500 < income && income <= 1000) {
            commission = 0.07 * income;
        } else if ( 1000 < income && income <= 10000) {
            commission = 0.08 * income;
        } else if (income > 10000) {
            commission = 0.12 * income;
        } else {
            commission = "error";
        }
    } else if ( city == "Varna") {
        if ( 0 <= income && income <= 500) {
            commission = 0.045 * income;
        } else if ( 500 < income && income <= 1000) {
            commission = 0.075 * income;
        } else if ( 1000 < income && income <= 10000) {
            commission = 0.1 * income;
        } else if (income > 10000) {
            commission = 0.13 * income;
        } else {
            commission = "error";
        }
    } else if (city == "Plovdiv") {
        if ( 0 <= income && income <= 500) {
            commission = 0.055 * income;
        } else if ( 500 < income && income <= 1000) {
            commission = 0.08 * income;
        } else if ( 1000 < income && income <= 10000) {
            commission = 0.12 * income;
        } else if (income > 10000) {
            commission = 0.145 * income;
        } else {
            commission = "error";
        }
    } else {
        commission = "error"
    }
    if (isNaN(commission)) {
        console.log(commission);
    } else {
        console.log(commission.toFixed(2));
    }
}
tradeCommissions(["Varnas" , 10]);