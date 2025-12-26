const palindromes = function (string) {
  const cleanedString = string.replace(/[\s,.!]/g, "").toLowerCase();
  let cleanArray = Array.from(cleanedString);
  console.log(cleanArray);
  let part1 = cleanArray.slice(0, cleanArray.length / 2);
  let part2 = cleanArray.slice(cleanArray.length / 2).reverse();
  console.log(part1, part2);

  return part1.every((element, index) => element === part2[index]);
};

// Do not edit below this line
module.exports = palindromes;
