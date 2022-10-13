function pyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let gold = 0;
  let lapis = 0;
  let side = base;
  let numOfSteps = 0;
  while (side >= 1) {
    numOfSteps++;
    side -= 2;
  }
  let stepAreaInside = 0;
  let stepArea = 0;
  let stepInsideVolume = 0;
  let stepFullVolume = 0;
  let stepOutsideVolume = 0;
  for (let i = 1; i <= numOfSteps; i++) {
    stepAreaInside = (base - 2 * i) ** 2;
    stepInsideVolume = stepAreaInside * increment;
    stepArea = (base - 2 * (i - 1)) ** 2;
    stepFullVolume = stepArea * increment;
    stepOutsideVolume = stepFullVolume - stepInsideVolume;
    if (i % 5 != 0 && i != numOfSteps) {
      marble += stepOutsideVolume;
      stone += stepInsideVolume;
    } else if (i != numOfSteps) {
      lapis += stepOutsideVolume;
      stone += stepInsideVolume;
    } else if (i == numOfSteps) {
      gold += stepFullVolume;
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(numOfSteps * increment)}`);
}
pyramid(11, 0.75);
