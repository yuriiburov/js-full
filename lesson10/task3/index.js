// 1. create array
// 2. push numbers in array

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = (num) => {
  const array = [];
  array.push(Math.floor(num * 100) / 100);
  array.push(Math.trunc(num * 100) / 100);
  array.push(Math.ceil(num * 100) / 100);
  array.push(Math.round(num * 100) / 100);
  array.push(+num.toFixed(2));
  return array;
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
