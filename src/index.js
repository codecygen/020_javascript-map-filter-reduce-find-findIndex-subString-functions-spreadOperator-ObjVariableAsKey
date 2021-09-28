let numArray = [3, 56, 2, 48, 5];

// Notice that in order for this to work, you dont put the Math.pow section
// inside the curly braces just like in a normal function.
// Otherwise it gives error.
// ================================================
// map function
// ================================================
const squareRootArray = numArray.map(eachNum => Math.pow(eachNum, 0.5));

console.log(squareRootArray);
// Output: Array(5) [ 1.7320508075688772, 7.483314773547883, 1.4142135623730951, 6.928203230275509, 2.23606797749979 ]

// ================================================
// reduce function
// ================================================

const concatenateNum = numArray.reduce((previousNum, currentNum) => previousNum.toString() + currentNum.toString());

console.log(concatenateNum);
// Output: 3562485

// ================================================
// filter function
// ================================================

const bigNumArray = numArray.filter(eachNum => eachNum > 30);
console.log(bigNumArray);
// Output: Array [ 56, 48 ]

// ================================================
// find function
// ================================================

const firstBigNum = numArray.find(eachNum => eachNum > 30);
console.log(firstBigNum);
// Output: 56

// ================================================
// findIndex function
// ================================================

const indexOfFistBigNum = numArray.findIndex(eachNum => eachNum > 30);
console.log(indexOfFistBigNum);
// Output: 1
