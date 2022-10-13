function forecast(input) {
    let degree = Number (input[0]).toFixed(1);
    if (degree < 5.00) {
        console.log("unknown");
    } else if (degree <= 11.9) {
        console.log("Cold");    
    } else if (degree <= 14.9) {
        console.log("Cool");
    } else if (degree <= 20.00) {
        console.log("Mild");
    } else if (degree <= 25.9) {
        console.log("Warm");
    } else if (degree <= 35.00) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}
forecast([11.96]);