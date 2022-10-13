function latinLatters(n) {
  let num = Number(n);
  let char1 = "";
  let char2 = "";
  let char3 = "";
  for (let i = "a".charCodeAt(); i < "a".charCodeAt() + num; i++) {
    char1 = String.fromCharCode(i);
    for (let j = "a".charCodeAt(); j < "a".charCodeAt() + num; j++) {
      char2 = String.fromCharCode(j);
      for (let k = "a".charCodeAt(); k <  "a".charCodeAt() + num; k ++) {
        char3 = String.fromCharCode(k);
        console.log(char1 + char2 + char3);
      }
    }
  }
}
latinLatters(2);
