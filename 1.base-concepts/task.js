"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    x1 = (- b + Math.sqrt(d)) / (2 * a);
    x2 = (- b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = - b / (2 * a);
    arr.push(x1);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let creditBody;
  percent = percent/100/12;
  creditBody = amount - contribution;
  let payment = creditBody * (percent + (percent / (((1 + percent)**countMonths) - 1 )));
  let totalMortgage = Number((payment * countMonths).toFixed(2));

  return totalMortgage;
}