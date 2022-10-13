function currency(input) {
    let sum = parseFloat(input[0]);
    let inCurrency = input[1];
    let outCurrency = input[2];
    let result = 0;
    if (inCurrency == "BGN") {
        if (outCurrency == "USD") {
            result = sum / 1.79549;
        } else if (outCurrency == "EUR") {
            result = sum / 1.95583;
        } else if (outCurrency == "GBP") {
            result = sum / 2.53405;
        }
    }
    if (inCurrency == "USD") {
        if (outCurrency == "BGN") {
            result = sum * 1.79549;
        } else if (outCurrency == "EUR") {
            result = (sum * 1.79549) / 1.95583;
        } else if (outCurrency == "GBP") {
            result = (sum * 1.79549) / 2.53405;
        }
    }
    if (inCurrency == "EUR") {
        if (outCurrency == "BGN") {
            result = sum * 1.95583;
        } else if (outCurrency == "USD") {
            result = (sum * 1.95583) / 1.79549;
        } else if (outCurrency == "GBP") {
            result = (sum * 1.95583) / 2.53405;
        }
    }
    if (inCurrency == "GBP") {
        if (outCurrency == "BGN") {
            result = sum * 2.53405;
        } else if (outCurrency == "USD") {
            result = (sum * 2.53405) / 1.79549;
        } else if (outCurrency == "EUR") {
            result = (sum * 2.53405) / 1.95583;
        }
    }
    console.log(`${result.toFixed(2)} ${outCurrency}`);
}
currency([12.35, "EUR", "GBP"]);