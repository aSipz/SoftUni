function bitcoin(input) {
  let numOfDays = input.length;
  let totalGold = 0;
  let goldPerDay = 0;
  let bitcoin = 0;
  let dayOfFirstBit = 0;
  let moneyLeft = 0;
  for (let i = 0; i < input.length; i++) {
    goldPerDay = Number(input[i]);
    if ((i + 1) % 3 == 0) {
      goldPerDay *= 0.7;
    }
    totalGold += goldPerDay;
    if (totalGold >= 11949.16 / 67.51 && dayOfFirstBit == 0) {
      dayOfFirstBit = i + 1;
    }
  }
  bitcoin = Math.floor((totalGold * 67.51) / 11949.16);
  moneyLeft = totalGold * 67.51 - bitcoin * 11949.16;
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin != 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBit}`);
  }
  console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300]);
