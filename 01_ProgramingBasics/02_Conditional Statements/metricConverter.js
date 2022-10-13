function metricConverter(input) {
    let numForConvert = parseFloat(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];
    let numInMeters = 0;
    let numOutput = 0;
    if (inputUnit === "m") {
        numInMeters = numForConvert;
    } else if (inputUnit === "mm") {
        numInMeters = numForConvert * 0.001;
    } else if (inputUnit === "cm") {
        numInMeters = numForConvert * 0.01;
    } else if (inputUnit === "mi") {
        numInMeters = numForConvert / 0.000621371192;
    } else if (inputUnit === "in") {
        numInMeters = numForConvert / 39.3700787;
    } else if (inputUnit === "km") {
        numInMeters = numForConvert * 1000;
    } else if (inputUnit === "ft") {
        numInMeters = numForConvert / 3.2808399;
    } else if (inputUnit === "yd") {
        numInMeters = numForConvert / 1.0936133;
    }
    if (outputUnit === "m") {
        numOutput = numInMeters;
    } else if (outputUnit === "mm") {
        numOutput = numInMeters / 0.001;
    } else if (outputUnit === "cm") {
        numOutput = numInMeters / 0.01;
    } else if (outputUnit === "mi") {
        numOutput = numInMeters * 0.000621371192;
    } else if (outputUnit === "in") {
        numOutput = numInMeters * 39.3700787;
    } else if (outputUnit === "km") {
        numOutput = numInMeters / 1000;
    } else if (outputUnit === "ft") {
        numOutput = numInMeters * 3.2808399;
    } else if (outputUnit === "yd") {
        numOutput = numInMeters * 1.0936133;
    }
    console.log(numOutput);
}
metricConverter([150, "mi", "in"]);