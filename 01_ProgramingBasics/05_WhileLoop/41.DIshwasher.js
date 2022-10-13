function dishwasher(input) {
  let numSoapBottles = Number(input[0]);
  let soap = numSoapBottles * 750;
  let usedSoap = 0;
  let i = 1;
  let numDishes = 0;
  let numPots = 0;
  let totalDishes = 0;
  let totalPots = 0;
  let isEnough = true;
  while (input[i] != 'End') {
    if (i % 3 == 0) {
        numPots = Number(input[i]);
        numDishes = 0;
        totalPots += numPots;
    } else {
        numDishes = Number(input[i]);
        numPots = 0;
        totalDishes += numDishes;
    }
    usedSoap += numDishes * 5 + numPots * 15;
    if (usedSoap > soap) {
        isEnough = false;
        break;
    }
    i++;
  }
  if (isEnough) {
    console.log('Detergent was enough!');
    console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
    console.log(`Leftover detergent ${soap - usedSoap} ml.`);
  } else {
    console.log(`Not enough detergent, ${usedSoap - soap} ml. more necessary!`);
  }
}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30
    ]);
