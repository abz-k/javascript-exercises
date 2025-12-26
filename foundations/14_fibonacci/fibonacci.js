const fibonacci = function (numOfFibMember) {
  numOfFibMember = parseInt(numOfFibMember);
  if (numOfFibMember < 0) {
    return "OOPS";
  }

  const fib = [0, 1];
  for (let i = 2; i < numOfFibMember + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[numOfFibMember];
};

// Do not edit below this line
module.exports = fibonacci;
