function footballLeague(input) {
  let stadiumCap = parseInt(input[0]);
  let numFans = parseInt(input[1]);
  let sector = "";
  let fansA = 0;
  let fansB = 0;
  let fansV = 0;
  let fansG = 0;
  for (i = 2; i < input.length; i++) {
    sector = input[i];
    switch (sector) {
      case "A":
        fansA++;
        break;
      case "B":
        fansB++;
        break;
      case "V":
        fansV++;
        break;
      case "G":
        fansG++;
        break;
    }
  }
  console.log(`${((fansA / numFans) * 100).toFixed(2)}%`);
  console.log(`${((fansB / numFans) * 100).toFixed(2)}%`);
  console.log(`${((fansV / numFans) * 100).toFixed(2)}%`);
  console.log(`${((fansG / numFans) * 100).toFixed(2)}%`);
  console.log(`${((numFans / stadiumCap) * 100).toFixed(2)}%`);
}
footballLeague([
  93,
  16,
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
]);
