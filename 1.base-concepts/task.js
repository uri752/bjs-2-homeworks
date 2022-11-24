function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict"
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = []
  } else if (d === 0) {
    // d = 0 - 1 корень 
    let x = -b / (2 * a);
    arr = [x];
  } else {
    //d > 0 - 2 корня
    let x1 = (-b + Math.sqrt(d))/ (2 * a);
    let x2 = (-b - Math.sqrt(d))/ (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
