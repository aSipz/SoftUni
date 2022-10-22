function pcStore(input) {
    const bgnToUsd = 1.57;
    let cpuPriceUsd = Number(input[0]);
    let gpuPriceUsd = Number(input[1]);
    let ramPriceUsd = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);
    let budgetUsd = 0;
    let budgetLeva = 0;
    budgetUsd = (cpuPriceUsd + gpuPriceUsd) * (1 - discount) + ramPriceUsd * ramCount;
    budgetLeva = budgetUsd * bgnToUsd;
    console.log(`Money needed - ${budgetLeva.toFixed(2)} leva.`);
}
pcStore(["1200",
"850",
"120",
"4",
"0.1"]);