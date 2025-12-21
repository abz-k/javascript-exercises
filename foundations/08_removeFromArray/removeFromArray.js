const removeFromArray = function (array, ...args) {
  for (let arg in args) {
    while (array.includes(args[arg])) {
      let index = array.indexOf(args[arg]);
      array.splice(index, 1);
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
