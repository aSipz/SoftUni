function distance(x1, y1, x2, y2) {
  let side1Triangle = Math.abs(x1 - x2);
  let side2Triangle = Math.abs(y1 - y2);
  let distance = Math.sqrt(side1Triangle ** 2 + side2Triangle ** 2);
  console.log(distance);
}
distance(2.34,15.66,-13.55,-2.9985);
