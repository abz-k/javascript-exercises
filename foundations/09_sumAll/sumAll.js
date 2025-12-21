const sumAll = function (a, b) {
  let accumalator = 0;
  if (a > b) {
    [b, a] = [a, b];
    for (let i = a; i <= b; i++) {
      accumalator += i;
    }
  } else if (a < 0 || b < 0) {
    return "ERROR";
  }

  return accumalator;
};

// Do not edit below this line
module.exports = sumAll;
