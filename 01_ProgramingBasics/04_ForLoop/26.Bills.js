function bills(input) {
  let months = parseInt(input[0]);
  let elBill = 0;
  let waterBill = 20;
  let internerBill = 15;
  let totalEl = 0;
  let totalWater = waterBill * months;
  let totalInternet = internerBill * months;
  let totalOther = 0;
  let allBills = 0;
  for (i = 1; i < input.length; i++) {
    elBill = parseFloat(input[i]);
    totalEl += elBill;
    totalOther += (waterBill + internerBill + elBill) * 1.2;
  }
  allBills = totalWater + totalInternet + totalEl + totalOther;
  console.log(`Electricity: ${totalEl.toFixed(2)} lv`);
  console.log(`Water: ${totalWater.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
  console.log(`Other: ${totalOther.toFixed(2)} lv`);
  console.log(`Average: ${(allBills / months).toFixed(2)} lv`);
}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ]);
