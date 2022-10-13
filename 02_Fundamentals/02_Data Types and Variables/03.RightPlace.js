function rightPlace(string1, char, string2) {
  let result = string1.replace("_", char);
  let output = result === string2 ? "Matched" : "Not Matched";
  // if (result === string2) {
  //   console.log("Matched");
  // } else {
  //   console.log("Not Matched");
  // }
  console.log(output);
}
rightPlace("Str_ng", "i", "String");
