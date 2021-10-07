// import React from 'react';
// import ReactDOM from 'react-dom';
import emojipedia from './emojipedia';

let numArray = [3, 56, 2, 48, 5];


// ================================================
// map function
// ================================================
const squareRootArray = numArray.map(eachNum => Math.pow(eachNum, 0.5));

// IF you make the arrow functions multiple lines, return keywork is needed.
// const squareRootArray = numArray.map(eachNum => {
//     return Math.pow(eachNum, 0.5)
// });

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

// ================================================
// subString function
// Based on functions above, truncate emojipedia meaning sections to 100 character for each.
// ================================================

const truncatedStringArray = emojipedia.map(eachObj => eachObj.meaning.substring(0, 100));

console.log(truncatedStringArray);

// ================================================
// Spread Operator
// Spread Operator is used to put an array or object into another array or object.
// ================================================

const citrus = ['Lime', 'Lemon', 'Grapefruit'];
const fruits = ['Apple', ...citrus, 'Banana', 'Plum'];

const fullName = {
    fName: 'James',
    lName: 'Bond'
};

// Triple dot is necessary as otherwise system takes them as a subArray or subObject
const user = {
    ...fullName,
    id: 1,
    userName: 'jbond007'
};

console.log(fruits);
// Output: Array(6) [ "Apple", "Lime", "Lemon", "Grapefruit", "Banana", "Plum" ]

console.log(user);
// Output: Object { fName: "James", lName: "Bond", id: 1, userName: "jbond007" }